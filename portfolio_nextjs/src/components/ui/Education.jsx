// src/components/ui/Education.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

const DegreeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path
      d="M24 4L44 14V18L24 28L4 18V14L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 22V34C12 34 16 40 24 40C32 40 36 34 36 34V22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M44 18V28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="44" cy="30" r="2" fill="currentColor" />
  </svg>
);

const HSCIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <rect
      x="6" y="6" width="36" height="36" rx="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M14 16H34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 22H28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M14 28H24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M28 30L30.5 33L35 27"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="31.5" cy="31" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const SSCIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path
      d="M24 4L28.5 15H40L30.5 22L34 33L24 26L14 33L17.5 22L8 15H19.5L24 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M18 38H30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 42H28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Information Technology",
    institution: "Sandip Institute of Technology and Research Center, Nashik",
    duration: "June 2019 – July 2023",
    score: "CGPA: 8.10",
    Icon: DegreeIcon,
    accentColor: "#845EF7",
  },
  {
    id: 2,
    degree: "XII – Higher Secondary Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2018 – June 2019",
    score: "66.92%",
    Icon: HSCIcon,
    accentColor: "#15C2C5",
  },
  {
    id: 3,
    degree: "X – Secondary School Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2016 – June 2017",
    score: "76.80%",
    Icon: SSCIcon,
    accentColor: "#FF9439",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section className="py-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-5"
      >
        {educationData.map((edu) => {
          const { Icon } = edu;
          return (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]
                bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95
                border border-gray-100 dark:border-white/10
                shadow-sm dark:shadow-lg"
            >

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  {/* Left: icon + text */}
                  <div className="flex items-start gap-4">
                    {/* SVG Icon badge */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${edu.accentColor}25, ${edu.accentColor}10)`,
                        border: `1.5px solid ${edu.accentColor}40`,
                        color: edu.accentColor,
                      }}
                    >
                      <Icon />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p
                        className="text-sm font-semibold bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}80)`,
                        }}
                      >
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 pt-0.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>

                  {/* Score badge */}
                  <div
                    className="px-4 py-2 rounded-2xl flex items-center gap-2 self-start flex-shrink-0"
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
              </div>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10"
                style={{ background: `radial-gradient(circle at bottom right, ${edu.accentColor}60, transparent)` }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}