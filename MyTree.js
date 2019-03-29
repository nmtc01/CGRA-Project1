/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
	constructor(scene, trunk_height, trunk_radius, top_height, top_radius) {
		super(scene);
		
        this.scene = scene;
        this.trunk_height = trunk_height;
        this.trunk_radius = trunk_radius;
        this.top_height = top_height;
        this.top_radius = top_radius;


		this.initMaterials();
		
        // Objects
        this.trunk  = new MyCylinder(this.scene, 10);
        this.top    = new MyCone(this.scene, 10);
    }
    
	initMaterials() {
		//this.text = new CGFtexture(this.scene, 'images/tangram.png');
        this.tree = new CGFappearance(this.scene);
        this.tree.setAmbient(1, 1, 1, 1);
        this.tree.setDiffuse(1, 1, 1, 1);
        this.tree.setSpecular(1, 1, 1, 1);
        this.tree.setShininess(10.0);
        //this.tree.setTexture(this.text);
    }

	display(){
        this.scene.pushMatrix();

        // TRUNK
        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.trunk.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        // TOP
        this.scene.translate(0, this.trunk_height, 0);
        this.scene.scale(this.top_radius, this.top_height, this.top_radius);
        this.top.display();


        this.scene.popMatrix();
	}
	
	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

