/**
* MyTreeRowPatch
* @constructor
*/
class MyTreeRowPatch extends CGFobject {
	constructor(scene, trunk_height, trunk_radius, top_height, top_radius, trunk_text, top_text) {
		super(scene);
		
        this.scene = scene;
        this.trunk_height = trunk_height;
        this.trunk_radius = trunk_radius;
        this.top_height = top_height;
        this.top_radius = top_radius;

        this.trunk_text = trunk_text;
        this.top_text = top_text;

        // POSITIONS
        var delta = 2*Math.max(this.trunk_radius, this.top_radius);
        
        this.pos1 = [-5*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        this.pos2 = [-3*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        this.pos3 = [-1*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        this.pos4 = [ 1*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        this.pos5 = [ 3*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        this.pos6 = [ 5*delta+(Math.random()-0.5),      0,      (Math.random()-0.5)];
        
        this.posv = [this.pos1, this.pos2, this.pos3, this.pos4, this.pos5, this.pos6];
        
        // SIZES
        this.siz1 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
        this.siz2 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
        this.siz3 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
        this.siz4 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
        this.siz5 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
        this.siz6 = [this.trunk_height+(Math.random()-0.5)*2, this.trunk_radius+(Math.random()-0.5), this.top_height+(Math.random()-0.5)*2, this.top_radius+(Math.random()-0.5)];
       
        this.sizv = [this.siz1, this.siz2, this.siz3, this.siz4, this.siz5, this.siz6];
        
        
        // Objects
        this.tree = new MyTree(scene, trunk_height, trunk_radius, top_height, top_radius, trunk_text, top_text);
    }

	display(){
        this.scene.pushMatrix();

        for(var i = 0; i<6; i++){
            this.scene.pushMatrix();

            this.scene.translate(this.posv[i][0], this.posv[i][1], this.posv[i][2]);
            this.tree.display();
            
            this.tree = new MyTree(this.scene, this.trunk_height    +this.sizv[i][0], 
                                                this.trunk_radius   +this.sizv[i][1],
                                                this.top_height     +this.sizv[i][2],
                                                this.top_radius     +this.sizv[i][3], 
                                                this.trunk_text, this.top_text);

            this.scene.popMatrix();
        }
	}
}

