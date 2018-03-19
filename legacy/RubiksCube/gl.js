var RED   = [255, 0, 0];
var GREEN = [0, 255, 0];
var BLUE  = [0, 0, 255];

var initGL = function()
{
  //-----------------------------
  // Create and link shaders
  //-----------------------------
  createShaders();

  //-----------------------------
  // Create Rubik's Cube
  // Create buffers and attributes
  //-----------------------------
  var rubikscube = new RubiksCube();
  // Create a 2x1 Rubik's Cube
  rubikscube.create(9);

  // var wireCube  = new WireframeCube();
  // wireCube.create();
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
  // Drawing
  //-----------------------------
  var theta   = 0;
  var phi     = 0;
  var oldTime = 0;

  var animate = function(time)
  {
    var dT = time - oldTime;

    if(!drag) {
      // if(!lockY)
      dX = 0;
      dY = 0;

      theta += dX;
      phi   += dY;
    }

    // Reset model matrix to identity for rotation
    mat4.identity(modelMatrix);

    // Rotate the model matrix
    // We're rotating left/right

    // if(selectedCubeIndex == -1) {
      // console.log("no cubie");
      rotateY(modelMatrix, theta);
      rotateX(modelMatrix, phi);
    // }

    // if(lockX && !lockY && !rubikscube.moveWholeCube())
    //   rotateY(modelMatrix, theta);
    // else
    // // We're rotating up/down
    // if(lockY && !lockX && !rubikscube.moveWholeCube())
    //   rotateX(modelMatrix, phi);
    // else {
    // // if(!lockX && !lockY && rubikscube.moveWholeCube()) {
    //   rotateY(modelMatrix, theta);
    //   rotateX(modelMatrix, phi);
    // }

    // var rotateAll = true;
    // for(var i = 0; i < rubikscube.cubies.length; i++) {
    //   if(rubikscube.cubies.selected) {
    //     rotateAll = false;
    //     console.log("move only one");
    //   }
    // }
    //
    // if(rotateAll) {
      // rotateY(modelMatrix, theta);
      // rotateX(modelMatrix, phi);
    // }

    // Update oldTime
    oldTime = time;

    setBackgroundColor([0.75, 0.85, 0.8])
    enableCulling();

    // Loop through the different cubies
    // Set the uniforms and draw them
    for(var i = 0; i < rubikscube.cubies.length; i++) {

      if(i == selectedCubeIndex) {
          rotateY(modelMatrix, theta);
          rotateX(modelMatrix, phi);
      }
      else {
        mat4.identity(modelMatrix);
      }

      // If you don't reset the model matrix then
      // it behaves like a scene graph.

      // TODO
      // Handle translation
      var cubie = rubikscube.cubies[i];
      var t     = rubikscube.t[i];

      // Pass in the cube uniforms, translation, and isClicked value
      cubie.setUnifs(cubie.unifs, t, false);
      // Draw the cube
      cubie.draw(cubie.indices, 'triangles');
    }

    // wireCube.setUnifs(wireCubeUnifs, [0,0,0]);
    // wireCube.draw(wireCube.indices, 'lines');

    window.requestAnimationFrame(animate);
  };

  // Start the animation loop
  animate(0);

  //-----------------------------
  // Mouse events
  //-----------------------------
  var drag = false;
  var lockX = false;
  var lockY = false;

  var oldX;
  var oldY;
  var dX = 0;
  var dY = 0;

  var mouseDown = function(e)
  {
    handlePicking(e, rubikscube);

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


    // If the mouse is going left/right more than up/down
    // then the rotation is assumed to be about the Y axis.
    // We want to lock the X axis so it only rotates about Y.
    if(Math.abs(dX) >= Math.abs(dY)) {
      lockX = true;
      lockY = false;
    }

    // If the mouse is going up/down more than left/right
    // then the rotation is assumed to be about the X axis.
    // We want to lock the Y axis so it only rotates about X.
    if(Math.abs(dY) > Math.abs(dX)) {
      lockY = true;
      lockX = false;
    }


    // if(dX == 0) {
    //   if(dY != 0) {
    //     lockX = true;
    //     lockY = false;
    //   } else {
    //     lockX = false;
    //     lockY = true;
    //   }
    // }
    //
    // if(dY == 0) {
    //   if(dX != 0) {
    //     lockY = true;
    //     lockX = false;
    //   } else {
    //     lockY = false;
    //     lockX = true;
    //   }
    // }

    // console.log("dX: " + dX + " lockX: " + lockX);
    // console.log("dY: " + dY + " lockY: " + lockY);

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
    // if(dX != 0) {
    //   lockX = false;
    // } else {
    //   lockX = true;
    // }
    //
    // if(dY != 0) {
    //   lockY = false;
    // } else {
    //   lockY = true;
    // }
    //
    // if(!lockX && !lockY) {
    //   lockX = true;
    //   lockY = false;
    // }

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
};



//-----------------------------
// Picking object functions
//-----------------------------
function handlePicking(e, rubikscube)
{
  // Get the X, Y values from the clicked poitn
  var x = e.clientX;
  var y = e.clientY;

  var rect = e.target.getBoundingClientRect();

  if(rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
    // Check if it is on the object
    var xInCanvas = x - rect.left;
    var yInCanvas = rect.bottom - y;

    // Check to see if the clicked point is on a cube
    // If it hits a cube then we set cubies.selected to true
    // Otherwise we set it to false.
    var selected = false;
    for(var i = 0; i < rubikscube.cubies.length; i++) {
      if(isClicked(gl, rubikscube.cubies[i], rubikscube.t[i], x, y)) {
        // console.log(rubikscube.cubies[i].name);
        rubikscube.cubies[i].selected = true;

        selectedCubeIndex = i;

        selected = true;
      } else {
        rubikscube.cubies[i].selected = false;
      }
    }

    // If no cube is selected then set it back to -1
    // so that we can rotate the entire rubiks cube.
    if(!selected) {
      selectedCubeIndex = -1;
    }
  }
}

function isClicked(gl, cube, t, x, y)
{
  var picked = false;

  // Draw the cube with its colorID
  cube.setUnifs(cube.unifs, t, true);

  // gl.uniform1i(cube.unifs.unifClicked, 1);
  cube.draw(cube.indices, 'triangles');

  // Read the pixel color
  var pixelColor = new Uint8Array(4);
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixelColor);

  // Check to see if the pixel matches the cube color id
  if(checkPixelColor(pixelColor, cube.colorID)) {
    picked = true;
  }

  // Redraw the cube with its original colors
  cube.setUnifs(cube.unifs, t, true);
  cube.draw(cube.indices, 'triangles');

  return picked;
}

function checkPixelColor(pixelColor, colorID)
{
  if( pixelColor[0] == colorID[0] &&
      pixelColor[1] == colorID[1] &&
      pixelColor[2] == colorID[2]) {
        return true;
  }

  return false;
}

//-----------------------------
// Drawing functions
//-----------------------------
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

//-----------------------------
// Create Shaders
//-----------------------------
function createShaders()
{
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
}
