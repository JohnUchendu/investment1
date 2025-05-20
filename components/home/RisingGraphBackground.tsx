// "use client";

// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Line, Text } from "@react-three/drei";
// import * as THREE from "three";

// function RisingLine() {
//   const points = useRef<THREE.Vector3[]>([
//     new THREE.Vector3(-5, -2, 0),
//     new THREE.Vector3(-2, -1, 0),
//     new THREE.Vector3(0, 0, 0),
//     new THREE.Vector3(2, 1, 0),
//     new THREE.Vector3(4, 2.5, 0),
//   ]);

//   const lineRef = useRef<any>(null);

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();

//     // animate line y positions
//     for (let i = 0; i < points.current.length; i++) {
//       const point = points.current[i];
//       point.y = Math.sin(time * 0.5 + i) + i * 0.5 - 2;
//     }

//     if (lineRef.current) {
//       lineRef.current.geometry.setFromPoints(points.current);
//     }
//   });

//   return (
//     <>
//       <line ref={lineRef}>
//         <bufferGeometry />
//         <lineBasicMaterial color="#3B82F6" linewidth={2} />
//       </line>
//     </>
//   );
// }

// function RisingLabels() {
//   const nums = [1000, 2000, 3000];
//   const textRefs = useRef<any[]>([]);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     textRefs.current.forEach((ref, idx) => {
//       if (ref) {
//         ref.position.y = Math.sin(t * 0.4 + idx) + idx * 0.6;
//         ref.text = `${Math.floor(t * (100 * (idx + 1)))}`;
//       }
//     });
//   });

//   return (
//     <>
//       {nums.map((_, idx) => (
//         <Text
//           ref={(el) => (textRefs.current[idx] = el)}
//           key={idx}
//           fontSize={0.5}
//           position={[idx * 3 - 3, 0, 0]}
//           color="white"
//         >
//           0
//         </Text>
//       ))}
//     </>
//   );
// }

// export default function RisingGraphBackground() {
//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
//         <ambientLight />
//         <RisingLine />
//         <RisingLabels />
//       </Canvas>
//     </div>
//   );
// }

// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Text } from "@react-three/drei";
// import * as THREE from "three";

// // Detect if it's mobile (client-safe)
// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return isMobile;
// }

// function RisingLine() {
//   const points = useRef([
//     new THREE.Vector3(-5, -2, 0),
//     new THREE.Vector3(-2, -1, 0),
//     new THREE.Vector3(0, 0, 0),
//     new THREE.Vector3(2, 1, 0),
//     new THREE.Vector3(4, 2.5, 0),
//   ]);
//   const lineRef = useRef<THREE.Line | null>(null);

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     const newPoints = points.current.map((p, i) => {
//       return new THREE.Vector3(p.x, Math.sin(time * 0.5 + i) + i * 0.5 - 2, p.z);
//     });
//     if (lineRef.current?.geometry) {
//       lineRef.current.geometry.setFromPoints(newPoints);
//     }
//   });

//   return (
//  <Line
//   ref={lineRef}
//   points={points.current}
//   color="#3B82F6"
//   lineWidth={2}
// />

//   );
// }

// function RisingLabels({ fontSize = 0.5 }: { fontSize?: number }) {
//   const nums = [1000, 2000, 3000];
//   const textRefs = useRef<any[]>([]);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     textRefs.current.forEach((ref, idx) => {
//       if (ref) {
//         ref.position.y = Math.sin(t * 0.4 + idx) + idx * 0.6;
//         ref.text = `${Math.floor(t * (100 * (idx + 1)))}`;
//       }
//     });
//   });

//   return (
//     <>
//       {nums.map((_, idx) => (
//         <Text
//           key={idx}
//           ref={(el) => (textRefs.current[idx] = el)}
//           fontSize={fontSize}
//           position={[idx * 3 - 3, 0, 0]}
//           color="white"
//         >
//           0
//         </Text>
//       ))}
//     </>
//   );
// }

// export default function RisingGraphBackground() {
//   const isMobile = useIsMobile();

//   return (
//     <div className="absolute inset-0 -z-10">
//       <Canvas
//         camera={{
//           position: [0, 0, isMobile ? 12 : 10],
//           fov: isMobile ? 70 : 50,
//         }}
//         dpr={[1, isMobile ? 1.5 : 2]}
//       >
//         <ambientLight />
//         <RisingLine />
//         <RisingLabels fontSize={isMobile ? 0.35 : 0.5} />
//       </Canvas>
//     </div>
//   );
// }

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RisingLine() {
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const points = useRef<THREE.Vector3[]>([
    new THREE.Vector3(-5, -2, 0),
    new THREE.Vector3(-2, -1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, 1, 0),
    new THREE.Vector3(4, 2.5, 0),
  ]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const updatedPoints = points.current.map((p, i) => {
      return new THREE.Vector3(
        p.x,
        Math.sin(time * 0.5 + i) + i * 0.5 - 2,
        p.z
      );
    });

    if (geometryRef.current) {
      geometryRef.current.setFromPoints(updatedPoints);
    }
  });

  return (
    <line>
      <bufferGeometry ref={geometryRef} />
      <lineBasicMaterial color="#3B82F6" linewidth={2} />
    </line>
  );
}

export default function RisingGraphBackground() {
  return (
    <div className="absolute top-0 right-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "#000" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight />
          <RisingLine />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
