
//import * as THREE from './three.js-master/build/three.module.js'

//import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js'

//import { GLTFLoader} from 'https://unpkg.com/three@0.138.3/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.querySelector('.webgl')

const loader = new GLTFLoader()


const model1 = new URL('./assets/mcars.glb', import.meta.url).href; 

loader.load(model1,function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(0.5,0.5,0.5)
    scene.add(root);
},function(xhr){
    console.log((xhr.loaded/xhr.total * 100 ) + "% loaded")
},function(error){
    console.log('an error occured')
})


const scene = new THREE.Scene()
const light = new THREE.DirectionalLight(0xffffff,2)
light.position.set(2,2,5)
scene.add(light)

const lights = new THREE.AmbientLight(0xffffff,3)
scene.add(lights)


// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color:'red'})


// const box = new THREE.Mesh(geometry,material)
// scene.add(box)

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100)

camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas : canvas
})

const controls = new OrbitControls(camera,renderer.domElement)




renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOuput = true
renderer.render(scene,camera)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
    //model1.position.x +=0.01
   // box.rotation.y +=0.01
    
}

animate()