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
        this.updateTimeOfTheDay();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Objects connected to MyInterface
        this.day_night = 0;
        this.textures = true;

        this.enableTextures(this.textures);

        //Initialize scene objects
        this.axis       = new CGFaxis(this);
        this.group 	    = new MyTreeGroupPatch(this, 1.75, 0.4, 1.5, 1, this.trunk_mat, this.tree_top_mat);
        this.row        = new MyTreeRowPatch(this, 1.75, 0.4, 1.5, 1, this.trunk_mat, this.tree_top_mat);
        this.house0     = new MyHouse(this, 0, this.house_side_mat, this.house_roof_mat, this.house_column_mat);
        this.house1     = new MyHouse(this, 1, this.house_side_mat, this.house_roof_mat, this.house_column_mat);
        this.house2 	= new MyHouse(this, 2, this.house_side_mat, this.house_roof_mat, this.house_column_mat);
        this.skybox     = new MyCubeMap(this, this.skybox_mat);
        this.terrain    = new MyQuad(this);
        this.hill       = new MyVoxelHill(this, 10, this.block_top_mat, this.block_bot_mat, this.block_side_mat);
        this.fire       = new MyTree(this, 1, 1, 2, 1, this.trunk_mat, this.fire_mat);
        
        this.terrain.updateTexCoords(this.terrain_coords);

        this.timeOfTheDay = {
			'Day': 0,
            'Night': 1
		};
    }

    updateTimeOfTheDay() {
        if (this.day_night == 0)
            this.day_night = 1;
        else this.day_night = 1;
    }
    
    initLights() {
        // SUN
        this.lights[0].setPosition(0, 200, 200, 1);
        this.lights[0].setVisible(false);
        this.lights[0].setDiffuse(0.945, 0.855, 0.643, 1.0);
        this.lights[0].setConstantAttenuation(1);
        this.lights[0].enable();
        this.lights[0].update();
        // MOON
        this.lights[1].setPosition(0, 200, 200, 1);
        this.lights[1].setVisible(false);
        this.lights[1].setDiffuse(0.21, 0.21, 0.533, 1.0);
        this.lights[1].setSpecular(0.21, 0.21, 0.533, 0.5);
        this.lights[1].setLinearAttenuation(0.5);
        this.lights[1].disable();
        this.lights[1].update();
        // FIRE
        this.lights[2].setPosition(5, 3, 5, 1);
        this.lights[2].setVisible(true);
        this.lights[2].setDiffuse(0.886, 0, 0, 1.0);
        this.lights[2].setSpecular(0.886, 0, 0, 1.0);
        this.lights[2].disable();
        this.lights[2].setQuadraticAttenuation(0.01);
        this.lights[2].update();
    }
    
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(50, 50, 50), vec3.fromValues(0, 0, 0));
    }
    
    initCoords() {
        this.terrain_coords = [
			0, 50,
			50, 50,
			0, 0,
			50, 0
		]
    }

    initMaterials(){
        // TEXTURES
        this.trunk_text         = new CGFtexture(this, 'images/trunk.png');
        this.tree_top_text      = new CGFtexture(this, 'images/top.png');
        this.block_top_text     = new CGFtexture(this, 'images/mineTop.png');
		this.block_bot_text     = new CGFtexture(this, 'images/mineBottom.png');
        this.block_side_text    = new CGFtexture(this, 'images/mineSide.png');
        this.skybox_day_text    = new CGFtexture(this, 'images/Skybox.png');
        this.skybox_night_text  = new CGFtexture(this, 'images/Skybox-night.png');
        this.fire_text          = new CGFtexture(this, 'images/fire.jpg');
        this.house_side_text    = new CGFtexture(this, 'images/house_side.png');
        this.house_roof_text    = new CGFtexture(this, 'images/palha.jpg');
        this.house_column_text  = new CGFtexture(this, 'images/wood.jpeg');

        // MATERIALS
        this.trunk_mat = new CGFappearance(this)
        this.trunk_mat.setAmbient(1, 1, 1, 1);
        this.trunk_mat.setDiffuse(1, 1, 1, 1);
        this.trunk_mat.setSpecular(0.1, 0.1, 0.1, 0);
        this.trunk_mat.setShininess(10.0);
        this.trunk_mat.setTexture(this.trunk_text);
        this.trunk_mat.setTextureWrap('REPEAT', 'REPEAT');
        
        this.tree_top_mat = new CGFappearance(this);
        this.tree_top_mat.setAmbient(1, 1, 1, 1);
        this.tree_top_mat.setDiffuse(1, 1, 1, 1);
        this.tree_top_mat.setSpecular(0.1, 0.1, 0.1, 0);
        this.tree_top_mat.setShininess(10.0);
        this.tree_top_mat.setTexture(this.tree_top_text);

        this.skybox_day_mat = new CGFappearance(this)
        this.skybox_day_mat.setAmbient(1, 1, 1, 1);
        this.skybox_day_mat.setDiffuse(1, 1, 1, 0.1);
        this.skybox_day_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.skybox_day_mat.setShininess(10.0);
        this.skybox_day_mat.setTexture(this.skybox_day_text);

        this.skybox_night_mat = new CGFappearance(this)
        this.skybox_night_mat.setAmbient(1, 1, 1, 1);
        this.skybox_night_mat.setDiffuse(1, 1, 1, 0.1);
        this.skybox_night_mat.setSpecular(0.1, 0.1, 0.1, 0.11);
        this.skybox_night_mat.setShininess(10.0);
        this.skybox_night_mat.setTexture(this.skybox_night_text);

        this.block_top_mat = new CGFappearance(this);
        this.block_top_mat.setAmbient(1, 1, 1, 1);
        this.block_top_mat.setDiffuse(1, 1, 1, 1);
        this.block_top_mat.setSpecular(0.1, 0.1, 0.1, 0.1);
        this.block_top_mat.setShininess(10.0);
        this.block_top_mat.setTexture(this.block_top_text);
        this.block_top_mat.setTextureWrap('REPEAT', 'REPEAT');

		this.block_side_mat = new CGFappearance(this);
        this.block_side_mat.setAmbient(1, 1, 1, 1.0);
        this.block_side_mat.setDiffuse(1, 1, 1, 1);
        this.block_side_mat.setSpecular(1, 1, 1, 0.1);
        this.block_side_mat.setShininess(10.0);
        this.block_side_mat.setTexture(this.block_side_text);
        this.block_side_mat.setTextureWrap('REPEAT', 'REPEAT');
		
		this.block_bot_mat = new CGFappearance(this);
        this.block_bot_mat.setAmbient(1, 1, 1, 1.0);
        this.block_bot_mat.setDiffuse(1, 1, 1, 1);
        this.block_bot_mat.setSpecular(1, 1, 1, 0.1);
        this.block_bot_mat.setShininess(10.0);
        this.block_bot_mat.setTexture(this.block_bot_text);
        this.block_bot_mat.setTextureWrap('REPEAT', 'REPEAT');
		
		this.house_side_mat = new CGFappearance(this);
        this.house_side_mat.setAmbient(1, 1, 1, 1.0);
        this.house_side_mat.setDiffuse(1, 1, 1, 1);
        this.house_side_mat.setSpecular(1, 1, 1, 0);
        this.house_side_mat.setShininess(10.0);
        this.house_side_mat.setTexture(this.house_side_text);
        this.house_side_mat.setTextureWrap('REPEAT', 'REPEAT');

        this.house_roof_mat = new CGFappearance(this);
        this.house_roof_mat.setAmbient(1, 1, 1, 1);
        this.house_roof_mat.setDiffuse(1, 1, 1, 0);
        this.house_roof_mat.setSpecular(1, 1, 1, 1);
        this.house_roof_mat.setShininess(10.0);
        this.house_roof_mat.setTexture(this.house_roof_text);
        this.house_roof_mat.setTextureWrap('REPEAT', 'REPEAT');

        this.house_column_mat = new CGFappearance(this);
        this.house_column_mat.setAmbient(1, 1, 1, 1);
        this.house_column_mat.setDiffuse(1, 1, 1, 1);
        this.house_column_mat.setSpecular(1, 1, 1, 0);
        this.house_column_mat.setShininess(10.0);
        this.house_column_mat.setTexture(this.house_column_text);
        this.house_column_mat.setTextureWrap('REPEAT', 'REPEAT');

        this.fire_mat = new CGFappearance(this);
        this.fire_mat.setAmbient(1, 1, 1, 1);
        this.fire_mat.setDiffuse(1, 1, 1, 0.1);
        this.fire_mat.setSpecular(1, 1, 1, 0.1);
        this.fire_mat.setShininess(10.0);
        this.fire_mat.setTexture(this.fire_text);
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    display() {
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.updateProjectionMatrix();
        this.loadIdentity();
        this.applyViewMatrix();
        this.setDefaultAppearance();

        this.enableTextures(this.textures);

// DRAWING
// SKYBOX
        this.pushMatrix();
        if(this.day_night)  this.skybox_night_mat.apply();
        else   this.skybox_day_mat.apply();
        this.skybox.display();
        this.popMatrix();

// TERRAIN
        this.pushMatrix();
        this.rotate(Math.PI/2, -1,0,0);
        this.scale(60,60,0);
        this.block_top_mat.apply();
        this.terrain.display();
        this.popMatrix();

// HOUSE
        this.pushMatrix();
        this.house2.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(0,0,2.4);
        this.house0.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(3.4,0,0);
        this.house1.display();
        this.popMatrix();

// HILL        
        this.pushMatrix();
        this.translate(-15,0,0);
        this.hill.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-10,0,-15);
        this.hill.display();
        this.popMatrix();

// GROUP        
        this.pushMatrix();
        this.translate(8,0,-20);
        this.group.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(20,0,-10);
        this.rotate(Math.PI/3,0,-1,0);
        this.group.display();
        this.popMatrix();

// ROW        
        this.pushMatrix();
        this.translate(2,0,15);
        this.rotate(Math.PI/3,0,-1,0);
        this.row.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(15,0,5);
        this.rotate(Math.PI/3,0,-1,0);
        this.row.display();
        this.popMatrix();

// FIRE        
        this.pushMatrix();
		this.translate(5,0,5);
        this.fire.display();
        this.popMatrix();

// END DRAWING

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