"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const facts = [
    { icon: Code, text: "Fresher with knowledge" },
    // { icon: Coffee, text: '500+ cups of coffee consumed' },
    // { icon: Lightbulb, text: ' projects completed' },
    { icon: Rocket, text: "Always learning new technologies" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-green-500/30"
              >
                <motion.div
                  className="absolute inset-0 border-4 border-green-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <img
                  src="/image.jpeg"
                  alt="Krishna Garg"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                About{" "}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  I'm a motivated full-stack developer and a lifelong learner,
                  passionate about building creative digital solutions. My
                  journey in tech began with curiosity, and I’m continuously
                  learning to sharpen my skills and grow as a developer.
                </p>
                <p>
                  As a fresher, I enjoy exploring new technologies,
                  experimenting with projects, and contributing to the developer
                  community whenever possible. I believe in continuous learning,
                  adapting to change, and staying aligned with the latest
                  industry practices.
                </p>
                <p>
                  My goal is to grow as a developer while creating impactful
                  digital experiences that solve real-world challenges, with a
                  focus on writing clean, efficient, and scalable code.
                </p>
              </motion.div>
            </div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                  }}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-green-500/20 transition-all duration-300"
                >
                  <fact.icon
                    className="text-green-400 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-sm text-gray-300">{fact.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
