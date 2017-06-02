var fragmentShader =
  'precision mediump float;'+

  'varying vec3 vCol;'      +

  'void main(void) {'       +
     'gl_FragColor = vec4(vCol, 1.0);'   +
  '}';
