import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying float vY;
  uniform float time;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave1 = sin(pos.x * 0.5 + time) * 0.8;
    float wave2 = sin(pos.y * 0.3 + time * 0.7) * 0.5;
    float wave3 = sin((pos.x + pos.y) * 0.2 + time * 0.5) * 0.6;
    pos.z += wave1 + wave2 + wave3;
    vY = pos.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vY;
  uniform float time;

  void main() {
    float gradient = smoothstep(-10.0, 10.0, vY);
    vec3 midnightBlue = vec3(0.04, 0.09, 0.16);
    vec3 cyanColor = vec3(0.0, 0.9, 1.0);
    vec3 deepBlack = vec3(0.01, 0.02, 0.03);

    vec3 color = mix(deepBlack, midnightBlue, gradient);
    color = mix(color, cyanColor, smoothstep(0.3, 0.7, gradient) * 0.15);

    float shimmer = sin(vUv.x * 20.0 + time) * sin(vUv.y * 15.0 + time * 0.8) * 0.02;
    color += shimmer;

    float alpha = 1.0 - smoothstep(0.5, 1.0, vUv.y);
    alpha *= 0.7;

    gl_FragColor = vec4(color, alpha);
  }
`;

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.offsetWidth / container.offsetHeight,
      0.1,
      100
    );
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.PlaneGeometry(32, 20, 64, 64);
    const uniforms = {
      time: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -2.6;
    mesh.rotation.x = -0.15;
    scene.add(mesh);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeIncrement = isReducedMotion ? 0.0005 : 0.003;

    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(container);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (!visible) return;
      uniforms.time.value += timeIncrement;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    />
  );
}
