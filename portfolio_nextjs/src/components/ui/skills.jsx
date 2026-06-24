"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiRedux, SiHtml5, SiCss3, SiTailwindcss,
  SiMui, SiNodedotjs, SiExpress, SiTypescript,
  SiMongodb, SiMysql, SiFirebase, SiJavascript,
  SiGit, SiGithub, SiPostman, SiAmazon, SiCloudinary,
  SiJsonwebtokens
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },

  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#888888" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },

  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },

  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#888888" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },

  { name: "Auth / JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
  { name: "SQL", icon: FaDatabase, color: "#15C2C5" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section className="py-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap gap-3 justify-start"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl cursor-default
                bg-gray-50 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                hover:border-gray-300 dark:hover:border-white/20
                hover:bg-white dark:hover:bg-white/10
                shadow-sm hover:shadow-md
                transition-all duration-300 min-w-[72px]"
              style={{
                "--skill-color": skill.color,
              }}
            >
              <Icon
                className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              />
              <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center leading-tight whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}