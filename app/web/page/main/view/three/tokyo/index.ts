import * as THREE from 'three';

import Stats from 'three/examples/jsm/libs/stats.module';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

let container;
let mixer;
let controls;
let renderer;
let scene;
let camera;

const clock = new THREE.Clock();
const stats = new (Stats as any)();

const animate = () => {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  mixer.update(delta);
  controls.update();
  stats.update();
  renderer.render(scene, camera);
};

const init = () => {
  // container.appendChild(stats.dom);

  const { clientWidth, clientHeight } = container;
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(clientWidth, clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color('#fff');

  camera = new THREE.PerspectiveCamera(40, clientWidth / clientHeight, 1, 100);
  camera.position.set(5, 2, 8);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.5, 0);
  controls.update();
  controls.enablePan = false;
  controls.enableDamping = true;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x000000, 0.4));

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 2, 8);
  scene.add(dirLight);


  const path = '/public/assets/three/textures/cube/Park/';
  const format = '.jpg';
  const envMap = new THREE.CubeTextureLoader().load([
    path + 'posx' + format, path + 'negx' + format,
    path + 'posy' + format, path + 'negy' + format,
    path + 'posz' + format, path + 'negz' + format
  ]);

  const dracoLoader = new DRACOLoader();
  // todo
  dracoLoader.setDecoderPath('/public/assets/three/js/libs/draco/gltf/');

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load('/public/assets/three/models/gltf/LittlestTokyo.glb', function(gltf) {

    const model = gltf.scene;
    model.position.set(1, 1, 0);
    model.scale.set(0.01, 0.01, 0.01);
    model.traverse(function(child: any) {

      if (child.isMesh) child.material.envMap = envMap;

    });

    scene.add(model);

    mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(gltf.animations[ 0 ]).play();

    animate();

  }, undefined, function(e) {
    console.error(e);
  });
};

const setContainer = element => {
  container = element;
};

export const startup = options => {
  const { container } = options;
  setContainer(container);
  init();
};
