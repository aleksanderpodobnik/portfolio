"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./code-snippets-background";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mb-28 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 min-h-[400px] sm:min-h-[650px]"
      style={{ height: "unset" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          height: "600px",
          width: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <ParticleContainer />
      </div>

      <div className="flex items-center justify-center pt-5">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait.jpg"
              alt="Aleksander's portrait"
              width="192"
              height="192"
              quality={100}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            style={{ transformOrigin: "70% 70%" }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hi, I'm{" "}
          {"Aleksander".split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
          .
        </span>{" "}
        I'm a university <span className="font-bold">student,</span> currently
        pursuing a Bachelor's degree in
        <span className="font-bold">
          {" "}
          Computer Science and Informational Technology.
        </span>{" "}
        Let's connect!
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-115 active:scale-105 transition cursor-pointer borderBlack text-black"
          href="https://github.com/aleksanderpodobnik"
          target="_blank"
        >
          <FaGithub className="size-6.5" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-115 active:scale-105 transition cursor-pointer borderBlack text-black"
          href="https://www.linkedin.com/in/aleksanderpodobnik/"
          target="_blank"
        >
          <BsLinkedin className="size-6.5" />
        </a>
      </motion.div>
    </section>
  );
}
