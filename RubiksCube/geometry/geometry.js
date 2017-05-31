class Geometry
{
  constructor()
  {
    this.buffIdx;
    this.buffPos;
    this.buffCol;

    this.draw = function(indices, mode)
    {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffIdx);

      switch(mode)
      {
        case 'triangles':
          gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
          break;

        case 'lines':
          gl.drawElements(gl.LINES, this.indices.length, gl.UNSIGNED_SHORT, 0);
          break;
          
        default:
          break;
      }
    }
  }
}
