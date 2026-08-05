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

const skillsByCategory = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#888888" },
      { name: "REST APIs", icon: TbApi, color: "#FF6B6B" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "SQL", icon: FaDatabase, color: "#15C2C5" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#888888" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
    ],
  },
  {
    category: "Concepts",
    items: [
      { name: "Auth / JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "var(--hover-bg-color)",
    transition: { duration: 0.2 },
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
        className="space-y-8"
      >
        {skillsByCategory.map((categoryGroup, index) => (
          <motion.div key={index} variants={categoryVariants} className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {categoryGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryGroup.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.span
                    key={skill.name}
                    variants={skillTagVariants}
                    whileHover="hover"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full cursor-pointer
                      text-sm font-medium transition-all duration-300
                      text-gray-700 dark:text-gray-300
                      bg-gray-100 dark:bg-white/5
                      hover:bg-gray-200 dark:hover:bg-white/10"
                    style={{
                      "--hover-bg-color": `${skill.color}20`, // Subtle highlight on hover
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: skill.color }} />
                    {skill.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}