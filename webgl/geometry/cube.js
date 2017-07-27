function Cube(name) 
{
    this.name       = name;
    this.translate  = new Vector3([0, 0, 0]);
    this.rotAxis    = 0;
    this.rotAngle   = 0;    
    this.scale      = new Vector3([1, 1, 1]);

    this.r = this.getColor();
    this.g = this.getColor();
    this.b = this.getColor();

    this.indices = new Uint8Array([
        0, 1, 2,   0, 2, 3,     // front
        4, 5, 6,   4, 6, 7,     // right
        8, 9,10,   8,10,11,     // up
        12,13,14,  12,14,15,    // left
        16,17,18,  16,18,19,    // down
        20,21,22,  20,22,23     // back
    ]);
    this.numIndices = this.indices.length;
    
    this.vertices = new Float32Array([
        1.0, 1.0, 1.0,  -1.0, 1.0, 1.0,  -1.0,-1.0, 1.0,   1.0,-1.0, 1.0,   // v0-v1-v2-v3 front
        1.0, 1.0, 1.0,   1.0,-1.0, 1.0,   1.0,-1.0,-1.0,   1.0, 1.0,-1.0,   // v0-v3-v4-v5 right
        1.0, 1.0, 1.0,   1.0, 1.0,-1.0,  -1.0, 1.0,-1.0,  -1.0, 1.0, 1.0,   // v0-v5-v6-v1 up
        -1.0, 1.0, 1.0,  -1.0, 1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0,-1.0, 1.0,  // v1-v6-v7-v2 left
        -1.0,-1.0,-1.0,   1.0,-1.0,-1.0,   1.0,-1.0, 1.0,  -1.0,-1.0, 1.0,  // v7-v4-v3-v2 down
        1.0,-1.0,-1.0,  -1.0,-1.0,-1.0,  -1.0, 1.0,-1.0,   1.0, 1.0,-1.0    // v4-v7-v6-v5 back
    ]);

    this.normals = new Float32Array([
        0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   0.0, 0.0, 1.0,   // v0-v1-v2-v3 front
        1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   1.0, 0.0, 0.0,   // v0-v3-v4-v5 right
        0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   0.0, 1.0, 0.0,   // v0-v5-v6-v1 up
        -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  -1.0, 0.0, 0.0,  // v1-v6-v7-v2 left
        0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   0.0,-1.0, 0.0,   // v7-v4-v3-v2 down
        0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0,   0.0, 0.0,-1.0    // v4-v7-v6-v5 back
    ]);
    
    this.colors = new Float32Array([
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b, 
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  
        this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b,  this.r, this.g, this.b  
    ]);
}

Cube.prototype.getName = function()
{
    console.log(this.name);
};

Cube.prototype.initVBO = function()
{
    // Create a buffer object
    var indexBuffer = gl.createBuffer();
    if (!indexBuffer) {
        return -1;
    }

    // Write the vertex coordinates and color to the buffer object
    if (!initArrayBuffer(gl, this.vertices, 3, gl.FLOAT, 'aPos')) {
        return -1;
    }

    if (!initArrayBuffer(gl, this.colors, 3, gl.FLOAT, 'aCol')) {
        return -1;
    
    }   

    if(!initArrayBuffer(gl, this.normals, 3, gl.FLOAT, 'aNor')) {  
        return -1;
    }

    // Write the indices to the buffer object
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    return this.indices.length;
};

Cube.prototype.draw = function(gl, mvp, unifMVP)
{   
    this.initVBO(gl);

    gl.uniformMatrix4fv(unifMVP, false, mvp.elements);

    gl.drawElements(gl.TRIANGLES, this.numIndices, gl.UNSIGNED_BYTE, 0);
};

Cube.prototype.getColor = function()
{
    var min = 0.0;
    var max = 1.0;

    return Math.random() * (max - min) + min;
}