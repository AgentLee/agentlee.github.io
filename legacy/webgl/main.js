// Globals
var canvas, gl;
var globalModel = new Matrix4();
var globalMVP   = new Matrix4();
var globalNor   = new Matrix4();

function main() 
{
    console.log("WebGL Ray Tracer v0.1");

    // Get canvas from html
    canvas = document.getElementById("canvas");
    if(!canvas) {
        console.log("Couldn't find <canvas>");
        return;
    }    

    initGL();

    // Specify color for clearing
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Enable depth test
    gl.enable(gl.DEPTH_TEST);

    // Get locations from shaders
    var unifMVP         = gl.getUniformLocation(gl.program, 'uMVP');
    var unifLightCol    = gl.getUniformLocation(gl.program, 'uLightCol');
    var unifLightDir    = gl.getUniformLocation(gl.program, 'uLightDir');
    var unifAmbient     = gl.getUniformLocation(gl.program, 'uAmbient');
    if(!unifMVP || !unifLightCol || !unifMVP || !unifAmbient) {
        console.log("Couldn't get storage locations");
        return;
    }
    
    // Set light color
    gl.uniform3f(unifLightCol, 1,1,1);
    // Set light direction (world coordinates)
    var lightDirection = new Vector3([0.5, 3.0, 4.0]);
    lightDirection.normalize();
    gl.uniform3fv(unifLightDir, lightDirection.elements);
    // Set ambient light
    gl.uniform3f(unifAmbient, 0.2, 0.2, 0.2);

    var modelMatrix = new Matrix4();
    var norMatrix   = new Matrix4();
    var mvp         = new Matrix4();
    mvp.setPerspective(25, canvas.width / canvas.height, 1, 100);
    mvp.lookAt(0, 5.5, -50, 0, 2.5, 0, 0, 1, 0);

    var scene = new Scene();

    draw(gl, scene.CornellBox(), mvp, unifMVP);
}