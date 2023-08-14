import * as THREE from "./three.module.js"

//scene
var scene=new THREE.Scene()

//camera
var viewAngle=45
var height=window.innerHeight
var width=window.innerWidth
var nearClipping=0.01
var farClipping=9999
var camera=new THREE.PerspectiveCamera(viewAngle, width/height, nearClipping, farClipping)
camera.position.set(0,0,10)


//Cube Mesh
var cubeGeometry=new THREE.BoxGeometry(1,1,1)
var cubeMaterial=new THREE.MeshBasicMaterial({color:"red"})
var cube=new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(0,-3,0)
scene.add(cube)
//Capsule mesh
const geometry=new THREE.CapsuleGeometry(1,1)
const material=new THREE.MeshBasicMaterial({color:"blue"})
const capsule=new THREE.Mesh(geometry, material)
capsule.position.set(-2,0,0)
scene.add(capsule)
//Cone Mesh
var coneGeometry=new THREE.ConeGeometry(2,5,32)
var coneMaterial=new THREE.MeshBasicMaterial({color:"yellow"})
var cone=new THREE.Mesh(coneGeometry, coneMaterial)
cone.position.set(2,0,0)
scene.add(cone)



//renderer
var renderer=new THREE.WebGLRenderer({antalias:true})
renderer.setSize(width, height)

//getElement
var element=document.getElementById("container")

//getAppend
element.appendChild(renderer.domElement)

//animation
function animate(){
    // cube.rotation.y += 0.01
    // cube.rotation.x += 0.01
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate()
