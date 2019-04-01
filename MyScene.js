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
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        //this.prism = new MyPrism(this, 100);
        //this.cylinder = new MyCylinder(this, 100);
        this.tree   = new MyTree(this, 3, 1, 3, 3, this.trunk_mat, this.top_mat);
        this.group 	= new MyTreeGroupPatch(this, 3.5, 0.8, 3, 2, this.trunk_mat, this.top_mat);
        this.row    = new MyTreeRowPatch(this, 3.5, 0.8, 3, 2, this.trunk_mat, this.top_mat);
        this.house2 	= new MyHouse(this, 2);
        this.house1     = new MyHouse(this, 1);
        this.house0     = new MyHouse(this, 0);
        this.skybox     = new MyCubeMap(this);
        this.terrain    = new MyQuad(this);
        this.hill       = new MyVoxelHill(this, 10);


        //Objects connected to MyInterface
        this.displayPrism = false;
        this.displayCylinder = false;
    }
    
    initLights() {
        this.lights[0].setPosition(10, 10, 10, 1);
        this.lights[0].setVisible(true);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(100, 100, 100), vec3.fromValues(0, 0, 0));
    }
    
    initMaterials(){
        // TEXTURES
        this.trunk_text = new CGFtexture(this, 'images/trunk.png');
        this.top_text = new CGFtexture(this, 'images/top.png');
        this.skybox_text = new CGFtexture(this, 'images/rockyvalley_bk.png');
        this.topText = new CGFtexture(this, 'images/mineTop.png');
		this.botText = new CGFtexture(this, 'images/mineBottom.png');
        this.sideText = new CGFtexture(this, 'images/mineSide.png');


        // MATERIALS
        this.trunk_mat = new CGFappearance(this)
        this.trunk_mat.setAmbient(1, 1, 1, 1);
        this.trunk_mat.setDiffuse(1, 1, 1, 0.1);
        this.trunk_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.trunk_mat.setShininess(10.0);
        this.trunk_mat.setTexture(this.trunk_text);
        this.trunk_mat.setTextureWrap('REPEAT', 'REPEAT');
        
        this.top_mat = new CGFappearance(this);
        this.top_mat.setAmbient(1, 1, 1, 1);
        this.top_mat.setDiffuse(1, 1, 1, 0.1);
        this.top_mat.setSpecular(0.1, 0.1, 0.1, 0.1);
        this.top_mat.setShininess(10.0);
        this.top_mat.setTexture(this.top_text);

        this.skybox_mat = new CGFappearance(this)
        this.skybox_mat.setAmbient(1, 1, 1, 1);
        this.skybox_mat.setDiffuse(1, 1, 1, 0.1);
        this.skybox_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.skybox_mat.setShininess(10.0);
        this.skybox_mat.setTexture(this.skybox_text);

        this.topMat = new CGFappearance(this);
        this.topMat.setAmbient(1, 1, 1, 1);
        this.topMat.setDiffuse(1, 1, 1, 1);
        this.topMat.setSpecular(0.1, 0.1, 0.1, 0.1);
        this.topMat.setShininess(10.0);
        this.topMat.setTexture(this.topTex);

		this.sideMat = new CGFappearance(this);
        this.sideMat.setAmbient(1, 1, 1, 1.0);
        this.sideMat.setDiffuse(1, 1, 1, 0.01);
        this.sideMat.setSpecular(1, 1, 1, 1.0);
        this.sideMat.setShininess(10.0);
        this.sideMat.setTexture(this.sideText);
        this.sideMat.setTextureWrap('REPEAT', 'REPEAT');
		
		this.botMat = new CGFappearance(this);
        this.botMat.setAmbient(1, 1, 1, 1.0);
        this.botMat.setDiffuse(1, 1, 1, 0.01);
        this.botMat.setSpecular(1, 1, 1, 1.0);
        this.botMat.setShininess(10.0);
        this.botMat.setTexture(this.botText);
        this.botMat.setTextureWrap('REPEAT', 'REPEAT');
        
        this.empty = new CGFappearance(this);
        this.empty.setAmbient(1, 1, 1, 1);
        this.empty.setDiffuse(1, 1, 1, 1);
        this.empty.setSpecular(1, 1, 1, 1);
        this.empty.setShininess(10.0);
        
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        // Draw axis
        //this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.empty.apply();
        this.pushMatrix();

        this.house2.display();

        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.translate(0,0,2.4);
        this.house0.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.translate(3.4,0,0);
        this.house1.display();

        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.rotate(Math.PI/2, -1,0,0);
        this.scale(200,200,0);
        this.terrain.display();

        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.skybox_mat.apply();
        this.skybox.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.translate(-15,0,0);
        this.hill.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.translate(-10,0,-15);
        this.hill.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.scale(0.5,0.5,0.5);
        this.translate(10,0,-20);
        this.group.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        this.translate(22,0,15);
        this.rotate(Math.PI/3,0,-1,0);
        this.group.display();
        
        this.empty.apply();
        this.popMatrix();
        // ---- END Primitive drawing section
    }
}