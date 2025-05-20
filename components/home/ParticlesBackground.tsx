"use client";

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
// import useParticlesInit from "@tsparticles/react";

export default function ParticlesBackground() {
//   const particlesInit = useParticlesInit();

  const customInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

//   particlesInit(customInit);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.3 },
        },
        background: {
          color: { value: "transparent" },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
