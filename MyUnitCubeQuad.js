/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.quad = new MyQuad(scene);
		this.initMaterials();
	}

	initMaterials() {
		//Face Inferior
		this.downFaceTexture = new CGFtexture(this.scene, 'images/mineBottom.png');
		this.downFaceMaterial = new CGFappearance(this.scene);
        this.downFaceMaterial.setAmbient(1, 1, 1, 1.0);
        this.downFaceMaterial.setDiffuse(1, 1, 1, 0.01);
        this.downFaceMaterial.setSpecular(1, 1, 1, 1.0);
        this.downFaceMaterial.setShininess(10.0);
        this.downFaceMaterial.setTexture(this.downFaceTexture);
		
        //Faces Laterais
        this.lateralFaceTexture = new CGFtexture(this.scene, 'images/mineSide.png');
		this.lateralFaceMaterial = new CGFappearance(this.scene);
        this.lateralFaceMaterial.setAmbient(1, 1, 1, 1.0);
        this.lateralFaceMaterial.setDiffuse(1, 1, 1, 0.01);
        this.lateralFaceMaterial.setSpecular(1, 1, 1, 1.0);
        this.lateralFaceMaterial.setShininess(10.0);
        this.lateralFaceMaterial.setTexture(this.lateralFaceTexture);

        //Face Superior
		this.upFaceTexture = new CGFtexture(this.scene, 'images/mineTop.png');
		this.upFaceMaterial = new CGFappearance(this.scene);
        this.upFaceMaterial.setAmbient(1, 1, 1, 1.0);
        this.upFaceMaterial.setDiffuse(1, 1, 1, 0.01);
        this.upFaceMaterial.setSpecular(1, 1, 1, 1.0);
        this.upFaceMaterial.setShininess(10.0);
        this.upFaceMaterial.setTexture(this.upFaceTexture);
	}

	display() {
		//Face Inferior
		this.downFaceMaterial.apply();
		this.scene.pushMatrix();
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		//Faces Laterais
		this.lateralFaceMaterial.apply();
		this.scene.pushMatrix();
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI / 2, 0, 1, 0);
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();

		//Face Superior
		this.upFaceMaterial.apply();
		this.scene.pushMatrix();
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);
		this.scene.translate(0, 0, 0.5);
		this.quad.display();
		this.scene.popMatrix();
	}
}

