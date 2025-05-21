"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import RisingGraphBackground from "./RisingGraphBackground";
// import ParticlesBackground from "./ParticlesBackground";

import dynamic from "next/dynamic";

const RisingGraphBackground = dynamic(() => import("./RisingGraphBackground"), {
  ssr: false,
});

function AnimatedNumber({
  targetNumber,
  duration = 4000,
}: {
  targetNumber: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 30);
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
  return (
    <section className="flex flex-row h-screen w-full bg-blue-800  py-16 md:py-24 lg:py-32 xl:py-48 text-white overflow-hidden">
      {/* <ParticlesBackground/> */}
      <div className="px-4 md:px-6 relative z-10">
        <div className="flex flex-col  space-y-6 text-center md:text-left  max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl font-extrabold pt-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }}
          >
            Empower Your Wealth with Our Investment Platform
          </motion.h1>

          <motion.p
            className="max-w-xl text-blue-200 text-xl md:text-3xl  pt-8 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.8 }}
            viewport={{ once: true }}
          >
            Join thousands of investors growing their wealth through smart
            trading and expert insights.
          </motion.p>

          <motion.div
             className="flex flex-wrap justify-center md:justify-start gap-10 text-center md:text-left text-[14px] md:text-md lg:text-lg pt-50 md:pt-0 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {[11385, 561733694, 294, 8000000].map((num, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                viewport={{ once: true }}
              >
                <p className="text-[15px]  md:text-md lg:text-lg font-bold text-white">
                  {i === 1 || i === 3 ? "$" : ""}
                  {i === 3 ? "8M" : <AnimatedNumber targetNumber={num} />}
                  {i === 2 || i === 3 ? "+" : ""}
                </p>
                <p className="text-blue-300">
                  {i === 0
                    ? "Active Investors"
                    : i === 1
                    ? "Assets Under Management"
                    : i === 2
                    ? "Active Traders"
                    : "Monthly Volume"}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional CTA */}
          {/* <Link href="/signup">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            >
            <Button className="mt-8">Get Started</Button>
            </motion.div>
            </Link> */}
        </div>
      </div>
      <RisingGraphBackground />
    </section>
  );
}
