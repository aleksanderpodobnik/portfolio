import React from "react";
import { CgWorkAlt } from "react-icons/cg";

type Experience = {
  title: string;
  location: string;
  description: string[];
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
    title: " ZupO.si d.o.o. - Student Internship",
    location: "Trzin, Slovenia | On-site",
    description: [
      "Configured and managed VMware virtualization environments to support enterprise operations.",
      "Set up and maintained Ubiquiti network infrastructure, enhancing network reliability.",
      "Utilized Cisco Packet Tracer to design and simulate complex network topologies.",
      "Contributed to optimizing network performance and security in IT environments.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jul 2023 · 3 mos",
    logo: "/zupologo.png",
  },
  {
    title: "Delo.si d.o.o. - Student Internship",
    location: "Ljubljana, Slovenia | On-site",
    description: [
      "Managed and updated customer subscriptions and billing records across digital and print channels.",
      "Maintained accurate subscriber data through routine account reconciliations and system updates.",
      "Handled daily administrative operations, including order processing and responding to customer inquiries.",
      "Contributed to workflow improvements that streamlined subscription processing and reduced manual errors.",
      "Developed strong attention to detail, organizational skills, and practical experience with database-driven systems and customer data.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Jul 2022 · 3 mos",
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
      { name: "Arduino", icon: "logos:arduino" },
      { name: "Raspberry Pi", icon: "logos:raspberry-pi" },
    ],
  },
];
