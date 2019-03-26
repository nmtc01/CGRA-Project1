/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.initMaterials();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.pyramid = new MyPyramid(this, 3, 1);
		this.prism	= new MyPrism(this,5);

        //Other variables connected to MyInterface
        this.displayAxis = false;
		this.prismD = true;
        this.scaleFactor = 1.0;
		this.intensity = 0.3;
    }
    initLights() {
        this.setGlobalAmbientLight(1, 1, 1, 1);

        this.lights[0].setPosition(2.0, 2.0, -1.0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].update();

        this.lights[1].setPosition(0.0, -1.0, 2.0, 1.0);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setSpecular(1.0, 1.0, 0.0, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(10, 10, 10), vec3.fromValues(0, 0, 0));
    }

    initMaterials() {
        // Red Ambient (no diffuse, no specular)
        this.material1 = new CGFappearance(this);
        this.material1.setAmbient(1, 0, 0, 1.0);
        this.material1.setDiffuse(0, 0, 0, 1.0);
        this.material1.setSpecular(0, 0, 0, 1.0);
        this.material1.setShininess(10.0);

        // Red Diffuse (no ambient, no specular)
        this.material2 = new CGFappearance(this);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(1, 0, 0, 1.0);
        this.material2.setSpecular(0, 0, 0, 1.0);
        this.material2.setShininess(10.0);

    }
	
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        this.lights[0].update();
        this.lights[1].update();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.scale(this.scaleFactor,this.scaleFactor,this.scaleFactor);
        this.setGlobalAmbientLight(this.intensity, this.intensity, this.intensity, 1);
		
		this.material1.apply();
		
		if(this.prismD)
			this.prism.display();
		
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}