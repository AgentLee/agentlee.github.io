
class Cube extends Geometry
{
  constructor()
  {
    // Call to get buffIdx, buffPos, buffCol
    super();

    this.indices =
    [
      0,  1,  2,      0,  2,  3,    // front
      4,  5,  6,      4,  6,  7,    // back
      8,  9,  10,     8,  10, 11,   // top
      12, 13, 14,     12, 14, 15,   // bottom
      16, 17, 18,     16, 18, 19,   // right
      20, 21, 22,     20, 22, 23    // left
    ];

    this.vertices =
    [
      // Front face
      -1.0, -1.0,  1.0,
       1.0, -1.0,  1.0,
       1.0,  1.0,  1.0,
      -1.0,  1.0,  1.0,

      // Back face
      -1.0, -1.0, -1.0,
      -1.0,  1.0, -1.0,
       1.0,  1.0, -1.0,
       1.0, -1.0, -1.0,

      // Top face
      -1.0,  1.0, -1.0,
      -1.0,  1.0,  1.0,
       1.0,  1.0,  1.0,
       1.0,  1.0, -1.0,

      // Bottom face
      -1.0, -1.0, -1.0,
       1.0, -1.0, -1.0,
       1.0, -1.0,  1.0,
      -1.0, -1.0,  1.0,

      // Right face
       1.0, -1.0, -1.0,
       1.0,  1.0, -1.0,
       1.0,  1.0,  1.0,
       1.0, -1.0,  1.0,

      // Left face
      -1.0, -1.0, -1.0,
      -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0,
      -1.0,  1.0, -1.0
    ];

    this.colors =
    [
      // Back (blue)
      .17, .67, 1.0,
      .17, .67, 1.0,
      .17, .67, 1.0,
      .17, .67, 1.0,

      // Front (green)
      .18, .97, .38,
      .18, .97, .38,
      .18, .97, .38,
      .18, .97, .38,


      // Left (yellow)
      1.0, .96, .37,
      1.0, .96, .37,
      1.0, .96, .37,
      1.0, .96, .37,

      // Right (white)
      1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,
      1.0, 1.0, 1.0,

      // Bottom (red)
      .96, .17, .17,
      .96, .17, .17,
      .96, .17, .17,
      .96, .17, .17,

      // Top (orange)
      1.0, .57, .17,
      1.0, .57, .17,
      1.0, .57, .17,
      1.0, .57, .17
    ];

    this.create = function()
    {
      //-----------------------------
      // Create buffers
      //-----------------------------
      this.buffIdx = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffIdx);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

      this.buffPos = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffPos);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      this.buffCol = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffCol);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors), gl.STATIC_DRAW);

      //-----------------------------
      // Create attributes
      //-----------------------------
      this.createAttrs();
    }

    this.createAttrs = function()
    {
      var attrPos = gl.getAttribLocation(shaderProgram, 'aPos');
      var attrCol = gl.getAttribLocation(shaderProgram, 'aCol');

      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffPos);
      gl.vertexAttribPointer(attrPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attrPos);

      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffCol);
      gl.vertexAttribPointer(attrCol, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attrCol);
    }

    this.createUnifs = function()
    {
      var unifs =
      {
        unifProj:   gl.getUniformLocation(shaderProgram, 'uProj'),
        unifView:   gl.getUniformLocation(shaderProgram, 'uView'),
        unifModel:  gl.getUniformLocation(shaderProgram, 'uModel'),
        unifTrans:  gl.getUniformLocation(shaderProgram, 'uTrans'),
      };

      return unifs;
    }

    this.setUnifs = function(unifs, t)
    {
      gl.uniformMatrix4fv(unifs.unifProj, false, projMatrix);
      gl.uniformMatrix4fv(unifs.unifView, false, viewMatrix);
      gl.uniformMatrix4fv(unifs.unifModel, false, modelMatrix);
      gl.uniform4f(unifs.unifTrans, t[0], t[1], t[2], 0.0);
    }
  }
}
