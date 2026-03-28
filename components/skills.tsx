"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-4xl mx-auto scroll-mt-28 sm:mb-40 px-4"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="mt-10 divide-y divide-gray-300 dark:divide-white/20">
        {skillsData.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.1 * groupIndex }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row py-6 gap-6 sm:gap-12"
          >
            <div className="sm:w-1/4 text-left font-semibold text-gray-700 dark:text-white text-lg">
              {group.category}
            </div>

            <ul className="sm:w-3/4 flex flex-wrap gap-3 text-gray-800 dark:text-white/80 text-lg">
              {group.skills.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  className="flex items-center gap-2 bg-gray-100 dark:bg-white/10 border border-black/[0.1] dark:border-white/[0.2] px-3 py-1.5 rounded-lg cursor-default"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  animate={{
                    y: [0, -8, 0],
                    transition: {
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    },
                  }}
                >
                  {skill.icon && (
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        transition: {
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        },
                      }}
                    >
                      <Icon icon={skill.icon} className="text-xl" />
                    </motion.div>
                  )}
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
