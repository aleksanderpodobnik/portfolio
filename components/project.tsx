"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  icons,
  imageUrl,
  githubLink,
  demoLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-row items-center h-full">
          <div className="w-1/2 pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="flex flex-wrap gap-2 mb-3 mt-0 sm:mt-auto">
              <p className="font-bold text-gray-500 dark:text-white/70">
                Made with:{" "}
              </p>
              {icons.map((icon, iconIndex) => (
                <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
              ))}
            </ul>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
              {description}
            </p>
            <div className="flex">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
                >
                  <AiFillYoutube className="mr-1" /> Demo
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
                >
                  <AiFillGithub className="mr-1 opacity-70" />{" "}
                  <span className="opacity-70">GitHub</span>
                </a>
              )}
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-end p-4">
            <Image
              src={imageUrl}
              alt="My Project"
              quality={100}
              className={
                "rounded-lg shadow-2xl w-36 sm:w-56 md:w-80 lg:w-[28.25rem] " +
                "transition transform hover:scale-[1.02]"
              }
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
