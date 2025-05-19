"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

function AnimatedNumber({ targetNumber, duration = 2000 }: { targetNumber: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 30); // update every 30ms
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function Hero() {
  const particlesInit = async (main: any) => {
    // you can initialize tsparticles instance (main) here, adding custom shapes or presets
    await loadFull(main);
  };

  return (
    <section className=" w-full bg-blue-500 h-screen py-16 md:py-24 lg:py-32 xl:py-48 text-white overflow-hidden">
      {/* Particle Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              // directions: "none",
              enable: true,
              outModes: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />
</div>
      {/* Content */}
      <div className=" px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Empower Your Wealth with Our Investment Platform
          </h1>

          <p className="max-w-xl text-blue-200 text-lg md:text-xl">
            Join thousands of investors growing their wealth through smart trading and expert insights.
          </p>

          {/* Animated stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-10 text-center">
            <div>
              <p className="text-4xl font-bold text-white">
                <AnimatedNumber targetNumber={12500} />
              </p>
              <p className="text-blue-300">Active Investors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">
                $<AnimatedNumber targetNumber={9800000} />
              </p>
              <p className="text-blue-300">Assets Under Management</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">
                <AnimatedNumber targetNumber={150} />
                +
              </p>
              <p className="text-blue-300">Markets Covered</p>
            </div>
          </div>

          {/* Call to action */}
        
        </div>
      </div>
    </section>
  );
}
