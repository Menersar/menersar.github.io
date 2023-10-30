// BEGIN exercise plane
var apple = (function () {

    function createVertexData() {
       
        var n = 32;
        var m = 32;
        // Positions.
       // vertices = new Float32Array(3 * (n + 1) * (m + 1));
        //colors = new Float32Array(3 * (n + 1) * (m + 1));


        // Positions.
		this.vertices = new Float32Array(3 * (n + 1) * (m + 1));
		var vertices = this.vertices;
		// Normals.
		this.normals = new Float32Array(3 * (n + 1) * (m + 1));
		var normals = this.normals;
		// Index data.
		this.indicesLines = new Uint16Array(2 * 2 * n * m);
		var indicesLines = this.indicesLines;
		this.indicesTris = new Uint16Array(3 * 2 * n * m);
		var indicesTris = this.indicesTris;


        // colors
        this.color = new Float32Array(vertices.length*3);
		var color = this.color;


        const rangeU = { min: (0), max: (2 * Math.PI) };
        const rangeV = { min: (-Math.PI), max: (Math.PI) };

        var du = (rangeU.max - rangeU.min) / n;
        var dv = (rangeV.max - rangeV.min) / m;
        // var r = 0.6;



        // Counter for entries in index array.
        var iLines = 0;
        var iTris = 0;

        // Loop angle u.
        for (var i = 0, u = rangeU.min; i <= n; i++, u += du) {
            // Loop height v.
            for (var j = 0, v = rangeV.min; j <= m; j++, v += dv) {

                var iVertex = i * (m + 1) + j;

                //  var x = (2 * Math.cos(3 * u)) / (2 + Math.sin(v));
                //var y = (2 * (Math.cos(u) + 2 * Math.cos(2 * u))) / (2 + Math.cos(v + ((2 * Math.PI) / 3)));
                //var z = (Math.cos(u) - 2 * Math.cos(2 * u)) * (2 + Math.cos(v)) * (2 + Math.cos(v + ((2 * Math.PI) / 3) / 4));

                var x = Math.cos(u) * (4 + 3.8 * Math.cos(v)) * 1;
                var z = Math.sin(u) * (4 + 3.8 * Math.cos(v)) * 1;
                var y = (Math.cos(v) + Math.sin(v) - 1) * (1 + Math.sin(v)) * Math.log(1 - Math.PI * v / 10) + 7.5 * Math.sin(v) * 1;


                /* var x = 5*Math.cos(u); 
                 var z = 5*Math.sin(u); 
                 var y = v-0.5;
                 */

                //    var x = Math.cos(u) * (4 + 3.8 * Math.cos(v)) * 1;
                //  var z = Math.sin(u) * (4 + 3.8 * Math.cos(v))*1;

                //  var y = (Math.cos(v) + Math.sin(v)-1) * (1+Math.sin(v)) * Math.log(1-Math.PI * v/10) + 7.5 * Math.sin(v)*1;

                x = x * 0.2;
                y = y * 0.2;
                z = z * 0.2;

                // Set vertex positions.
                vertices[iVertex * 3] = x;
                vertices[iVertex * 3 + 1] = y;
                vertices[iVertex * 3 + 2] = z;


                if (j < 31) {

                    // Set vertex positions.
                    color[iVertex * 4] = 1 - j/50;
                    color[iVertex * 4 + 1] = 0 + (j/50);
                    color[iVertex * 4 + 2] = 0;
                    color[iVertex * 4 + 3] = 1;

                } else {

                    color[iVertex * 4] = .53;
                    color[iVertex * 4 + 1] = .26;
                    color[iVertex * 4 + 2] = .12;
                    color[iVertex * 4 + 3] = 1;

                }


               // Calc and set normals.
				var vertexLength = Math.sqrt(x * x + y * y + z * z);
				normals[iVertex * 3] = x / vertexLength;
				normals[iVertex * 3 + 1] = y / vertexLength;
				normals[iVertex * 3 + 2] = z / vertexLength;
                /*
                            colors [iVertex * 3] = 1;
                            colors[iVertex * 3 + 1] = 1;
                            colors[iVertex * 3 + 2] = 1;*/




                                //  var red = [1,0,0,1];
                              
                              
                                 
                              
                              
                              
                        





                // Set index.
                // Line on beam.
                if (j > 0 && i > 0) {
                    indicesLines[iLines++] = iVertex - 1;
                    indicesLines[iLines++] = iVertex;
                }
                // Line on ring.
                if (j > 0 && i > 0) {
                    indicesLines[iLines++] = iVertex - (m + 1);
                    indicesLines[iLines++] = iVertex;
                }

                // Set index.
                // Two Triangles.
                if (j > 0 && i > 0) {
                    indicesTris[iTris++] = iVertex;
                    indicesTris[iTris++] = iVertex - 1;
                    indicesTris[iTris++] = iVertex - (m + 1);
                    //                            
                    indicesTris[iTris++] = iVertex - 1;
                    indicesTris[iTris++] = iVertex - (m + 1) - 1;
                    indicesTris[iTris++] = iVertex - (m + 1);
                }
            }
        }
        // createColorDataApple();
       // console.log(vertices.length);
                              
      /*  for (var i = 0; i < vertices.length*3; i +=4*1) {
            color[i] = 1;
            color[i+1] = 0;
            color[i+2] = 0;
            color[i+3] = 1;
    
        }*/
        for (var i = 0; i < vertices.length*3; i +=4*42) {
            color[i] = 1;
            color[i+1] = 1;
            color[i+2] = 0;
            color[i+3] = 1;
    
        }
/*
        for (var i = 0; i < vertices.length*3; i +=4*8) {
            color[i] = 0;
            color[i+1] = 1;
            color[i+2] = 0;
            color[i+3] = 1;
    
        }*/
        /*

        for (var i = 0; i < vertices.length*3; i += 1024) {
            color[i] = 0;
            color[i+1] = 0;
            color[i+2] = 1;
            color[i+3] = 1;
    
        }*/
       // console.log(color);

    }

    return {
        createVertexData: createVertexData
    }

}());
//END exercise plane
