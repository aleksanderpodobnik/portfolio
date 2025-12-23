import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import raspberrypirfidlockImg from "@/public/raspberrypirfidlock.jpg";
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
    date: "--> 2023 - 2023 · Less than a year",
    logo: zupologoImg,
  },
] as const;

/*export const projectsData = [
  {
    title: "Raspberry Pi RFID Lock",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["JavaScript", "React"],
    icons: ["logos:javascript", "logos:react"],
    imageUrl: raspberrypirfidlockImg,
    githubLink: "https://github.com",
    demoLink: "https://www.youtube.com",
  },
] as const;*/

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
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Single Page Applications" },
      { name: "Responsive Design" },
    ],
  },
  /*{
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "CI/CD" },
    ],
  },*/
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Git", icon: "logos:git-icon" },
    ],
  },
];
