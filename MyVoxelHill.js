/**
* MyVoxelHill
* @constructor
*/
class MyVoxelHill extends CGFobject {
        constructor(scene, height) {
                super(scene);

                this.height = height;

                // Objects
                this.block = new MyUnitCubeQuad(scene, scene.top_mat, scene.botMat, scene.sideMat);

        }

        display() {
                this.scene.pushMatrix();
                for (var i = 0; i < this.height; i++) {
                        this.scene.pushMatrix();
                        this.scene.translate(-i, this.height - i, -i);         //BACK
                        for (var j = 0; j < 2 * i; j++) {
                                this.block.display();
                                this.scene.translate(1, 0, 0);
                        }
                        this.scene.popMatrix();
                        this.scene.pushMatrix();
                        this.scene.translate(i, this.height - i, -i);
                        for (var j = 0; j <= 2 * i; j++) {                     //RIGHT
                                this.block.display();
                                this.scene.translate(0, 0, 1);
                        }
                        this.scene.popMatrix();
                        this.scene.pushMatrix();
                        this.scene.translate(i, this.height - i, i);
                        for (var j = 0; j <= 2 * i; j++) {                     //FRONT
                                this.block.display();
                                this.scene.translate(-1, 0, 0);
                        }
                        this.scene.popMatrix();
                        this.scene.pushMatrix();
                        this.scene.translate(-i, this.height - i, i);
                        for (var j = 0; j <= 2 * i; j++) {                     //LEFT
                                this.block.display();
                                this.scene.translate(0, 0, -1);
                        }
                        this.scene.popMatrix();
                }
                this.scene.popMatrix();
        }
}

