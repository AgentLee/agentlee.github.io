// var vertexShader =
// [
//   'precision mediump float;',
//   '',
//   'attribute vec3 pos;',
//   'attribute vec3 col;',
//   'varying vec3 fragCol;',
//   'uniform mat4 mWorld;',
//   'uniform mat4 mView;',
//   'uniform mat4 mViewProj;',
//   '',
//   'void main()',
//   '{',
//   ' fragCol = col;',
//   ' gl_Position = mViewProj * mView * mWorld * vec4(pos, 1.0);',
//   '}'
// ].join('\n');

var vertexShader =
  'attribute vec3 aPos;'+
  'attribute vec3 aCol;'+//the color of the point

  'uniform mat4 uProj;'+
  'uniform mat4 uView;'+
  'uniform mat4 uModel;'+
  'uniform vec4 uTrans;' +

  'varying vec3 vCol;'+

  'void main(void) { '+//pre-built function
     'gl_Position = (uProj * uView * uModel) * (vec4(aPos, 1.) + uTrans);'+
     'vCol = aCol;'+
  '}';
