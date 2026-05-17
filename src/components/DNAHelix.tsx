import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
  attribute float angle;
  attribute float yPos;
  attribute float radius;
  attribute float speed;
  attribute float rand;
  varying float vY;
  varying float vRand;
  uniform float time;

  void main() {
    float a = angle + time * speed;
    float x = cos(a) * radius;
    float z = sin(a) * radius;
    float wobble = sin(time * 6.0 + yPos) * 0.15;
    float breathe = 1.0 + sin(time * 2.0) * 0.12;
    vec3 pos = position + vec3(x * breathe + wobble, yPos, z * breathe);
    vY = (yPos + 12.5) / 25.0;
    vRand = rand;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 3.0 + rand * 4.0;
  }
`;

const fragmentShader = `
  varying float vY;
  varying float vRand;

  void main() {
    vec3 cyanColor = vec3(0.0, 0.9, 1.0);
    vec3 redColor = vec3(1.0, 0.2, 0.5);
    vec3 color = mix(cyanColor, redColor, vRand);
    float dist = length(gl_PointCoord - vec2(0.5));
    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
    alpha *= smoothstep(0.0, 0.15, vY);
    alpha *= smoothstep(1.0, 0.7, vY);
    alpha *= 0.8;
    gl_FragColor = vec4(color, alpha);
  }
`;

function createHelixStrand(count: number, offset: number) {
  const positions: number[] = [];
  const angles: number[] = [];
  const yPositions: number[] = [];
  const radii: number[] = [];
  const speeds: number[] = [];
  const rands: number[] = [];

  for (let i = 0; i < count; i++) {
    positions.push(0, 0, 0);
    angles.push(i / count * Math.PI * 20 + offset);
    yPositions.push((i / count - 0.5) * 25);
    radii.push(4.0);
    speeds.push(0.2);
    rands.push(Math.random());
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('angle', new THREE.Float32BufferAttribute(angles, 1));
  geometry.setAttribute('yPos', new THREE.Float32BufferAttribute(yPositions, 1));
  geometry.setAttribute('radius', new THREE.Float32BufferAttribute(radii, 1));
  geometry.setAttribute('speed', new THREE.Float32BufferAttribute(speeds, 1));
  geometry.setAttribute('rand', new THREE.Float32BufferAttribute(rands, 1));

  return geometry;
}

interface DNAHelixProps {
  opacity?: number;
}

export default function DNAHelix({ opacity = 0.4 }: DNAHelixProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    camera.position.set(0, 0, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const uniforms = {
      time: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const strand1 = createHelixStrand(250, 0);
    const strand2 = createHelixStrand(250, Math.PI);

    const points1 = new THREE.Points(strand1, material);
    const points2 = new THREE.Points(strand2, material);
    scene.add(points1);
    scene.add(points2);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeIncrement = isReducedMotion ? 0.001 : 0.005;

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
      strand1.dispose();
      strand2.dispose();
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
        opacity,
        overflow: 'hidden',
      }}
    />
  );
}
