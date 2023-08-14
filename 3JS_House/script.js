import * as THREE from "./three.module.js"

//scene
var scene=new THREE.Scene()

//camera
var viewAngle=45
var height=window.innerHeight
var width=window.innerWidth
var nearClipping=0.06
var farClipping=9999
var camera=new THREE.PerspectiveCamera(viewAngle, width/height, nearClipping, farClipping)
camera.position.set(0,5,17)

//light
const light=new THREE.HemisphereLight(0xffffbb, 0x080820, 1)
scene.add(light)

//PlanMesh
const geometry= new THREE.PlaneGeometry(5,5)
const material=new THREE.MeshBasicMaterial({color:"yellow", side:THREE.DoubleSide})
const plane = new THREE.Mesh(geometry, material)
plane.rotation.set(1.6,0,0)
scene.add(plane)

//Cubemesh
const cubeGeo= new THREE.BoxGeometry(1,1,1)
const cubeMat=new THREE.MeshStandardMaterial({color:"blue"})
const cubeMesh= new THREE.Mesh(cubeGeo, cubeMat)
cubeMesh.position.set(1,1,1)
scene.add(cubeMesh)

//Cubemesh2
const cubeGeo2= new THREE.BoxGeometry(1,1,1)
const cubeMat2=new THREE.MeshBasicMaterial({color:"red"})
const cubeMesh2= new THREE.Mesh(cubeGeo2, cubeMat2)
cubeMesh2.position.set(-1.6,1.2,0.4)
scene.add(cubeMesh2)



//group
const g1=new THREE.Group()
g1.add(plane, cubeMesh, cubeMesh2)
scene.add(g1)


//renderer
var renderer=new THREE.WebGLRenderer({antalias:true})
renderer.setSize(width, height)

//getElement
var element=document.getElementById("container")

//getAppend
element.appendChild(renderer.domElement)

//animation
function animate(){
    g1.rotation.y += 0.001
    // plane.rotation.x += 0.01
    // cube.rotation.x += 0.01
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()

