var vertexShader =
  'attribute vec3 aPos;'        +
  'attribute vec3 aCol;'        +
  // 'attribute vec3 aColID;'      +

  'uniform mat4 uProj;'     +
  'uniform mat4 uView;'     +
  'uniform mat4 uModel;'    +
  'uniform vec4 uTrans;'    +
  'uniform bool uClicked;'  +
  'uniform vec3 uColID;'    +

  'varying vec3 vCol;'      +

  'void main(void) { '      +
     'gl_Position = (uProj * uView * uModel) * (vec4(aPos, 1.) + uTrans);'+

     'if(uClicked) {'                       +
     '  vCol = uColID;'                     +
     '} else {'                             +
     '  vCol = aCol;'                       +
     '}'                                    +
  '}';
