"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering – Information Technology",
    institution: "Sandip Institute of Technology and Research Center, Nashik",
    duration: "June 2019 – July 2023",
    score: "CGPA: 8.10",
    scoreType: "cgpa",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "XII – Higher Secondary Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2018 – June 2019",
    score: "66.92%",
    scoreType: "percent",
    icon: "📘",
  },
  {
    id: 3,
    degree: "X – Secondary School Certificate",
    institution: "DVMH, Savitribai Phule University, Pune",
    duration: "June 2016 – June 2017",
    score: "76.80%",
    scoreType: "percent",
    icon: "📗",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative space-y-4"
    >
      <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-rose-400 via-indigo-400 to-sky-400 hidden sm:block" />

      {educationData.map((edu) => (
        <motion.div
          key={edu.id}
          variants={cardVariants}
          className="relative flex gap-4 sm:gap-6"
        >
          <div className="hidden sm:flex flex-col items-center shrink-0">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-400 dark:border-indigo-500 flex items-center justify-center text-base shadow-md z-10">
              {edu.icon}
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-5 space-y-3">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                  {edu.institution}
                </p>
              </div>

              <span
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${
                  edu.scoreType === "cgpa"
                    ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
                    : "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300"
                }`}
              >
                {edu.score}
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{edu.duration}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}