import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
// Loader
const loader = new THREE.TextureLoader()
const cross = loader.load('./cross.png')
const brainLoader = new GLTFLoader()
const controllerLoader = new GLTFLoader()
const laptopLoader = new GLTFLoader()
const normalTexture = loader.load('/rocky2.png')

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

let tl = gsap.timeline() // animation handler for brain
let tl2 = gsap.timeline() // animation handler for controller
let tl3 = gsap.timeline() // animation handler for laptop

// Objects
const geometry = new THREE.SphereGeometry(4, 64,64);
const ringGeometry = new THREE.TorusGeometry( .5, 1, 16, 100 );
const triangleGeometry = new THREE.TorusGeometry( 1, 1, 1000, 50);
const spGeometry = new THREE.SphereGeometry (0.3, 8, 8);
const spGeometry2 = new THREE.SphereGeometry (0.7, 8, 8);
const planet = new THREE.SphereGeometry (.5, 64, 64);
const capsuleBase1 = new THREE.CylinderGeometry(.32,.32,1,64);
const capsuleBase2 = new THREE.CylinderGeometry(.3,.3,1,64);
const capsuleHead1 = new THREE.SphereGeometry(.32,64,64);
const capsuleHead2 = new THREE.SphereGeometry(.3,64,64)
const conclusionObject = new THREE.TorusGeometry( .10, 1, 16, 100);

const randomObjHolder = new THREE.BufferGeometry;
const sphereGeo = new THREE.SphereGeometry(.3, 8, 8)
const cubeGeo = new THREE.BoxGeometry(.7, .7, .7)
const dumbbellHandle = new THREE.CylinderGeometry(.1,.1, .75, 64)
const dumbbellHead = new THREE.CylinderGeometry(.25,.25,.25, 8)

const particlesGeometry = new THREE.BufferGeometry;
const particlesCount = 10000;


////////////////////////////////////////////////////////////////////////////////
var tubeGeometry = new THREE.CylinderGeometry(0.4,0.4,10,32);
var ballGeometry = new THREE.SphereGeometry(1.1,32,32);

const dnaMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0, transparent: true} );

const dna = new THREE.Object3D();
const holder = new THREE.Object3D();


for (var i = 0; i <= 20; i++) {

	var cylinder = new THREE.Mesh(tubeGeometry, dnaMaterial);
	cylinder.rotation.z = 90 * Math.PI/180; 
	cylinder.position.x = 0;

	var ballRight = new THREE.Mesh( ballGeometry, dnaMaterial );
	ballRight.position.x = 6;

	var ballLeft = new THREE.Mesh( ballGeometry, dnaMaterial );
	ballLeft.position.x = -5;

	var row = new THREE.Object3D();

	row.add(cylinder);
	row.add(ballRight);
	row.add(ballLeft);

	row.position.y = i*2;
	row.rotation.y = 30*i * Math.PI/180;

	dna.add(row);

};

scene.add(dna);

dna.position.y = 0;
holder.add(dna)
scene.add(holder);
holder.scale.set(0.01,0.01,0.01)
holder.position.z = -15.5
holder.position.y = -0.15
holder.position.x = 0.3
holder.rotation.x = -0.25
holder.rotation.z = -0.1
////////////////////////////////////////////////////////////////////////////////

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++)
{
    // posArray[i] = Math.random(); // Creates particles
    // posArray[i] = Math.random() - 0.5; // Centers particles
    posArray[i] = (Math.random() - 0.5) * 3;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

// Materials

const sphereMaterial = new THREE.PointsMaterial(
    {
        size: 0.003,
        transparent: true,
        opacity: 1
    }
)
const spMaterial = new THREE.PointsMaterial(
    {
        color: 0xffffff,
        roughness: 1,
        metalness: 1,
        opacity: 1,
        wireframe: true,
        transparent: true,
        size: 0.025

    }
)
const spMaterial2 = new THREE.MeshBasicMaterial(
    {
        color: 0xff0ff,
        roughness: 1,
        metalness: 1,
        wireframe: true,
        opacity: 0.5,
        transparent: true
    }
)
const ringMaterial = new THREE.PointsMaterial(
    {
        color: 0xA9A9A9,
        size: 0.003,
        opacity: 0,
        transparent: true
    }
)
const triMaterial = new THREE.PointsMaterial(
    {
        color: 0xA9A9A9,
        size: 0.003,
        opacity: 0,
        transparent: true
    }
)
const planetMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0xfffffff,
        normalMap: normalTexture,
        roughness: 1,
        metalness: 1,
        transparent: true
    }
)
const bottleMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0x000000,
        opacity: 0,
        transparent: true
    }
)
const conclusionMat = new THREE.PointsMaterial(
    {
        color: 636363,
        size: 0.005,
        opacity: 0,
        transparent: true
    }
)
const randObjMaterial = new THREE.MeshBasicMaterial(
    {
        color: 0x787878,
        opacity: 0,
        transparent: true
    }
)
const particles_material = new THREE.PointsMaterial(
    {
        color: 0xA9A9A9,
        size: 0.005,
        map: cross,
        transparent: true
    }
)

//////////////////////////////////// Mesh ////////////////////////////////////////////////////////
const sphere = new THREE.Points(geometry,sphereMaterial)
const sphere_sp = new THREE.Points(spGeometry, spMaterial)
const sphere_sp2 = new THREE.Mesh(spGeometry2, spMaterial2)
const particlesMesh = new THREE.Points(particlesGeometry, particles_material)
const ringMesh = new THREE.Points(ringGeometry, ringMaterial)
const triMesh = new THREE.Points(triangleGeometry, triMaterial)
const planetMesh = new THREE.Mesh(planet, planetMaterial)
const conclusionMesh = new THREE.Points(conclusionObject, conclusionMat)

const objHolder = new THREE.Mesh(randomObjHolder)
// const sphereMesh = new THREE.Mesh(sphereGeo, randObjMaterial)
const cubeMesh = new THREE.Mesh(cubeGeo, randObjMaterial)
const dumbbellHandleMesh = new THREE.Mesh(dumbbellHandle, randObjMaterial)
const dumbbellHead1Mesh = new THREE.Mesh(dumbbellHead, randObjMaterial)
const dumbbellHead2Mesh = new THREE.Mesh(dumbbellHead, randObjMaterial)

objHolder.position.z = -26
// sphereMesh.position.y = 2.5
dumbbellHandleMesh.position.y = 2.75
dumbbellHead1Mesh.position.y = -.4
dumbbellHead2Mesh.position.y = .4
dumbbellHandleMesh.add(dumbbellHead1Mesh, dumbbellHead2Mesh)

cubeMesh.position.y = -2.75

objHolder.add(cubeMesh, dumbbellHandleMesh)

particlesMesh.position.z = -4
ringMesh.position.z = -8
triMesh.position.z = -11.5
sphere_sp.position.z = -14
sphere_sp2.position.z = -14
planetMesh.position.z = -15
conclusionMesh.position.z = -23

const capsuleBase1Mesh = new THREE.Mesh(capsuleBase1, bottleMaterial)
const capsuleHead1Mesh = new THREE.Mesh(capsuleHead1, bottleMaterial)
const capsuleBase2Mesh = new THREE.Mesh(capsuleBase2, bottleMaterial)
const capsuleHead2Mesh = new THREE.Mesh(capsuleHead2, bottleMaterial)
capsuleBase1Mesh.position.z = -20.5
capsuleBase1Mesh.position.x = -2
capsuleBase1Mesh.rotation.z = -0.4

capsuleHead1Mesh.position.y = -.45
capsuleBase2Mesh.position.y = 1
capsuleHead2Mesh.position.y = 1.45

capsuleBase1Mesh.add(capsuleHead1Mesh, capsuleBase2Mesh, capsuleHead2Mesh)
capsuleBase1Mesh.material.opacity = 0;

var model;
brainLoader.load('brain.gltf', (gltf) =>
{
    scene.add(gltf.scene)
    
    model = gltf.scene;
    var newMaterial = new THREE.MeshStandardMaterial(
        {
            color: 0xfffffff,
            normalMap: normalTexture,
            roughness: 1,
            metalness: 1,
            wireframe: true,
            opacity: 0.2,
            transparent: true,
        }
    );
    model.traverse((o) => {
    if (o.isMesh) o.material = newMaterial;
    });

    model.scale.set(0.4,0.4,0.4)

    tl.to(model.rotation, {y: 6.8, duration: 80, repeat:Infinity})

})
controllerLoader.load('controller.gltf', (gltf) =>
{
    model = gltf.scene
    objHolder.add(model)
    model.traverse((o) => {if (o.isMesh) o.material = randObjMaterial;});

    model.scale.set(.15,.15,.15)
    model.position.x = -2.5
    model.rotation.y = .8
    tl2.to(model.rotation, {y: 6.8, duration: 80, repeat:Infinity})
})
controllerLoader.load('laptop.gltf', (gltf) =>
{
    model = gltf.scene
    objHolder.add(model)
    model.traverse((o) => {if (o.isMesh) o.material = randObjMaterial;});

    model.scale.set(.2,.2,.2)
    model.position.x = 2.5
    tl3.to(model.rotation, {y: -6.8, duration: 80, repeat:Infinity})
})

scene.add(sphere, particlesMesh, ringMesh, triMesh, planetMesh, capsuleBase1Mesh, conclusionMesh, objHolder)

///////////////////////////////////////////////////////////////////////////////////////
// Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4

const botLight = new THREE.PointLight(0xffffff, 1)
botLight.position.y = -100
botLight.position.x = 100
const topLight = new THREE.PointLight(0xffffff, 1)
topLight.position.y = 100
topLight.position.x = -100
scene.add(botLight, topLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('black'), 1)

// Mouse
document.addEventListener('mousemove', animateParticles)

let mouseX = 0
let mouseY = 0

function animateParticles(event)
{
    mouseY = event.clientY
    mouseX = event.clientX
}

/**
 * Animate
 */

const clock = new THREE.Clock()

// Camera Movement
function updateCamera(ev)
{
    camera.position.z = 2 - window.scrollY / 300.0
    if(window.scrollY > 200)
    {
        sphere.material.opacity = 0;
    }
    else
    {
        sphere.material.opacity = 1;
    }
    if(window.scrollY > 2000)
    {
        ringMesh.material.opacity = 1;
    }
    else
    {
        ringMesh.material.opacity = 0;
    }
    if(window.scrollY > 3100)
    {
        triMesh.material.opacity = 0.1;
    }
    else
    {
        triMesh.material.opacity = 0;
    }

}
window.addEventListener("scroll", updateCamera);

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .25 * elapsedTime
    ringMesh.rotation.z = .25 * elapsedTime
    triMesh.rotation.z = -.25 * elapsedTime
    particlesMesh.rotation.y = 0.0008 * elapsedTime
    sphere_sp.rotation.y = .5 * elapsedTime
    sphere_sp.rotation.z = .5 * elapsedTime
    sphere_sp2.rotation.y = -.25 * elapsedTime
    sphere_sp2.rotation.z = .25 * elapsedTime
    holder.rotation.y = .25 * elapsedTime
    capsuleBase1Mesh.rotation.y = .25 * elapsedTime
    conclusionMesh.rotation.x = .1 * elapsedTime

    objHolder.rotation.z = .1 * elapsedTime
    dumbbellHandleMesh.rotation.z = .2 * elapsedTime
    dumbbellHandleMesh.rotation.x = .2 * elapsedTime
    cubeMesh.rotation.y = -.2 * elapsedTime
    // model.rotation.y = .25 * elapsedTime

    if(mouseX > 0)
    {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00006)
        particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00006)
    }
    if(camera.position.z < -14.4)
    {
        renderer.setClearColor(new THREE.Color('white'), 1)
    }
    else
    {
        renderer.setClearColor(new THREE.Color('black'),1)
    }

    if(camera.position.z < -12)
    {
        if(camera.position.z > -15)
        {
            planetMesh.material.opacity += 0.01;
        }
    }
    else
    {
        planetMesh.material.opacity = 0;
    }
    

    if(window.scrollY > 5000 && dnaMaterial.opacity < 1)
    {
        dnaMaterial.opacity += 0.05;
    }
    else if(window.scrollY < 5000 && dnaMaterial.opacity > 0)
    {
        dnaMaterial.opacity -= 0.05;
    }

    if(window.scrollY > 5700 && capsuleBase1Mesh.material.opacity < 1)
    {
        capsuleBase1Mesh.material.opacity += 0.05;
    }
    else if(window.scrollY < 5700 && capsuleBase1Mesh.material.opacity > 0)
    {
        capsuleBase1Mesh.material.opacity -= 0.05;
    }

    if(window.scrollY > 6500 && cubeMesh.material.opacity < 1 && conclusionMesh.material.opacity < 1)
    {
        cubeMesh.material.opacity += 0.05;
        conclusionMesh.material.opacity += 0.05;
    }
    else if (window.scrollY < 6500 && cubeMesh.material.opacity > 0 && conclusionMesh.material.opacity > 0)
    {
        cubeMesh.material.opacity -= 0.05;
        conclusionMesh.material.opacity -= 0.05;
    }


    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()