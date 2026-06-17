"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Associate Front-End Developer",
    company: "Nandhar Technologies",
    location: "Bengaluru, India",
    duration: "June 2025 – Present",
    type: "Full Time",
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
    points: [
      "Collaborated with a 7-member team to build Job Listing Portal and Student Result Management System, ensuring secure user authentication and data visualization.",
      "Frontend: Developed UIs with React.js, Redux, and Tailwind CSS, improving component reusability by 30%.",
      "Backend: Built REST APIs using Node.js/Express.js, integrated MongoDB for data storage, and optimized query performance by 20%.",
    ],
    techStack: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 space-y-4"
          >
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  {index === 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Current
                    </span>
                  )}
                  {index === 1 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                      Internship
                    </span>
                  )}
                </div>

                <p className="text-base font-medium bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                  {exp.company}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{exp.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />
            <ul className="space-y-2">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-rose-500 to-indigo-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}