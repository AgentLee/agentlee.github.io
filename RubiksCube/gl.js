var initGL = function()
{
  //-----------------------------
  // Create and link shaders
  //-----------------------------
  vertShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertShader, vertexShader);
  gl.compileShader(vertShader);

  fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragShader, fragmentShader);
  gl.compileShader(fragShader);

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertShader);
  gl.attachShader(shaderProgram, fragShader);
  gl.linkProgram(shaderProgram);

  // Check for linker errors
  if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Error in linking program', gl.getProgramInfoLog(shaderProgram));
    return;
  }

  // Only do this for debugging
  gl.validateProgram(shaderProgram);
  if(!gl.getProgramParameter(shaderProgram, gl.VALIDATE_STATUS)) {
    console.error('Error validating program', gl.getProgramInfoLog(shaderProgram));
    return;
  }

  // var rubiksCube = new RubiksCube();

  // Create buffers and attributes
  var cube1     = new Cube();
  var cube2     = new Cube();
  var cube3     = new Cube();
  var cube4     = new Cube();
  var cube5     = new Cube();
  var cube6     = new Cube();
  var cube7     = new Cube();
  var cube8     = new Cube();
  var cube9     = new Cube();

  // var wireCube  = new WireframeCube();

  cube1.create();
  cube2.create();
  cube3.create();
  cube4.create();
  cube5.create();
  cube6.create();
  cube7.create();
  cube8.create();
  cube9.create();
  // wireCube.create();

  var cube1Unifs    = cube1.createUnifs();
  var cube2Unifs    = cube2.createUnifs();
  var cube3Unifs    = cube3.createUnifs();
  var cube4Unifs    = cube4.createUnifs();
  var cube5Unifs    = cube5.createUnifs();
  var cube6Unifs    = cube6.createUnifs();
  var cube7Unifs    = cube7.createUnifs();
  var cube8Unifs    = cube8.createUnifs();
  var cube9Unifs    = cube9.createUnifs();
  // var wireCubeUnifs = wireCube.createUnifs();

  gl.useProgram(shaderProgram);

  //-----------------------------
  // Matrices
  //-----------------------------
  modelMatrix = new Float32Array(16);
  viewMatrix  = new Float32Array(16);
  projMatrix  = new Float32Array(16);

  mat4.identity(modelMatrix);
  mat4.identity(viewMatrix);
  projMatrix  = get_projection(50, canvas.width / canvas.height, 1, 1000);

  // wtf does this do
  viewMatrix[14] = viewMatrix[14] - 6;

  //-----------------------------
  // Mouse events
  //-----------------------------
  // This is like continuous spin
  var amortization = 0.0;
  var drag = false;

  var lockX = false;
  var lockY = false;

  var oldX;
  var oldY;
  var dX = 0;
  var dY = 0;

  var mouseDown = function(e)
  {
    drag = true;

    oldX = e.pageX;
    oldY = e.pageY;

    e.preventDefault();

    return false;
  }

  var mouseUp = function(e)
  {
    drag = false;
  }

  var mouseMove = function(e)
  {
    if(!drag) {
      return false;
    }

    dX = (e.pageX - oldX) * 2 * Math.PI / canvas.width;
    dY = (e.pageY - oldY) * 2 * Math.PI / canvas.height;

    // if(dX == 0 && dY != 0) {
    //   lockX = true;
    //   lockY = false;
    // }
    //
    // if(dX != 0 && dY == 0) {
    //   lockX = false;
    //   lockY = true;
    // }

    // if(dX != 0 && dY != 0) {
    //   if(dX > dY) {
    //     lockX = false;
    //     lockY = true;
    //   } else {
    //     lockX = true;
    //     lockY = false;
    //   }
    // }

    // TODO
    // Lock the axis depending on the mouse
    if(dX != 0) {
      lockX = false;
    } else {
      lockX = true;
    }

    if(dY != 0) {
      lockY = false;
    } else {
      lockY = true;
    }

    if(!lockX && !lockY) {
      lockX = true;
      lockY = false;
    }

    theta += dX;
    phi   += dY;

    oldX = e.pageX;
    oldY = e.pageY;

    e.preventDefault();
  }

  canvas.addEventListener("mousedown", mouseDown, false);
  canvas.addEventListener("mouseup", mouseUp, false);
  canvas.addEventListener("mouseout", mouseUp, false);
  canvas.addEventListener("mousemove", mouseMove, false);

  //-----------------------------
  // Translation
  //-----------------------------
  // TODO
  var t1 = [ -1.10,   0.0,   0.0];
  var t2 = [  1.10,   0.0,   0.0];
  var t3 = [ -1.10,   2.10,  0.0];
  var t4 = [  1.10,   2.10,  0.0];
  var t5 = [  1.10,  -2.10,  0.0];
  var t6 = [ -1.10,  -2.10,  0.0];
  var t7 = [ -3.30,   0.0,   0.0];
  var t8 = [ -3.30,   2.10,  0.0];
  var t9 = [ -3.30,  -2.10,  0.0];

  // var t1 = [-0.0, -0.0, 0.0];
  // var t2 = [-0.5, -0.5, 0.0];
  // gl.uniform4f(cube1Unifs.unifTrans, t1[0], t1[1], t1[2], 0.0);
  // gl.uniform4f(cube2Unifs.unifTrans, t2[0], t2[1], t2[2], 0.0);

  //-----------------------------
  // Rotation
  //-----------------------------
  function rotateX(m, angle)
  {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var mv1 = m[1];
    var mv5 = m[5];
    var mv9 = m[9];

    m[1] = cos * m[1] - sin * m[2];
    m[5] = cos * m[5] - sin * m[6];
    m[9] = cos * m[9] - sin * m[10];

    m[2]  = cos * m[2] + sin * mv1;
    m[6]  = cos * m[6] + sin * mv5;
    m[10] = cos * m[10] + sin * mv9;
  }

  function rotateY(m, angle)
  {
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var mv0 = m[0];
    var mv4 = m[4];
    var mv8 = m[8];

    m[0] = cos * m[0] + sin * m[2];
    m[4] = cos * m[4] + sin * m[6];
    m[8] = cos * m[8] + sin * m[10];

    m[2]  = cos * m[2] - sin * mv0;
    m[6]  = cos * m[6] - sin * mv4;
    m[10] = cos * m[10] - sin * mv8;
  }

  //-----------------------------
  // Drawing
  //-----------------------------
  var theta   = 0;
  var phi     = 0;
  var oldTime = 0;

  var animate = function(time)
  {
    var dT = time - oldTime;

    if(!drag) {
      dX *= amortization;
      dY *= amortization;

      theta += dX;
      phi   += dY;
    }

    // Reset model matrix to identity for rotation
    mat4.identity(modelMatrix);

    // Rotate the model matrix
    // if(lockX && !lockY)
      rotateY(modelMatrix, theta);

    // if(lockY && !lockX)
      rotateX(modelMatrix, phi);

    // Update oldTime
    oldTime = time;

    setBackgroundColor([0.75, 0.85, 0.8])
    enableCulling();

    cube1.setUnifs(cube1Unifs, t1);
    cube1.draw(cube1.indices, 'triangles');

    // mat4.identity(modelMatrix);

    cube2.setUnifs(cube2Unifs, t2);
    cube2.draw(cube2.indices, 'triangles');

    cube3.setUnifs(cube3Unifs, t3);
    cube3.draw(cube3.indices, 'triangles');

    cube4.setUnifs(cube4Unifs, t4);
    cube4.draw(cube4.indices, 'triangles');

    cube5.setUnifs(cube5Unifs, t5);
    cube5.draw(cube5.indices, 'triangles');

    cube6.setUnifs(cube6Unifs, t6);
    cube6.draw(cube6.indices, 'triangles');

    cube7.setUnifs(cube7Unifs, t7);
    cube7.draw(cube7.indices, 'triangles');

    cube8.setUnifs(cube8Unifs, t8);
    cube8.draw(cube8.indices, 'triangles');

    cube9.setUnifs(cube9Unifs, t9);
    cube9.draw(cube9.indices, 'triangles');

    // TODO
    // for(var i = 0; i < 9; i++) {
    //   rubiksCube.layer1[i].setUnifs(rubiksCube.layer1Unifs[i], rubiksCube.layer1T[i]);
    //   rubiksCube.layer1[i].draw(rubiksCube.layer1[i], 'triangles');
    // }

    // wireCube.setUnifs(wireCubeUnifs, [0,0,0]);
    // wireCube.draw(wireCube.indices, 'lines');

    window.requestAnimationFrame(animate);
  };

  animate(0);
};

function setBackgroundColor(color)
{
  // Set the background
  gl.clearColor(color[0], color[1], color[2], 1.0);
  gl.clearDepth(1.0);
  gl.viewport(0.0, 0.0, canvas.width, canvas.height);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function enableCulling()
{
  // Enable culling for efficiency
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.frontFace(gl.CCW);
  // Doesn't compute backfaces
  gl.cullFace(gl.BACK);
}
