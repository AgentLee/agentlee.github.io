function Scene(type)
{
    this.objects = [];
}

Scene.prototype.CornellBox = function()
{
    var cube1       = new Cube("Cube 1"); 
    cube1.translate = new Vector3([4, 0, -1]);
    cube1.rotAxis   = 1;
    cube1.rotAngle  = 27.5;
    cube1.scale     = new Vector3([3, 6, 3]);
    
    var cube2       = new Cube("Cube 2");
    cube2.translate = new Vector3([-4, -3, -5]);
    cube2.rotAxis   = 1;
    cube2.rotAngle  = -17.5;
    cube2.scale     = new Vector3([3, 3, 3]);

    var floor       = new SquarePlane("Floor");
    floor.translate = new Vector3([0, -7, 0]);
    floor.rotAxis   = 0;
    floor.rotAngle  = -90;
    floor.scale     = new Vector3([10, 10, 1]);

    var leftWall        = new SquarePlane("Left Wall");
    leftWall.translate  = new Vector3([10, 2.5, 0]);
    leftWall.rotAxis    = 1;
    leftWall.rotAngle   = -90;
    leftWall.scale      = new Vector3([10, 10, 1]);

    var rightWall       = new SquarePlane("Right Wall");
    rightWall.translate = new Vector3([-10, 2.5, 0]);
    rightWall.rotAxis   = 1;
    rightWall.rotAngle  = 90;
    rightWall.scale     = new Vector3([10, 10, 1]);

    var backWall        = new SquarePlane("Back Wall");
    backWall.translate  = new Vector3([0, 2.5, 5]);
    backWall.rotAxis    = 1;
    backWall.rotAngle   = 180;
    backWall.scale      = new Vector3([10, 10, 1]);

    var ceilingWall         = new SquarePlane("Ceiling Wall");
    ceilingWall.translate   = new Vector3([0, 13, 0]);
    ceilingWall.rotAxis     = 0;
    ceilingWall.rotAngle    = 90;
    ceilingWall.scale       = new Vector3([10, 10, 1]);

    var light           = new SquarePlane("Light");
    light.translate     = new Vector3([0, 12.95, -3]);
    light.rotAxis       = 0;
    light.rotAngle      = 90;
    light.scale         = new Vector3([4,4, 1]);

    this.objects = [floor, leftWall, rightWall, backWall, ceilingWall, cube1, cube2, light];

    return this.objects;
}