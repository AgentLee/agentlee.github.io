var vert =
    'attribute vec4 aPos;\n'                                                +
    'attribute vec4 aCol;\n'                                                +
    'attribute vec4 aNor;\n'                                                +
    'uniform mat4 uMVP;\n'                                                  +
    'uniform vec3 uLightCol;\n'                                             +
    'uniform vec3 uLightDir;\n'                                             +
    'uniform vec3 uAmbient;\n'                                              +
    'varying vec4 vCol;\n'                                                  +
    'void main() {\n'                                                       +
    '   gl_Position = uMVP * aPos;\n'                                       +
    '   vec3 normal = normalize(vec3(aNor));\n'                             +
    '   float nDotL = max(dot(uLightDir, normal), 0.0);\n'                  +
    '   vec3 diffuse = uLightCol * vec3(aCol) * nDotL;\n'                   +
    '   vec3 ambient = uAmbient * aCol.rgb;\n'                              +
    '   vCol = vec4(diffuse + ambient, aCol.a);\n'                          +
    '}\n';