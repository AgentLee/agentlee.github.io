class RubiksCube extends Cube
{
  constructor()
  {
    super();

    this.layer1 = [];
    this.layer1Unifs = [];

    this.layer1T =
    [
      -1.10,   0.0,   0.0,
       1.10,   0.0,   0.0,
      -1.10,   2.10,  0.0,
       1.10,   2.10,  0.0,
       1.10,  -2.10,  0.0,
      -1.10,  -2.10,  0.0,
      -3.30,   0.0,   0.0,
      -3.30,   2.10,  0.0,
      -3.30,  -2.10,  0.0
    ];

    this.createLayer = function()
    {
      for(var i = 0; i < 9; i++) {
        this.layer1[i] = new Cube();
        this.layer1[i].create();
        this.layer1Unifs[i] = this.layer1[i].createUnifs();
      }
    }

    // // Create buffers and attributes
    // var cube1     = new Cube();
    // var cube2     = new Cube();
    // var cube3     = new Cube();
    // var cube4     = new Cube();
    // var cube5     = new Cube();
    // var cube6     = new Cube();
    // var cube7     = new Cube();
    // var cube8     = new Cube();
    // var cube9     = new Cube();
    //
    // cube1.create();
    // cube2.create();
    // cube3.create();
    // cube4.create();
    // cube5.create();
    // cube6.create();
    // cube7.create();
    // cube8.create();
    // cube9.create();
    //
    // var cube1Unifs    = cube1.createUnifs();
    // var cube2Unifs    = cube2.createUnifs();
    // var cube3Unifs    = cube3.createUnifs();
    // var cube4Unifs    = cube4.createUnifs();
    // var cube5Unifs    = cube5.createUnifs();
    // var cube6Unifs    = cube6.createUnifs();
    // var cube7Unifs    = cube7.createUnifs();
    // var cube8Unifs    = cube8.createUnifs();
    // var cube9Unifs    = cube9.createUnifs();
    //
    // var t1 = [ -1.10,   0.0,   0.0];
    // var t2 = [  1.10,   0.0,   0.0];
    // var t3 = [ -1.10,   2.10,  0.0];
    // var t4 = [  1.10,   2.10,  0.0];
    // var t5 = [  1.10,  -2.10,  0.0];
    // var t6 = [ -1.10,  -2.10,  0.0];
    // var t7 = [ -3.30,   0.0,   0.0];
    // var t8 = [ -3.30,   2.10,  0.0];
    // var t9 = [ -3.30,  -2.10,  0.0];
  }
}
