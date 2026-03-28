"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: string | StaticImageData;
  githubLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  icons,
  imageUrl,
  githubLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col lg:flex-row items-start h-full">
          <div className="lg:w-1/2 pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="font-bold text-gray-500 dark:text-white/70 mb-2">
              Made with:{" "}
            </p>
            <ul className="flex flex-wrap gap-2 mb-3 mt-0 sm:mt-auto">
              {icons.map((icon, iconIndex) => (
                <li key={iconIndex}>
                  <Icon icon={icon} className="mr-3 text-2xl" />
                </li>
              ))}
            </ul>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
              {description}
            </p>
            <div className="flex">
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

          <div className="lg:w-1/2 w-full flex items-center justify-end p-4">
            <div className="relative h-64 w-full sm:h-72 md:h-80 lg:h-80">
              <Image
                src={imageUrl}
                alt="My Project"
                quality={100}
                fill
                className="rounded-lg shadow-2xl object-cover transition transform hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
