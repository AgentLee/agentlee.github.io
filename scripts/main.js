function main()
{
    var scene 	= new THREE.Scene();
    var camera 	= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    var canvas = document.getElementById('canvas');
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    canvas.appendChild(renderer.domElement);

    camera.position.y = 9;
    camera.position.z = 8;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.25;
    controls.enableZoom = false;

    controls.update();

    var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
    keyLight.position.set(-100, 0, 100);

    var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    fillLight.position.set(100, 0, 100);

    var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    scene.add(keyLight);
    scene.add(fillLight);
    scene.add(backLight);

    var dragon = new THREE.Object3D;
    var objLoader = new THREE.OBJLoader();
    objLoader.load('../obj/dragon.obj', function(object) {
        // object.add(new THREE.AxesHelper(20));
        object.name = "dragon";
        
        dragon = object;
        dragon.position.y -= 2;
        dragon.position.x += 1;
        dragon.position.z += 2;
        scene.add(dragon);
    });

    var speed = 0.001;
    var animate = function()
    {
        dragon.rotation.y += speed;

        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();
}