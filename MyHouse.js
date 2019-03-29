/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
	constructor(scene, type) {
		super(scene);
		
        this.scene = scene;
        if(type != undefined){
            this.type = type;
        }else{
            this.type = Math.floor((Math.random() * 3) + 1);
        }
        
        // Objects

    }

	display(){
        this.scene.pushMatrix();



        this.scene.popMatrix();
	}
}

