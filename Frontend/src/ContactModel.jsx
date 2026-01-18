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

    const pixelRatio =
      window.innerWidth < 600 ? 0.7 : Math.min(window.devicePixelRatio, 1);

    /* 🎬 SCENE */
    const scene = new THREE.Scene();
    scene.background = null;

    /* Slight fog = smoother feel */
    scene.fog = new THREE.Fog(0x000000, 6, 15);

    /* 🎥 CAMERA */
    const camera = new THREE.PerspectiveCamera(
      22,
      container.clientWidth / container.clientHeight,
      0.1,
      40
    );
    camera.position.set(3.5, 2, 5);

    /* 🔆 RENDERER — MAX FPS MODE */
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "low-power",
      precision: "lowp", // 🔥 LOW PRECISION MODE
    });

    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = false;

    /* Disable tone mapping for speed */
    renderer.toneMapping = THREE.NoToneMapping;

    renderer.outputEncoding = THREE.LinearEncoding;
    container.appendChild(renderer.domElement);

    /* 💡 LIGHTS — soft & clean (best for performance) */
    const ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.4);
    dirLight.position.set(2, 2, 2);
    dirLight.castShadow = false;
    scene.add(dirLight);

    /* 🌀 CONTROLS */
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = false;

    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;

    /* 🎨 LOAD GLB */
    let model = null;
    const loader = new GLTFLoader();
    loader.load(
      "/contact.glb",
      (gltf) => {
        model = gltf.scene;

        /* Mesh Optimization */
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;

            /* Faster material setup */
            child.material.flatShading = true;
            child.material.precision = "lowp"; // 🔥 low precision material
            child.material.needsUpdate = true;
          }
        });

        /* Fix angle */
        model.rotation.set(0, -Math.PI / 3, 0);

        /* Responsive scaling */
        const setModelScale = () => {
          if (window.innerWidth < 600) {
            model.scale.set(1.2, 1.2, 1.2);
          } else if (window.innerWidth < 1024) {
            model.scale.set(2.0, 2.0, 2.0);
          } else {
            model.scale.set(2.3, 2.3, 2.3);
          }
        };

        setModelScale();
        window.addEventListener("resize", setModelScale);

        model.position.set(0, -0.05, 0);

        scene.add(model);
      },
      undefined,
      (err) => console.error("MODEL LOAD ERROR", err)
    );

    /* 👀 STOP RENDER WHEN NOT IN VIEW */
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    /* 🔄 ANIMATION LOOP */
    const animate = () => {
      if (isVisibleRef.current) {
        controls.update();
        renderer.render(scene, camera);
      }
      requestAnimationFrame(animate);
    };
    animate();

    /* 📱 RESIZE HANDLER */
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
