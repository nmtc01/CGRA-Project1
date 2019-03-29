/**
* MyTree
* @constructor
*/
class MyTree extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.scene = scene;
		this.initMaterials();
		
        // Objects





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

