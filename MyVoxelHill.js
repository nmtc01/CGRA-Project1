/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
	constructor(scene, height) {
        super(scene);
        
        this.height = height;
        
        // Objects
		this.block = new MyUnitCubeQuad(scene);
    }

	display(){
        this.scene.pushMatrix();

        for(var i = height; i > 0; i--){


        }

        this.scene.popMatrix();
	}
}

