"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CodeSnippetsBackground: React.FC = () => {
  const codeSnippets = [
    { code: "const", color: "#6366f1" },
    { code: "function", color: "#6366f1" },
    { code: "=>", color: "#3b82f6" },
    { code: "{}", color: "#3b82f6" },
    { code: "return", color: "#6366f1" },
    { code: "if", color: "#6366f1" },
    { code: "else", color: "#6366f1" },
    { code: "import", color: "#6366f1" },
    { code: "export", color: "#6366f1" },
    { code: "class", color: "#6366f1" },
    { code: "( )", color: "#3b82f6" },
    { code: "[ ]", color: "#3b82f6" },
    { code: "===", color: "#3b82f6" },
    { code: "!==", color: "#3b82f6" },
    { code: "async", color: "#6366f1" },
    { code: "await", color: "#6366f1" },
    { code: "try", color: "#6366f1" },
    { code: "catch", color: "#6366f1" },
    { code: "map()", color: "#8b5cf6" },
    { code: "filter()", color: "#8b5cf6" },
    { code: "useState", color: "#8b5cf6" },
    { code: "useEffect", color: "#8b5cf6" },
    { code: ".then()", color: "#8b5cf6" },
    { code: "</>", color: "#3b82f6" },
    { code: "&&", color: "#3b82f6" },
    { code: "||", color: "#3b82f6" },
    { code: "?", color: "#3b82f6" },
    { code: ":", color: "#3b82f6" },
  ];

  const [floatingElements, setFloatingElements] = useState<
    Array<{
      id: number;
      snippet: { code: string; color: string };
      x: number;
      y: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const elements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 6,
      size: 0.7 + Math.random() * 0.6,
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute font-mono font-semibold opacity-40"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            color: element.snippet.color,
            fontSize: `${element.size}rem`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, -30, 0],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.snippet.code}
        </motion.div>
      ))}
    </div>
  );
};

export default CodeSnippetsBackground;
