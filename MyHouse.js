/**
* MyHouse
* @constructor
*/
class MyHouse extends CGFobject {
	constructor(scene, type) {
		super(scene);
		
        this.scene = scene;
        if(type != undefined || type > 2 || type < 0){
            this.type = type;
        }else{
            this.type = Math.round((Math.random() * 3));
        }
        
        // Objects
		this.wall 	= new MyUnitCubeQuad(this.scene, scene.houseSide, scene.houseSide, scene.houseSide);
		this.roof	= new MyPyramid(this.scene, 4);
		this.column	= new MyPrism(this.scene, 6);
		

    }

	display(){
		if(this.type == 0)
			this.display_0();
		if(this.type == 1)
			this.display_1();
		if(this.type == 2)
			this.display_2();
	}

	display_0(){
        this.scene.pushMatrix();

		//DISPLAY WALLS
		this.scene.translate(0,1,0);
		this.scene.scale(2,2,2);
		this.scene.houseSide.apply();
		this.wall.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY ROOF
		this.scene.translate(0, 2, 0);
		this.scene.rotate(Math.PI/4,0,1,0);
		this.scene.scale(2.5,2,2.5);
		this.scene.empty.apply();
		this.roof.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY COLUMNS
		this.scene.translate(1.2,0,1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(1.2,0,-1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-1.2,0,1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-1.2,0,-1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
	}
	
	display_1(){
        this.scene.pushMatrix();
		//DISPLAY WALLS
		
		this.scene.translate(0,1,0);
		this.scene.scale(4,2,2);
		this.wall.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY ROOF
		this.scene.translate(0,2, 0);
		this.scene.scale(4.5,2,2.5);
		this.scene.rotate(Math.PI/4,0,1,0);
		this.roof.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY COLUMNS
		this.scene.translate(2.2,0,1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(2.2,0,-1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-2.2,0,1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-2.2,0,-1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(0,0,1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(0,0,-1.2);
		this.scene.scale(0.3,2,0.3);
		this.column.display();
		
        this.scene.popMatrix();
	}
	
	display_2(){
        this.scene.pushMatrix();
		
		//DISPLAY WALLS
		this.scene.translate(0,2,0);
		this.scene.scale(2,4,2);
		this.wall.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY ROOF
		this.scene.translate(0, 4, 0);
		this.scene.rotate(Math.PI/4,0,1,0);
		this.scene.scale(2.5,2,2.5);
		this.roof.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		//DISPLAY COLUMNS
		this.scene.translate(1.2,0,1.2);
		this.scene.scale(0.3,4,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(1.2,0,-1.2);
		this.scene.scale(0.3,4,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-1.2,0,1.2);
		this.scene.scale(0.3,4,0.3);
		this.column.display();
		
        this.scene.popMatrix();
        this.scene.pushMatrix();
		
		this.scene.translate(-1.2,0,-1.2);
		this.scene.scale(0.3,4,0.3);
		this.column.display();
		
        this.scene.popMatrix();
	}
}

