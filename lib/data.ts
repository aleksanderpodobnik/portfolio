import React from "react";
import { CgWorkAlt } from "react-icons/cg";

type Experience = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
  logo: string;
};

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

export const experiencesData: Experience[] = [
  {
    title: "Student Internship",
    location: "ZupO.si",
    description:
      "During my internship at Zupo.si, I gained hands-on experience with enterprise virtualization using VMware and worked on configuring Ubiquiti network infrastructure. I also used Cisco Packet Tracer to strengthen my understanding of network design principles. This experience helped me build a solid foundation in infrastructure management and network administration, and prepared me to contribute effectively in a professional IT environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023 · 4 months",
    logo: "/zupologo.png",
  },
  {
    title: "Student Internship",
    location: "Delo.si",
    description:
      "During my internship at Delo.si, I managed and updated customer subscriptions for both digital and print newspaper services while maintaining accurate subscriber data through regular account updates in internal systems. I supported daily operations by handling administrative tasks and helping improve workflow efficiency. Through this experience, I developed strong attention to detail and organizational skills, while gaining practical experience working with database-driven systems and customer data.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022 · 6 months",
    logo: "/delologo.jpg",
  },
];

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
