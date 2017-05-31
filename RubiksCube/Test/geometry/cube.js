var indices =
[
  0,  1,  2,      0,  2,  3,    // front
  4,  5,  6,      4,  6,  7,    // back
  8,  9,  10,     8,  10, 11,   // top
  12, 13, 14,     12, 14, 15,   // bottom
  16, 17, 18,     16, 18, 19,   // right
  20, 21, 22,     20, 22, 23    // left
];


var vertices =
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

var colors = [
  // Back (green)
  .18, .97, .38,
  .18, .97, .38,
  .18, .97, .38,
  .18, .97, .38,

  // Front (blue)
  .17, .67, 1.0,
  .17, .67, 1.0,
  .17, .67, 1.0,
  .17, .67, 1.0,

  // Left (orange)
  1.0, .57, .17,
  1.0, .57, .17,
  1.0, .57, .17,
  1.0, .57, .17,

  // Right (red)
  .96, .17, .17,
  .96, .17, .17,
  .96, .17, .17,
  .96, .17, .17,

  // Bottom (white)
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,
  1.0, 1.0, 1.0,


  // Top (yellow)
  1.0, .96, .37,
  1.0, .96, .37,
  1.0, .96, .37,
  1.0, .96, .37
];

function drawCube()
{
  //-----------------------------
  // Create buffers
  //-----------------------------
  buffIdx = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffIdx);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  buffPos = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffPos);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  buffCol = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffCol);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
}
