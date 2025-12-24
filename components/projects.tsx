"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0, "-50% 0px -50% 0px");

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My projects</SectionHeading>
      {
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      }
    </motion.section>
  );
}
