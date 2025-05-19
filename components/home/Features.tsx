"use client";

import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Real-time Data",
      description: "Access to live market prices and currency pair movements.",
    },
    {
      title: "Advanced Charts",
      description: "Professional trading charts with technical indicators.",
    },
    {
      title: "Secure Platform",
      description: "Bank-level security for all your transactions and data.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-gray-200">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold tracking-tighter "
            >
              Why Choose Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.0 }}
              viewport={{ once: true }}
              className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              <br />
              <p>Our aim is financial growth not stability.</p>
              <br />
              <p>
                "We as humans always seek for more even at the best paying
                jobs... sevenpoints has just the path to follow"
              </p>
              <br />
              <p>
                Our goal are aligned with finding the best jobs your money can
                work for
              </p>{" "}
              <br />
              <p>
                "One common factor among the wealthy is they make money their
                servants, let's help you build that mindset"
              </p>
              <br />
              <p>Our Traders boost years of winning track record.</p>
              <br /> <br />
              <p>We have no interest hanging onto profits.</p>
              <br />
              <p>
                "Probably the best part, you get your ROI directly back to
                whatever mode of payment suits you best"
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
