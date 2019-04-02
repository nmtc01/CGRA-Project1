/**
* MyCubeMap
* @constructor
*/
class MyCubeMap extends CGFobject {
	constructor(scene, skybox_ft_text, skybox_bk_text, skybox_dn_text, skybox_lf_text, skybox_rt_text, skybox_up_text) {
		super(scene);
		this.scene = scene;
		this.skybox_ft_text = skybox_ft_text;
		this.skybox_bk_text = skybox_bk_text;
		this.skybox_dn_text = skybox_dn_text;
		this.skybox_lf_text = skybox_lf_text;
		this.skybox_rt_text = skybox_rt_text;
		this.skybox_up_text = skybox_up_text;
		this.quad = new MyQuad(scene);
	}

	display() {
		//Face Inferior
		this.scene.pushMatrix();
		this.scene.scale(50,1,50);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);
		this.scene.translate(0, 0, -25);
		this.skybox_dn_text.apply();
		this.quad.display();
		this.scene.popMatrix();

		//Faces Laterais
		this.scene.pushMatrix();
		this.scene.scale(50,50,1);
		this.scene.translate(0, 0, -25);
		this.skybox_ft_text.apply();
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(1,50,50);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.translate(0, 0, -25);
		this.skybox_lf_text.apply();
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(1,50,50);
		this.scene.rotate(-Math.PI / 2, 0, 1, 0);
		this.scene.translate(0, 0, -25);
		this.skybox_rt_text.apply();
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(50,50,1);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.translate(0, 0, -25);
		this.skybox_bk_text.apply();
		this.quad.display();
		this.scene.popMatrix();

		//Face Superior
		this.scene.pushMatrix();
		this.scene.scale(50,1,50);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.translate(0, 0, -25);
		this.skybox_up_text.apply();
		this.quad.display();
		this.scene.popMatrix();
	}

}

