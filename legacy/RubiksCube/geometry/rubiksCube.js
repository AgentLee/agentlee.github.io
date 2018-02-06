class RubiksCube extends Cube
{
  constructor()
  {
    super();

    this.cubies = [];

    this.t =
    [
      // Middle
      [ -2.05,   0.0,   0.0],     // Left
      [   0.0,   0.0,   0.0],     // Middle
      [  2.05,   0.0,   0.0],     // Right

      // Back
      [ -2.05,   0.0,  -4.10],     // Left
      [   0.0,   0.0,  -4.10],     // Middle
      [  2.05,   0.0,  -4.10],     // Right

      // Front
      [ -2.05,   0.0,  -2.05],     // Left
      [   0.0,   0.0,  -2.05],     // Middle
      [  2.05,   0.0,  -2.05],     // Right
    ];

    // @param n --> number of cubes to be generated
    this.create = function(n)
    {
      for(var i = 0; i < n; i++) {
        // Create a new cube
        this.cubies[i] = new Cube();
        // Create its buffers:
        // buffPos, buffCol, buffIdx
        this.cubies[i].create();
        // Create its uniform variables:
        // unifView, unifProj, unifModel, unifTrans, unifClicked
        this.cubies[i].createUnifs();
        // Label the cube
        this.cubies[i].name = "Cube " + (i + 1);
        // Give the cube a unique color
        this.cubies[i].colorID = getColorID(i);
        // console.log(this.cubies[i].colorID);
      }
    }

    this.moveWholeCube = function()
    {
      for(var i = 0; i < this.cubies.length; i++) {
        if(this.cubies.selected == true) {
          return false;
        }
      }

      // console.log("No cubie was selected");
      return true;
    }
  }
}

// TODO
function getColorID(pos)
{
 var color = [];

  switch(pos)
  {
    case 0:
      color = [255.0, 0.0, 0.0];
      break;
    case 1:
      color = GREEN;
      break;
    case 2:
      color = [0, 0, 255];
      break;
    default:
      break;
  }

  return color;

  // Not sure why this doesn't work
  // return [255 - pos, 255 - pos, 255 - pos];
}
