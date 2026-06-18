"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
    borderColor: "border-rose-200 dark:border-rose-800",
    skills: [
      {
        src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        title: "JavaScript",
      },
      {
        src: "https://img.icons8.com/?size=128&id=FRRACRKRsw2s&format=png",
        title: "Java",
      },
      {
        src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        title: "TypeScript",
      },
    ],
  },
  {
    category: "Frontend",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    skills: [
      {
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
        title: "React.js",
      },
      {
        src: "https://img.icons8.com/?size=96&id=jD-fJzVguBmw&format=png",
        title: "Redux",
      },
      {
        src: "https://cdn-icons-png.flaticon.com/128/3291/3291670.png",
        title: "HTML",
      },
      {
        src: "https://cdn-icons-png.flaticon.com/128/16845/16845736.png",
        title: "CSS",
      },
      {
        src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
        title: "Tailwind CSS",
      },
      {
        src: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        title: "Material UI",
      },
    ],
  },
  {
    category: "Backend",
    color: "from-sky-500 to-cyan-500",
    bgColor: "bg-sky-50 dark:bg-sky-950/20",
    borderColor: "border-sky-200 dark:border-sky-800",
    skills: [
      {
        src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
        title: "Node.js",
      },
      {
        src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
        title: "Express.js",
      },
      {
        src: "https://img.icons8.com/?size=128&id=55497&format=png",
        title: "REST APIs",
      },
    ],
  },
  {
    category: "Database",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    skills: [
      {
        src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        title: "MongoDB",
      },
      {
        src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
        title: "MySQL",
      },
      {
        src: "https://img.icons8.com/?size=100&id=59952&format=png&color=000000",
        title: "SQL",
      },
      {
        src: "https://img.icons8.com/?size=96&id=62452&format=png",
        title: "Firebase",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      {
        src: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
        title: "Git",
      },
      {
        src: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
        title: "GitHub",
      },
      {
        src: "https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000",
        title: "Postman",
      },
      {
        src: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
        title: "AWS",
      },
      {
        src: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
        title: "Cloudinary",
      },
    ],
  },
  {
    category: "Core Concepts",
    color: "from-purple-500 to-fuchsia-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      {
        src: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        title: "Authentication",
      },
      {
        src: "https://img.icons8.com/?size=100&id=103461&format=png&color=000000",
        title: "CRUD Operations",
      },
      {
        src: "https://img.icons8.com/?size=100&id=55497&format=png",
        title: "API Integration",
      }
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section className="py-4 space-y-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4"
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.category}
            variants={cardVariants}
            className={`rounded-xl border ${cat.borderColor} ${cat.bgColor} p-5`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className={`h-1 w-6 rounded-full bg-gradient-to-r ${cat.color}`}
              />
              <h3
                className={`text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
              >
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 w-full">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.title}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-default max-w-full"
                >
                  <img
                    src={skill.src}
                    alt={skill.title}
                    className="w-5 h-5 object-contain shrink-0"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}