/**
* MyFire
* @constructor
*/
class MyFire extends CGFobject {
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
        this.trunk1  = new MyCylinder(this.scene, 10);
        this.trunk2  = new MyCylinder(this.scene, 10);
        this.trunk3  = new MyCylinder(this.scene, 10);
        this.trunk4  = new MyCylinder(this.scene, 10);
        this.fire    = new MyCone(this.scene, 10);
    }

	display(){
        this.scene.pushMatrix();

        // TRUNK
        /*this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.trunk_text.apply();
        this.trunk1.display();
        this.scene.popMatrix();

        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.trunk_text.apply();
        this.trunk2.display();
        this.scene.popMatrix();

        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.trunk_text.apply();
        this.trunk3.display();
        this.scene.popMatrix();

        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(Math.PI,0,0,1);
        this.trunk_text.apply();
        this.trunk3.display();
        this.scene.popMatrix();

        this.scene.scale(this.trunk_radius, this.trunk_height, this.trunk_radius);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.rotate(3*Math.PI/2,0,0,1);
        this.trunk_text.apply();
        this.trunk4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        
        // Fire
        this.scene.translate(0, 0, 0);
        this.scene.scale(this.top_radius, this.top_height, this.top_radius);
        this.top_text.apply();
        this.fire.display();*/


        this.scene.popMatrix();
	}
}



