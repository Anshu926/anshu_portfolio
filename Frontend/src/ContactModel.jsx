import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ContactModel() {
  const containerRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ------------------ GLOBAL PERFORMANCE SETTINGS ------------------ */
    THREE.ColorManagement.enabled = false;
    const pixelRatio = Math.min(window.devicePixelRatio, 1.0); // BEST FOR FPS

    /* 🎬 SCENE */
    const scene = new THREE.Scene();
    scene.background = null;

    /* 🎥 CAMERA */
    const camera = new THREE.PerspectiveCamera(
      22, // slightly lower FOV = LESS RENDER COST
      container.clientWidth / container.clientHeight,
      0.1,
      40
    );
    camera.position.set(3.5, 2, 5);

    /* 🔆 RENDERER — SUPER OPTIMIZED */
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // ❌ REMOVE heavy smoothing
      alpha: true,
      powerPreference: "low-power", // ⚡ REDUCE GPU LOAD
    });

    renderer.setPixelRatio(pixelRatio); // important
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = false;
    renderer.outputEncoding = THREE.LinearEncoding; // faster encoding
    container.appendChild(renderer.domElement);

    /* 💡 LIGHTS — LIGHTWEIGHT */
    scene.add(new THREE.AmbientLight(0xffffff, 1.2));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
    dirLight.position.set(3, 3, 3);
    dirLight.castShadow = false;
    scene.add(dirLight);

    /* 🌀 CONTROLS — ULTRA OPTIMIZED */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = false; // ❌ remove heavy motion smoothing

    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    controls.autoRotate = false;
    controls.autoRotateSpeed = 2.2;

    

    /* 🎨 LOAD GLB MODEL (Optimized) */
    let model = null;
    const loader = new GLTFLoader();
    loader.load(
      "/contact.glb",
      (gltf) => {
        model = gltf.scene;

        // Optimize model
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.material.flatShading = true;
          }
        });

        // Ensure model is straight (fix tilt issue)
        // Ensure model is straight (facing camera)
        model.rotation.set(0, -Math.PI / 3, 0);

        // Responsive scale function
        const setModelScale = () => {
          if (window.innerWidth < 600) {
            model.scale.set(1.4, 1.4, 1.4);
          } else if (window.innerWidth < 1024) {
            model.scale.set(2.0, 2.0, 2.0);
          } else {
            model.scale.set(2.4, 2.4, 2.4);
          }
        };

        setModelScale();
        window.addEventListener("resize", setModelScale);

        model.position.set(0, -0.05, 0);

        scene.add(model);
      },
      undefined,
      (err) => console.error("LOAD ERROR", err)
    );

    /* 👀 STOP RENDERING WHEN NOT IN VIEW */
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    /* 🔄 SUPER FAST ANIMATION LOOP */
    function animate() {
      if (isVisibleRef.current) {
        controls.update();
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    }
    animate();

    /* 📱 AUTO RESIZE */
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    /* 🧹 CLEANUP */
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
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
      }}
    />
  );
}
