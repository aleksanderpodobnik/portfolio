"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>
      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 hover:bg-gray-200 transition dark:text-white">
        <div>
          <Image src="/ferilogo.jpg" alt="FERI" width="150" height="150" />
        </div>

        <div>
          <p className="text-lg font-medium pb-2">
            University of Maribor | Faculty of Electrical Engineering and
            Computer Science (FERI)
          </p>
          <hr className="pt-2" />
          <p>
            Currently pursuing a degree in Computer Science and Informational
            Technology
          </p>
          <p className="mt-1">Start date: October 2025</p>
          <p className="my-1">Expected graduation date: June 2028</p>
        </div>
      </div>
    </motion.section>
  );
}
