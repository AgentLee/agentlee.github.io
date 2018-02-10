function get_projection(angle, a, zMin, zMax) {
   var ang = Math.tan((angle*.5)*Math.PI/180);//angle*.5
   return [
      0.5/ang, 0 , 0, 0,
      0, 0.5*a/ang, 0, 0,
      0, 0, -(zMax+zMin)/(zMax-zMin), -1,
      0, 0, (-2*zMax*zMin)/(zMax-zMin), 0
];
}
