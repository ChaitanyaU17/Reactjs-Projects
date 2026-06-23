"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Information Technology",
    institution: "Sandip Institute of Technology and Research Center, Nashik",
    duration: "June 2019 – July 2023",
    score: "CGPA: 8.10",
    scoreType: "cgpa",
    scoreColor: "#845EF7",
    icon: "🎓",
    accentColor: "#845EF7",
  },
  {
    id: 2,
    degree: "XII – Higher Secondary Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2018 – June 2019",
    score: "66.92%",
    scoreType: "percent",
    scoreColor: "#15C2C5",
    icon: "📘",
    accentColor: "#15C2C5",
  },
  {
    id: 3,
    degree: "X – Secondary School Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2016 – June 2017",
    score: "76.80%",
    scoreType: "percent",
    scoreColor: "#FF9439",
    icon: "📗",
    accentColor: "#FF9439",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Education() {
  return (
    <section className="py-4 space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-gray-200 dark:border-white/10">
          <GraduationCap className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Academic Background</span>
        </div>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative space-y-6"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500" />

        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-4 h-4 rounded-full transform -translate-x-1/2 z-10">
              <div 
                className="w-full h-full rounded-full"
                style={{ backgroundColor: edu.accentColor }}
              />
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: edu.accentColor, opacity: 0.3 }}
              />
            </div>

            {/* Icon badge on timeline */}
            <div 
              className="absolute left-4 top-6 w-8 h-8 rounded-xl flex items-center justify-center text-lg z-20"
              style={{
                background: `linear-gradient(135deg, ${edu.accentColor}30, ${edu.accentColor}15)`,
                border: `1px solid ${edu.accentColor}40`,
              }}
            >
              {edu.icon}
            </div>

            {/* Card */}
            <div className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-lg">
              {/* Glow effect */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl dark:block hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${edu.accentColor}30, transparent, ${edu.accentColor}10)` 
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <div 
                      className="text-base font-semibold bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}80)` }}
                    >
                      {edu.institution}
                    </div>
                  </div>
                  
                  {/* Score badge */}
                  <div 
                    className="px-4 py-2 rounded-2xl flex items-center gap-2"
                    style={{
                      background: `${edu.accentColor}15`,
                      border: `1px solid ${edu.accentColor}30`,
                    }}
                  >
                    <Award className="w-4 h-4" style={{ color: edu.accentColor }} />
                    <span className="text-sm font-bold" style={{ color: edu.accentColor }}>
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-gray-700" />

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Corner accent */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10"
                style={{ background: `radial-gradient(circle at bottom right, ${edu.accentColor}40, transparent)` }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}