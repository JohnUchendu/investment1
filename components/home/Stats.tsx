'use client';

import { motion } from 'framer-motion';

export function Stats() {
  const stats = [
    { value: "10,000+", label: "Active Traders" },
    { value: "$5B+", label: "Monthly Volume" },
    { value: "24/7", label: "Market Support" },
    { value: "150+", label: "Trading Instruments" }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
