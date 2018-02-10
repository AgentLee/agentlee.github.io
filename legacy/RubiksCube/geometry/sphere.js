class Sphere
{
  constructor()
  {
    this.indices =
    [

    ];

    this.vertices =
    [

    ];

    this.colors =
    [
      
    ];

    this.create = function()
    {
      //-----------------------------
      // Create buffers
      //-----------------------------
      buffIdx = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffIdx);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);

      buffPos = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffPos);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

      buffCol = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffCol);
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

      gl.bindBuffer(gl.ARRAY_BUFFER, buffPos);
      gl.vertexAttribPointer(attrPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attrPos);

      gl.bindBuffer(gl.ARRAY_BUFFER, buffCol);
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

    this.setUnifs = function(unifs)
    {
      gl.uniformMatrix4fv(unifs.unifProj, false, projMatrix);
      gl.uniformMatrix4fv(unifs.unifView, false, viewMatrix);
      gl.uniformMatrix4fv(unifs.unifModel, false, modelMatrix);
    }

    this.draw = function(indices)
    {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffIdx);
      gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
  }
}
