"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronRight, Zap } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Associate Front-End Developer",
    company: "Nandhar Technologies",
    location: "Bengaluru, India",
    duration: "June 2025 – Present",
    type: "Full Time",
    status: "current",
    accentColor: "#37D67A",
    points: [
      "Contributed to a mobile-first retail/POS platform for billing, inventory tracking, and customer/supplier management.",
      "Built workflows for stock updates, expiry tracking, low-stock alerts, barcode scanning, and WhatsApp invoicing.",
      "Developed features using TypeScript, React.js, Node.js, Express.js, MongoDB, AWS, and Material UI in an Agile environment.",
    ],
    techStack: ["TypeScript", "React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Material UI"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Zidio Development",
    location: "Remote",
    duration: "July 2024 – September 2024",
    type: "Internship",
    status: "completed",
    accentColor: "#845EF7",
    points: [
      "Collaborated with a 7-member team to build Job Listing Portal and Student Result Management System.",
      "Frontend: Developed UIs with React.js, Redux, and Tailwind CSS, improving component reusability by 30%.",
      "Backend: Built REST APIs using Node.js/Express.js, integrated MongoDB for data storage, and optimized query performance by 20%.",
    ],
    techStack: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
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

export default function Experience() {
  return (
    <section className="py-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-5"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]
              bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95
              border border-gray-100 dark:border-white/10
              shadow-sm dark:shadow-lg"
          >

            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.status === "current" && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                        style={{
                          background: `${exp.accentColor}20`,
                          border: `1px solid ${exp.accentColor}40`,
                          color: exp.accentColor,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    className="text-base font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${exp.accentColor}, ${exp.accentColor}80)`,
                    }}
                  >
                    {exp.company}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 self-start">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-800" />

              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                    <ChevronRight
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: exp.accentColor }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="absolute bottom-0 right-0 w-28 h-28 rounded-tl-full opacity-10"
              style={{ background: `radial-gradient(circle at bottom right, ${exp.accentColor}60, transparent)` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}