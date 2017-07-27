function initGL()
{
    // Get rendering context
    gl = getWebGLContext(canvas);
    if(!gl) {
        console.log("Couldn't load WebGL");
        return;
    }

    // Init shaders
    if(!initShaders(gl, vert, frag)) {
        console.log("Couldn't load shaders");
        return;
    }
}

function initArrayBuffer(gl, data, num, type, attribute)
{
    var buffer = gl.createBuffer();
    if(!buffer) {
        console.log("Couldn't make buffer");
        return false;
    }

    var attr = gl.getAttribLocation(gl.program, attribute);
    if(attr < 0) {
        console.log("Couldn't find attribute in shader");
        return false;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.vertexAttribPointer(attr, num, type, false, 0, 0);
    gl.enableVertexAttribArray(attr);

    return true;
}

function draw(gl, objects, mvp, unifMVP)
{
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    for(var i = 0; i < objects.length; i++) {
        var object      = objects[i];
        var translate   = object.translate;
        var rotAxis     = object.rotAxis;
        var rotAngle    = object.rotAngle;
        var scale       = object.scale;
        var rotate      = new Vector3([0, 0, 0]);
        switch(rotAxis)
        {
            case 0:
                rotate = new Vector3([1, 0, 0]);
                break;
            case 1:
                rotate = new Vector3([0, 1, 0]);
                break;
            case 2:
                rotate = new Vector3([0, 0, 1]);
                break;
            default:
                rotate = new Vector3([1, 0, 0]);
                break;
        }

        globalModel = new Matrix4();
        globalModel.setTranslate(translate.elements[0], translate.elements[1], translate.elements[2]);
        globalModel.rotate(rotAngle, rotate.elements[0], rotate.elements[1], rotate.elements[2]);
        globalModel.scale(scale.elements[0], scale.elements[1], scale.elements[2]);
        globalMVP.set(mvp);
        globalMVP.multiply(globalModel);

        object.draw(gl, globalMVP, unifMVP);
    }
}