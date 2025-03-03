import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/128/3291/3291670.png",
    title: "HTML5",
    description: "Expertise",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/128/16845/16845736.png",
    title: "CSS3",
    description: "Expertise",
  },
  {
    id: 3,
    src: "https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000",
    title: "Tailwind",
    description: "Proficient",
  },
  {
    id: 4,
    src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    title: "Javascript",
    description: "Proficient",
  },
  {
    id: 5,
    src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
    title: "Reactjs",
    description: "Proficient",
  },
  {
    id: 6,
    src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    title: "Node Js",
    description: "Intermediate ",
  },
  {
    id: 7,
    src: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    title: "Express Js",
    description: "Intermediate ",
  },
  {
    id: 8,
    src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    title: "MongoDB",
    description: "Intermediate ",
  },
  {
    id: 9,
    src: "https://img.icons8.com/?size=96&id=jD-fJzVguBmw&format=png",
    title: "Redux",
    description: "Proficient",
  },
  {
    id: 10,
    src: "https://img.icons8.com/?size=128&id=55497&format=png",
    title: "Rest API",
    description: "Proficient",
  },
  {
    id: 11,
    src: "https://img.icons8.com/?size=96&id=62452&format=png",
    title: "Firebase",
    description: "Proficient",
  },
  {
    id: 12,
    src: "https://img.icons8.com/?size=128&id=FRRACRKRsw2s&format=png",
    title: "Java DSA",
    description: "DSA and OOP's concept",
  },
];

export default function Skills() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto text-center">
      {/* <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block mb-8">
        Skills
      </h2> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={skill.src} alt={skill.title} className="w-16 h-16 object-contain" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
