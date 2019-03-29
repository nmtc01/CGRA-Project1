/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
	constructor(scene, trunk_height, trunk_radius, top_height, top_radius, trunk_text, top_text) {
		super(scene);
		
        this.scene = scene;
        this.trunk_height = trunk_height;
        this.trunk_radius = trunk_radius;
        this.top_height = top_height;
        this.top_radius = top_radius;

        this.trunk_text = trunk_text;
        this.top_text = top_text;
		
        // Objects
        this.trunk  = new MyCylinder(this.scene, 10);
        this.top    = new MyCone(this.scene, 10);
    }

	display(){
        this.scene.pushMatrix();

        // TRUNK
        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.trunk_text.apply();
        this.trunk.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        // TOP
        this.scene.translate(0, this.trunk_height, 0);
        this.scene.scale(this.top_radius, this.top_height, this.top_radius);
        this.top_text.apply();
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

