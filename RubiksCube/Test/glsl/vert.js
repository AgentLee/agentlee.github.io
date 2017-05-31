var vertexShader =
[
  'precision mediump float;',
  '',
  'attribute vec3 pos;',
  'attribute vec3 col;',
  'varying vec3 fragCol;',
  'uniform mat4 mWorld;',
  'uniform mat4 mView;',
  'uniform mat4 mViewProj;',
  '',
  'void main()',
  '{',
  ' fragCol = col;',
  ' gl_Position = mViewProj * mView * mWorld * vec4(pos, 1.0);',
  '}'
].join('\n');
