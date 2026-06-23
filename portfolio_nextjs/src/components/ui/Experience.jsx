"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, MapPin, Calendar, ChevronRight, Zap
} from "lucide-react";

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
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
};

export default function Experience() {
  return (
    <section className="py-4 space-y-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-gray-200 dark:border-white/10">
          <Briefcase className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Career Path</span>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          My professional journey building real-world applications and growing as a developer.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative space-y-8"
      >
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500 via-indigo-500 to-sky-500" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            className={`relative flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full transform -translate-x-1/2 z-10">
              <div 
                className="w-full h-full rounded-full"
                style={{ backgroundColor: exp.accentColor }}
              />
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: exp.accentColor, opacity: 0.3 }}
              />
            </div>

            {/* Content card */}
            <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12'}`}>
              <div 
                className="group relative p-6 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-950/95 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-lg"
              >
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl dark:block hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${exp.accentColor}30, transparent, ${exp.accentColor}10)` 
                  }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Status badge */}
                  <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    {exp.status === 'current' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: `${exp.accentColor}20`,
                          border: `1px solid ${exp.accentColor}40`,
                          color: exp.accentColor,
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: exp.accentColor }} />
                        Current
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                      {exp.type}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div className={index % 2 === 0 ? 'md:text-left' : ''}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <div 
                      className="text-lg font-semibold bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${exp.accentColor}, ${exp.accentColor}80)` }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  {/* Location & Duration */}
                  <div className={`flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Divider */}
                  <div 
                    className="h-px bg-gray-200 dark:bg-gray-700"
                    style={{ opacity: index % 2 === 0 ? 1 : 0.5 }}
                  />

                  {/* Points */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={pointVariants}
                        custom={i}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm"
                      >
                        {index % 2 === 0 ? <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 ml-auto" style={{ color: exp.accentColor }} /> : <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: exp.accentColor }} />}
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : ''}`}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10"
                  style={{ background: `radial-gradient(circle at bottom right, ${exp.accentColor}40, transparent)` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}