import "./style.css";

import * as THREE from "three";

const scene = new THREE.Scene();

// perspective cam mimics human eye
// first param is field of view
// 2nd param is aspect ratio; base off user browser window
// 3rd 4th param is view frustrum
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// uses dom element
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// basic material doesnt need light source
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff6347,
//   wireframe: true,
// });

// most materials need light
const material = new THREE.MeshStandardMaterial({color: 0xff6347 })
// make mesh combining geometry and material
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.02;
  torus.rotation.y += 0.008;
  torus.rotation.z += 0.008;

  renderer.render(scene, camera);
}

animate();
