import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import loading from "@/public/loading.gif";
import zupologoImg from "@/public/zupologo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student Internship",
    location: "ZupO.si",
    description:
      "During my internship at ZupO.si, I gained hands-on experience with enterprise virtualization through VMware, developed practical networking skills by configuring Ubiquiti network infrastructure, and strengthened my understanding of network design principles using Cisco Packet Tracer. This technical foundation has prepared me to contribute effectively to infrastructure management and network administration in professional IT environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023 · Less than a year",
    logo: zupologoImg,
  },
] as const;

export const projectsData = [
  {
    title: "Nothing here yet . . .",
    description:
      "Stay tuned! I'm currently working on exciting projects that I'll be sharing soon.",
    tags: ["React"],
    icons: ["logos:react"],
    imageUrl: loading,
    githubLink: "https://github.com/aleksanderpodobnik",
    demoLink: "https://www.youtube.com/@aco08p/videos",
  },
] as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Java", icon: "logos:java" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PHP", icon: "logos:php" },
      { name: "SQL", icon: "logos:sql" },
      { name: "MySQL", icon: "logos:mysql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Visual Studio Code", icon: "logos:visual-studio-code" },
      { name: "Windows", icon: "logos:windows-11" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
];
