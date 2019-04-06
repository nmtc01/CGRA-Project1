/**
* MyCubeMap
* @constructor
*/
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-200, -200, 200,	//0
			200, -200, 200, 	//1
			200, 200, 200,  	//2
			-200, 200, 200,	    //3
			
			-200, -200, -200,	//4
			200, -200, -200,	//5
			200, 200, -200,	    //6
            -200, 200, -200	    //7
		];

		this.indices = [
			3, 1, 0,
            3, 2, 1,
            
            2, 5, 1,
            2, 6, 5,

            6, 4, 5,
            6, 7, 4,

            7, 0, 4,
            7, 3, 0,

            3, 6, 2,
            3, 7, 6,
            
            0, 5, 4,
            0, 1, 5
        ];
        
        this.texCoords = [
            0,0,
            0,1,
            1,1,
            0,1,
        ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

