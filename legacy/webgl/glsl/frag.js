var frag =
    '#ifdef GL_ES\n'                                    +
    'precision mediump float;\n'                        +
    '#endif\n'                                          +
    'varying vec4 vCol;\n'                              +
    'void main() {\n'                                   +
    '   gl_FragColor = vCol;\n'                         +
    '}\n';