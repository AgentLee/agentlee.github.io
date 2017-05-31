var canvas;
var gl;

// Shaders
var vertShader;
var fragShader;
var shaderProgram;

// Buffers
var buffId;
var buffPos;
var buffCol;

// Camera
var modelMatrix;
var viewMatrix;
var projMatrix;

function initGL()
{
  console.log("Loading...");

  // Get the canvas element
  canvas = document.getElementById('mygl');
  // Load WebGL
  gl = canvas.getContext('webgl');

  // Check if WebGL is supported by the browser
  // Safari and Edge need to use EWGL
  if(!gl) {
    console.log('Browser does not support WeGL...');
    console.log('Using experimental WebGL');
    gl = canvas.getContext('experimental-webgl');
  }

  // If EWGL can't be loaded then the browser just can't run WebGL
  if(!gl) {
    alert('Browser does not support WebGL');
  }
  // WebGL is supported at this stage
  else {
    console.log('WebGL loaded');
  }

  //-----------------------------
  // Set the background
  //-----------------------------
  // Specifies what color values to use for clear
  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  // Sets the context to the color based on the clearColor parameters
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // Enable culling for efficiency
  gl.enable(gl.CULL_FACE);
  gl.frontFace(gl.CCW);
  // Doesn't compute backfaces
  gl.cullFace(gl.BACK);

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

  console.log("Shaders loaded");

  drawCube();

  //-----------------------------
  // Get handles to variables
  //-----------------------------
  var posAttr = gl.getAttribLocation(shaderProgram, 'pos');
  var colAttr = gl.getAttribLocation(shaderProgram, 'col');

  gl.bindBuffer(gl.ARRAY_BUFFER, buffPos);
  gl.vertexAttribPointer(posAttr, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, buffCol);
  gl.vertexAttribPointer(colAttr, 3, gl.FLOAT, false, 0, 0);

  gl.enableVertexAttribArray(posAttr);
  gl.enableVertexAttribArray(colAttr);

  gl.useProgram(shaderProgram);

  var matWorldUnifLoc     = gl.getUniformLocation(shaderProgram, 'mWorld');
  var matViewUnifLoc      = gl.getUniformLocation(shaderProgram, 'mView');
  var matViewProjUnifLoc  = gl.getUniformLocation(shaderProgram, 'mViewProj');

  modelMatrix = new Float32Array(16);
  viewMatrix  = new Float32Array(16);
  projMatrix  = new Float32Array(16);

  // Set the model matrix to the identity
  mat4.identity(modelMatrix);

  // Camera
  // lookAt(out, eye, center, up)
  mat4.lookAt(viewMatrix, [0, 0, -10], [0,0,0], [0,1,0]);
  // perspective(out, fovy, aspect, near, far)
  mat4.perspective(projMatrix, glMatrix.toRadian(45), canvas.width / canvas.height, 0.1, 1000.0);

  gl.uniformMatrix4fv(matWorldUnifLoc, gl.FALSE, modelMatrix);
  gl.uniformMatrix4fv(matViewUnifLoc, gl.FALSE, viewMatrix);
  gl.uniformMatrix4fv(matViewProjUnifLoc, gl.FALSE, projMatrix);

  var xRotMat = new Float32Array(16);
  var yRotMat = new Float32Array(16);

  //----------------------------
  // Render loop
  // Uses the currently bound buffer
  //----------------------------
  var numPoints = 3;
  var identityMatrix = new Float32Array(16);
  mat4.identity(identityMatrix);
  var angle = 0;

  var draw = function()
  {
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(draw);
  };

  // Doesn't get called unless you're on the tab
  requestAnimationFrame(draw);
}
