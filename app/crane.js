"use client";
import React, { Component } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

class Crane extends Component {
  state = {boundingRect:{
    width:1,
    height:1
  }};
  scene = new THREE.Scene();
  shape = [
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  ];
  constructor(props) {
    super(props);
    // Add lighting
    this.scene.add(new THREE.AmbientLight(0x8f8f8f));
    let light = new THREE.DirectionalLight(0xffffff); // soft white light
    light.position.set(1.0, 0.5, 1.0);
    this.scene.add(light);
    // Add camera
    this.camera = new THREE.PerspectiveCamera(60, this.state.boundingRect.width / this.state.boundingRect.height, 0.1, 1000);
    this.camera.position.x = -2;
    this.camera.position.y = -0.5;
    this.camera.position.z = 5;
    // Load an object and start animation
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();
    mtlLoader.load('/logo.mtl', (materials) => {
      materials.preload();
      objLoader.setMaterials(materials);
      objLoader.load('/logo.obj', (object) => {
        this.object = object;
        this.object.scale.set(0.002, 0.002, 0.002);
        this.group = new THREE.Group();
        for (let i=0; i<this.shape.length; i++) {
          for (let j=0; j<this.shape[i].length; j++) {
            if (this.shape[i][j] === 1) {
              object = this.object.clone();
              object.translateZ(i-4);
              object.translateX(j-5);
              object.rotation.y = 1.2 + 0.2*i -0.1*j;
              this.group.add(object);
            }
          }
        }
        this.group.scale.set(0.4, 0.4, 0.4);
        this.scene.add(this.group);
        // Add event listeners
        window.addEventListener('resize', this.resize);
        window.addEventListener('mousemove', this.move);
        // Start animation
        //this.animate();
      });
    });
  }
  animate = () => {
    // requestAnimationFrame(this.animate);
    this.group.rotation.y += 0.005;
    this.renderer.render(this.scene, this.camera);
  };
  move = (event) => {
    this.group.rotation.x = 0.6 + event.clientY / window.innerHeight;
    this.group.rotation.y = 0.5 - event.clientX / window.innerWidth;
    this.renderer.render(this.scene, this.camera);
  };
  resize = (event) => {
    let {width, height} = this.mount.getBoundingClientRect();
      this.setState({boundingRect:{
        width:width,
        height:height
      }});
  };
  ref = element => {
    if (element) {
      this.mount = element;
      let {width, height} = this.mount.getBoundingClientRect();
      this.setState({boundingRect:{
        width:width,
        height:height
      }});
    }
  };
  componentDidMount() {
    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.state.boundingRect.width, this.state.boundingRect.height);
    this.renderer.setClearColor(0xffffff, 0);
    this.mount.appendChild(this.renderer.domElement);
  }
  componentDidUpdate() {
    // Update the renderer
    this.camera.aspect = this.state.boundingRect.width / this.state.boundingRect.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.state.boundingRect.width, this.state.boundingRect.height);
  } 
  render() {
    return (
      <div className="absolute w-[1000px] h-[500px] right-[20%] z-0" ref={this.ref}/>
    )
  }
}

export default Crane;