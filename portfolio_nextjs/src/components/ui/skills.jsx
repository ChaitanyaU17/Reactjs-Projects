"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Layout, Server, Database, Wrench, Brain, Sparkles
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Layout,
    gradient: ["#FF6B6B", "#EE5A5A", "#FF8787"],
    skills: ["React.js", "Redux", "HTML", "CSS", "Tailwind CSS", "Material UI"],
    accentColor: "#FF6B6B",
  },
  {
    category: "Backend Development",
    icon: Server,
    gradient: ["#845EF7", "#7048E8", "#9775FA"],
    skills: ["Node.js", "Express.js", "REST APIs", "TypeScript"],
    accentColor: "#845EF7",
  },
  {
    category: "Database Management",
    icon: Database,
    gradient: ["#37D67A", "#2BC866", "#5AE898"],
    accentColor: "#37D67A",
    skills: ["MongoDB", "MySQL", "SQL", "Firebase"],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    gradient: ["#FF9439", "#FF7B00", "#FFAB5E"],
    skills: ["JavaScript", "Java", "TypeScript"],
    accentColor: "#FF9439",
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    gradient: ["#15C2C5", "#0DC1C4", "#4DD4D8"],
    skills: ["Git", "GitHub", "Postman", "AWS", "Cloudinary"],
    accentColor: "#15C2C5",
  },
  {
    category: "Core Fundamentals",
    icon: Brain,
    gradient: ["#E64980", "#C92A6B", "#F083A4"],
    skills: ["Authentication", "CRUD", "API Integration"],
    accentColor: "#E64980",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    }
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, type: "spring", stiffness: 200 }
  },
};

export default function Skills() {
  return (
    <section className="py-4 space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 via-indigo-500/10 to-sky-500/10 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My Stack</span>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
          Technologies I Work With
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          From frontend interfaces to backend architecture, here are the tools and technologies I use to build modern, scalable applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.category}
            variants={cardVariants}
            className="group relative"
          >
            {/* Outer glow */}
            <div 
              className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl dark:bg-gradient-to-r dark:from-gray-900/50"
              style={{ 
                background: `linear-gradient(135deg, ${cat.accentColor}30, transparent, ${cat.accentColor}20)` 
              }}
            />

            {/* Card */}
            <div 
              className="relative p-6 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none"
            >
              {/* Gradient accent line */}
              <div 
                className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
                style={{ color: cat.accentColor }}
              />

              {/* Top section with icon */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${cat.accentColor}20, ${cat.accentColor}10)`,
                      border: `1px solid ${cat.accentColor}30`,
                    }}
                  >
                    <cat.icon 
                      className="w-7 h-7"
                      style={{ color: cat.accentColor }}
                    />
                    {/* Icon glow */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500 dark:opacity-30"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {cat.skills.length} Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    custom={i}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-default bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                    whileHover={{
                      background: `${cat.accentColor}20`,
                      borderColor: `${cat.accentColor}40`,
                      color: cat.accentColor,
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Corner decoration */}
              <div 
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at bottom right, ${cat.accentColor}40, transparent)` }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-8 pt-8"
      >
        {[
          { value: "1+", label: "Years Experience" },
          { value: "15+", label: "Technologies" },
          { value: "10+", label: "Projects Built" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}