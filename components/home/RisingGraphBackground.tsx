"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";
import * as THREE from "three";

function RisingLine() {
  const points = useRef<THREE.Vector3[]>([
    new THREE.Vector3(-5, -2, 0),
    new THREE.Vector3(-2, -1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 1, 0),
    new THREE.Vector3(4, 2.5, 0),
  ]);

  const lineRef = useRef<any>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // animate line y positions
    for (let i = 0; i < points.current.length; i++) {
      const point = points.current[i];
      point.y = Math.sin(time * 0.5 + i) + i * 0.5 - 2;
    }

    if (lineRef.current) {
      lineRef.current.geometry.setFromPoints(points.current);
    }
  });

  return (
    <>
      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#3B82F6" linewidth={2} />
      </line>
    </>
  );
}

function RisingLabels() {
  const nums = [1000, 2000, 3000];
  const textRefs = useRef<any[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    textRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.position.y = Math.sin(t * 0.4 + idx) + idx * 0.6;
        ref.text = `${Math.floor(t * (100 * (idx + 1)))}`;
      }
    });
  });

  return (
    <>
      {nums.map((_, idx) => (
        <Text
          ref={(el) => (textRefs.current[idx] = el)}
          key={idx}
          fontSize={0.5}
          position={[idx * 3 - 3, 0, 0]}
          color="red"
        >
          0
        </Text>
      ))}
    </>
  );
}

export default function RisingGraphBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <RisingLine />
        <RisingLabels />
      </Canvas>
    </div>
  );
}
