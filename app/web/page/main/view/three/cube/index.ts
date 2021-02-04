import * as THREE from 'three';

let scene;
let renderer;
let cube;
let camera;

const init = () => {
  scene = new THREE.Scene();
  const container = document.querySelector('.js-three-scene-container') !;
  const aspectRatio = container.clientWidth / container.clientHeight;
  camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: '#fff' });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
};

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

export const startup = () => {
  init();
  animate();
};
