class WireframeCube extends Geometry
{
  constructor()
  {
    super();

    this.indices =
    [
      // Front
      0,  1,  2
      // 1,  2,  3,
      // 2,  3,  0,
      // 3,  0,  1,
      //
      // // Back
      // 4,  5,  6,
      // 5,  6,  7,
      // 6,  7,  4,
      // 7,  4,  5,
      //
      // // Top
      // 8,  9,  10,
      // 9,  10, 11,
      // 10, 11, 8,
      // 11, 8,  9,
      //
      // // Bottom
      // 12, 13, 14,
      // 13, 14, 15,
      // 14, 15, 12,
      // 15, 12, 13
    ];

    this.vertices =
    [
      // Front face
      -1.0, -1.0,  1.0,   // 0
       1.0, -1.0,  1.0,   // 1
       1.0,  1.0,  1.0,   // 2
      -1.0,  1.0,  1.0,   // 3

      // Back face
      -1.0, -1.0, -1.0,   // 4
      -1.0,  1.0, -1.0,   // 5
       1.0,  1.0, -1.0,   // 6
       1.0, -1.0, -1.0,   // 7

      // Top face
      -1.0,  1.0, -1.0,   // 8
      -1.0,  1.0,  1.0,   // 9
       1.0,  1.0,  1.0,   // 10
       1.0,  1.0, -1.0,   // 11

      // Bottom face
      -1.0, -1.0, -1.0,   // 12
       1.0, -1.0, -1.0,   // 13
       1.0, -1.0,  1.0,   // 14
      -1.0, -1.0,  1.0,   // 15

      // Right face
       1.0, -1.0, -1.0,   // 16
       1.0,  1.0, -1.0,   // 17
       1.0,  1.0,  1.0,   // 18
       1.0, -1.0,  1.0,   // 19

      // Left face
      -1.0, -1.0, -1.0,   // 20
      -1.0, -1.0,  1.0,   // 21
      -1.0,  1.0,  1.0,   // 22
      -1.0,  1.0, -1.0    // 23
    ];

    this.colors =
    [
      // // Back (blue)
      // .17, .67, 1.0,
      // .17, .67, 1.0,
      // .17, .67, 1.0,
      // .17, .67, 1.0,
      0,0,0,
      0,0,0,
      0,0,0,
      0,0,0
      // // Front (green)
      // .18, .97, .38,
      // .18, .97, .38,
      // .18, .97, .38,
      // .18, .97, .38,
      //
      //
      // // Left (yellow)
      // 1.0, .96, .37,
      // 1.0, .96, .37,
      // 1.0, .96, .37,
      // 1.0, .96, .37,
      //
      // // Right (white)
      // 1.0, 1.0, 1.0,
      // 1.0, 1.0, 1.0,
      // 1.0, 1.0, 1.0,
      // 1.0, 1.0, 1.0,
      //
      // // Bottom (red)
      // .96, .17, .17,
      // .96, .17, .17,
      // .96, .17, .17,
      // .96, .17, .17,
      //
      // // Top (orange)
      // 1.0, .57, .17,
      // 1.0, .57, .17,
      // 1.0, .57, .17,
      // 1.0, .57, .17
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

      // for(var i = 0; i < 3; i++) {
      //   this.colors[i] = 0.0;
      // }

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
