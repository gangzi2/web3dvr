import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import * as THREE from 'three';
import { Vector3 } from 'three';
@Component({
  selector: 'app-viewer3d',
  templateUrl: './viewer3d.component.html',
  styleUrls: ['./viewer3d.component.css']
})
export class Viewer3dComponent implements OnInit {
  @ViewChild('3dviewer') elementRef: ElementRef;
  private container : HTMLElement;

  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;

  private cube : THREE.Mesh;

 
  constructor() {
    console.log(THREE);
   }

  ngOnInit() {
    this.container =  document.getElementById('3dviewer');
    console.log(this.container);
    this.init();
  }
  init(){
    let screen = {
      width  : 500,
      height : 400
    },
    
    view = {
      angle  : 45,
      aspect : screen.width / screen.height,
      near   : 0.1,
      far    : 1000
    };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(view.angle, view.aspect, view. near, view.far);
    this.renderer = new THREE.WebGLRenderer();
    this.scene.add(this.camera);
    this.scene.add(new THREE.AxesHelper(20));
    this.scene.background = new THREE.Color( 0xbfd1e5 );

    this.camera.position.set(10,10,10);
    this.camera.lookAt(new THREE.Vector3(0,0,0));
    this.renderer.setSize(screen.width, screen.height);
    this.container.appendChild(this.renderer.domElement);
    let geometry = new THREE.BoxGeometry(5, 5, 5),
        material = new THREE.MeshLambertMaterial({ color : 0x00FFFF, overdraw: 0.5});

    this.cube = new THREE.Mesh( geometry, material );
 
     
    var ambientLight = new THREE.AmbientLight( 0xcccccc );
    this.scene.add( ambientLight );

    var directionalLight = new THREE.DirectionalLight( Math.random() * 0xffffff );
				directionalLight.position.x = Math.random() - 0.5;
				directionalLight.position.y = Math.random() - 0.5;
				directionalLight.position.z = Math.random() - 0.5;
				directionalLight.position.normalize();
				this.scene.add( directionalLight );
    this.scene.add(this.cube);
    
    this.render();
  }
  render(){
    let self: Viewer3dComponent = this;
    (function render(){
      requestAnimationFrame(render);
      self.renderer.render(self.scene, self.camera);
      self.animate();
    }());
  }

  animate(){
  
    this.cube.rotateX(0.1);
    this.cube.rotateY(0.1);
  }

}
