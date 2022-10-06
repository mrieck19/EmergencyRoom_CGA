import * as THREE from 'three';

function main() {

    //Szene
    let scene = new THREE.Scene();

    //Kamera
    let camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    )
    camera.position.set(30,20,10);
    camera.lookAt(0,0,0);

    //Lichter
    //Objekte
    //Render

    //Controls


}

main();