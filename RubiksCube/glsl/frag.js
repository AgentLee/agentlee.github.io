// var fragmentShader =
// [
//   'precision mediump float;',
//   '',
//   'varying vec3 fragCol;',
//   '',
//   'void main()',
//   '{',
//   ' gl_FragColor = vec4(fragCol, 1.0);',
//   '}'
// ].join('\n');


var fragmentShader =
  'precision mediump float;'+

  'varying vec3 vCol;'+

  'void main(void) {'+
     'gl_FragColor = vec4(vCol, 1.);'+
  '}';
