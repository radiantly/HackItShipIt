
import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

var loader = new THREE.OBJLoader();


    function render() {
      if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      }

      requestAnimationFrame(render);
      renderer.render(scene, camera);
    }

    render();


    export default function markerRenderer(marker) {
    const size = Math.max(marker.value / 20, 1);

      
        // add light
    let cube;



    new Promise((resolve) => {
      loader.load('./Bottle.obj', (object) => {
        cube = object;
      });
    });
        
    return cube;
      }
      