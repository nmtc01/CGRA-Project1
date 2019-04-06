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
		//Face inferior
			-100, -100, -100, //0
			100 , -100, 100 , //1
			100 , -100, -100, //2
			-100, -100, 100 , //3
		//Faces laterais
			100,-100, 100,   //4
			100,-100,-100,   //5
			100, 100,-100,   //6
			100, 100, 100,   //7

			-100, -100, 100, //8
			100, -100, 100,  //9		
			100, 100, 100,   //10
			-100, 100, 100,  //11

			-100, -100, -100, //12
			-100, -100, 100,  //13
			-100, 100, 100,   //14
			-100, 100, -100,  //15

			100, -100, -100,  //16
			-100, -100, -100, //17
			-100, 100, -100,  //18
			100, 100, -100,   //19
		//Face superior
			-100, 100, 100,   //20
			100, 100, 100,    //21
			100, 100, -100,   //22
			-100, 100, -100   //23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			1, 2, 0,
			3, 1, 0,

			6, 5, 4,
			7, 6, 4,

			10, 9, 8,
			8, 11, 10,

			14, 13, 12,
			12, 15, 14,

			18, 17, 16,
			16, 19, 18,
			
			22, 21, 20,
			20, 23, 22
		];

		this.normals = [0, 1, 0,
						0, 1, 0,
						0, 1, 0,
						0, 1, 0,
						-1,  0, 0,
						-1,  0, 0,
						-1,  0, 0,
						-1,  0, 0,
						0,  0, -1,
						0,  0, -1,
						0,  0, -1,
						0,  0, -1,
						1,  0, 0,
						1,  0, 0,
						1,  0, 0,
						1,  0, 0,
						0, 0 , 1,
						0, 0 , 1,
						0, 0 , 1,
						0, 0 , 1,
						0, -1, 0,
						0, -1, 0,
						0, -1, 0,
						0, -1, 0];
        
        this.texCoords = [
        //Face inferior
            0.25,0.5,
            0.5, 0.75,
            0.5,0.5,
            0.25,0.75,
		//Faces laterais
            0.75,0.5,
            0.5,0.5,
			0.5,0.25,
			0.75,0.25,

			1,0.5,
			0.75,0.5,
			0.75,0.25,
			1,0.25,

			0.25,0.5,
			0,0.5,
			0,0.25,
			0.25,0.25,

			0.5,0.5,
			0.25,0.5,
			0.25,0.25,
			0.5,0.25,
		//Face superior
			0.25,0,
			0.5,0,
			0.5,0.25,
			0.25,0.25
        ];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

