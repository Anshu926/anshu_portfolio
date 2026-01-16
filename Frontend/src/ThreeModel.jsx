import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ThreeModel() {
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true); // Track visibility

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ------------------ PERFORMANCE SETTINGS ------------------ */
    THREE.ColorManagement.enabled = false;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.0); // LOWER PIXEL RATIO = HIGHER FPS

    /* 🎬 SCENE */
    const scene = new THREE.Scene();
    scene.background = null;

    /* 🎥 CAMERA */
    const camera = new THREE.PerspectiveCamera(
      18, // smaller FOV = faster render
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(3, 1.5, 4.5);

    /* 🔥 SUPER OPTIMIZED RENDERER */
    const renderer = new THREE.WebGLRenderer({
      antialias: false,   // ❌ remove heavy smoothing
      alpha: true,
      powerPreference: "low-power" // ⚡ reduces GPU load
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = false;
    renderer.outputEncoding = THREE.LinearEncoding; // faster
    container.appendChild(renderer.domElement);

    /* 💡 LIGHTS — reduced for performance */
    scene.add(new THREE.AmbientLight(0xffffff, 3));

    const dir = new THREE.DirectionalLight(0xffffff, 1.1);
    dir.position.set(3, 3, 3);
    scene.add(dir);

    /* 🌀 CONTROLS – fully optimized */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2; // smoother, less load
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    /* 🔽 DRASTIC MODEL OPTIMIZATION */
    let model = null;
    const loader = new GLTFLoader();
    loader.load(
      "/kid.glb",
      (gltf) => {
        model = gltf.scene;

        // reduce quality of model shadows/material
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.material.flatShading = true; // ⚡ big FPS boost
          }
        });

        model.scale.set(1.6, 1.6, 1.6);
        model.position.set(0, 0.1, 0);
        scene.add(model);
      }
    );

    /* 👀 OBSERVER — Freeze animation when not visible */
    const observer = new IntersectionObserver(
      (entries) => (isVisibleRef.current = entries[0].isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(container);

    /* 🔄 FPS-Boosted Animation Loop */
    function animate() {
      if (isVisibleRef.current) {
        controls.update();
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    }
    animate();

    /* 📱 RESIZE HANDLER */
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "380px",
        marginTop: "10px",
      }}
    />
  );
}
