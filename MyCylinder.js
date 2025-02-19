/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

		var o = 1;
        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var u = 1.0 / this.slices; 

        for(var i = 0.0; i < this.slices - 1; i++){
			// Declaration of the vertices of each face
            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);

            this.normals.push(ca, 0, -sa);
            this.normals.push(ca, 0, -sa);

			// Indices for displaying the face
            this.indices.push((2*i), (2*i+2), (2*i+1));
            this.indices.push((o), (o+1), (o+2));
            o += 2;
            
            if(i%3 == 0){
                this.texCoords.push(0, 0);
                this.texCoords.push(0, 1);
            }else if (i%3 == 1){
                this.texCoords.push(0.5, 0);
                this.texCoords.push(0.5, 1);
            }else{
                this.texCoords.push(1, 0);
                this.texCoords.push(1, 1);
            }

            ang+=alphaAng;
        }
		
		
            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);
			
            this.normals.push(ca, 0, -sa);
            this.normals.push(ca, 0, -sa);
		
			this.indices.push((o-1), 0, o);
            this.indices.push(o, 0, 1);
            
            if((this.slices - 1)%3 == 2){
                this.texCoords.push(0, 0);
                this.texCoords.push(0, 1);
            }else if ((this.slices - 1)%3 == 0){
                this.texCoords.push(0.5, 0);
                this.texCoords.push(0.5, 1);
            }else{
                this.texCoords.push(1, 0);
                this.texCoords.push(1, 1);
            }
            


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}


