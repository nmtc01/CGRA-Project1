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
		var o = 1;
        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices - 1; i++){
			// Declaration of the vertices of each face
            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);

            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));

			// Indices for displaying the face
            this.indices.push((2*i), (2*i+2), (2*i+1));
            this.indices.push((o), (o+1), (o+2));
			o += 2;
			
            ang+=alphaAng;
        }
		
		
            var sa=Math.sin(ang);
            var ca=Math.cos(ang);

            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);
			
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
		
/*
			this.indices.push(0, 2, 1);
			this.indices.push(1, 2, 3);
			
			this.indices.push(2, 4, 3);
			this.indices.push(3, 4, 5);
			
			this.indices.push(4, 6, 5);
			this.indices.push(5, 6, 7);
			
			this.indices.push(6, 8, 7);
			this.indices.push(7, 8, 9);
		*/
			this.indices.push((o-1), 0, o);
			this.indices.push(o, 0, 1);


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}


