import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import zupologoImg from "@/public/zupologo.png";
import delologoImg from "@/public/delologo.jpg";

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
    description: [
      "Gained hands-on experience with enterprise virtualization using VMware",
      "Developed practical networking skills by configuring Ubiquiti network infrastructure",
      "Strengthened understanding of network design principles using Cisco Packet Tracer",
      "Built a solid technical foundation for infrastructure management and network administration",
      "Prepared me to contribute effectively in professional IT environments",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023 · 4 months",
    logo: zupologoImg,
  },
  {
    title: "Student Internship",
    location: "Delo.si",
    description: [
      "Managed and updated customer subscriptions for digital and print newspaper services",
      "Maintained accurate subscriber data by editing user accounts and updating internal systems",
      "Performed administrative tasks to support daily operations and improve workflow efficiency",
      "Developed strong attention to detail and organizational skills",
      "Gained practical experience working with database-driven systems and customer data",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022 · 6 months",
    logo: delologoImg,
  },
] as const;

export const projectsData = [
  {
    title: "Arduino RFID Door Lock System",
    description:
      "The project uses Arduino, MFRC522 reader, LCD display, and servo motor. You can edit the RFID cards to be denied or approved.",
    tags: ["C++", "Arduino"],
    icons: ["logos:c-plusplus", "logos:arduino"],
    imageUrl: "/Circuit.png",
    githubLink: "https://github.com/aleksanderpodobnik/arduinoDoorLock",
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
      { name: "C", icon: "logos:c" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "PHP", icon: "logos:php" },
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
      { name: "CLion", icon: "logos:clion" },
      { name: "Windows", icon: "mdi:windows" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
];
