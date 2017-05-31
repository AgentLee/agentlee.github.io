//-----------------------------
// Global variables
//-----------------------------
var canvas;
var gl;

// Shaders
var vertShader;
var fragShader;
var shaderProgram;

// Buffers
// var buffIdx;
// var buffPos;
// var buffCol;

// Camera
var modelMatrix;
var viewMatrix;
var projMatrix;

var main = function()
{
	console.log('Loading...');

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

	initGL();
};
