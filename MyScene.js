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
        this.initCoords();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tree   = new MyTree(this, 3, 1, 3, 3, this.trunk_mat, this.top_mat);
        this.group 	= new MyTreeGroupPatch(this, 3.5, 0.8, 3, 2, this.trunk_mat, this.top_mat);
        this.row    = new MyTreeRowPatch(this, 3.5, 0.8, 3, 2, this.trunk_mat, this.top_mat);
        this.house2 	= new MyHouse(this, 2);
        this.house1     = new MyHouse(this, 1);
        this.house0     = new MyHouse(this, 0);
        this.skybox     = new MyCubeMap(this, this.skybox_mat);
        this.terrain    = new MyQuad(this);
        this.hill       = new MyVoxelHill(this, 10);
        this.fire       = new MyFire(this, 10, 5, 10, 10, this.trunk_mat, this.top_mat);
        
        this.terrain.updateTexCoords(this.terrain_coords);

        //Objects connected to MyInterface
        this.day_night = false;
    }
    
    initLights() {
        // SUN
        this.lights[0].setPosition(0, 200, 200, 1);
        this.lights[0].setVisible(false);
        this.lights[0].setDiffuse(0.945, 0.855, 0.643, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
        // MOON
        this.lights[1].setPosition(0, 200, 200, 1);
        this.lights[1].setVisible(false);
        this.lights[1].setDiffuse(0.21, 0.21, 0.533, 1.0);
        this.lights[1].disable();
        this.lights[1].update();
        // FIRE
        this.lights[2].setPosition(0, 3, 0, 1);
        this.lights[2].setVisible(true);
        this.lights[2].setDiffuse(0.886, 0, 0, 1.0);
        this.lights[2].disable();
        this.lights[2].setLinearAttenuation(1);
        this.lights[2].update();
    }
    
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    }
    
    initCoords() {
        this.terrain_coords = [
			0, 100,
			100, 100,
			0, 0,
			100, 0
		]
    }

    initMaterials(){
        // TEXTURES
        this.trunk_text = new CGFtexture(this, 'images/trunk.png');
        this.top_text = new CGFtexture(this, 'images/top.png');
        this.topText = new CGFtexture(this, 'images/mineTop.png');
		this.botText = new CGFtexture(this, 'images/mineBottom.png');
        this.sideText = new CGFtexture(this, 'images/mineSide.png');
        this.skyboxText_day = new CGFtexture(this, 'images/Skybox.png');
        this.skyboxText_night = new CGFtexture(this, 'images/Skybox-night.png');
        this.house_side = new CGFtexture(this, 'images/house_side.png');

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

        this.skybox_day_mat = new CGFappearance(this)
        this.skybox_day_mat.setAmbient(1, 1, 1, 1);
        this.skybox_day_mat.setDiffuse(1, 1, 1, 0.1);
        this.skybox_day_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.skybox_day_mat.setShininess(10.0);
        this.skybox_day_mat.setTexture(this.skyboxText_day);

        this.skybox_night_mat = new CGFappearance(this)
        this.skybox_night_mat.setAmbient(1, 1, 1, 1);
        this.skybox_night_mat.setDiffuse(1, 1, 1, 0.1);
        this.skybox_night_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.skybox_night_mat.setShininess(10.0);
        this.skybox_night_mat.setTexture(this.skyboxText_night);

        this.topMat = new CGFappearance(this);
        this.topMat.setAmbient(1, 1, 1, 1);
        this.topMat.setDiffuse(1, 1, 1, 1);
        this.topMat.setSpecular(0.1, 0.1, 0.1, 0.1);
        this.topMat.setShininess(10.0);
        this.topMat.setTexture(this.topText);
        this.topMat.setTextureWrap('REPEAT', 'REPEAT');

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
		
		this.houseSide = new CGFappearance(this);
        this.houseSide.setAmbient(1, 1, 1, 1.0);
        this.houseSide.setDiffuse(1, 1, 1, 0.01);
        this.houseSide.setSpecular(1, 1, 1, 1.0);
        this.houseSide.setShininess(10.0);
        this.houseSide.setTexture(this.house_side);
        this.houseSide.setTextureWrap('REPEAT', 'REPEAT');
        
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
        this.scale(60,60,0);
        this.topMat.apply();
        this.terrain.display();

        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();

        if(this.day_night){
            this.skybox_night_mat. apply();
        }else{
            this.skybox_day_mat.apply();
        }
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

        this.translate(32,0,15);
        this.rotate(Math.PI/3,0,-1,0);
        this.group.display();
		
		this.empty.apply();
        this.popMatrix();
        this.pushMatrix();
		
        this.translate(10,0,50);
        this.row.display();

        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();
		
        this.translate(2.5,0,-30);
        this.row.display();
        
        this.empty.apply();
        this.popMatrix();
        this.pushMatrix();
		
		this.translate(10,0,10);
        this.fire.display();

        this.empty.apply();
        this.popMatrix();
        // ---- END Primitive drawing section

        if(this.day_night){
            // NIGHT
            this.lights[0].disable();
            this.lights[0].update();
            this.lights[1].enable();
            this.lights[1].update();
            this.lights[2].enable();
            this.lights[2].update();
        }else{
            // DAY
            this.lights[0].enable();
            this.lights[0].update();
            this.lights[1].disable();
            this.lights[1].update();
            this.lights[2].disable();
            this.lights[2].update();
        }
    }
}