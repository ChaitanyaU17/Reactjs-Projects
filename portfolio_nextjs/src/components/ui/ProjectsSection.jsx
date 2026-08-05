"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TrainWise",
    image: "/trainwise thumbnail.png",
    description: "A MERN stack-based fitness trainer appointment booking platform featuring user authentication, appointment booking, profile management, and online payments.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://train-wise-fitness-appointment-app-yzjx.vercel.app/",
    github: "https://github.com/ChaitanyaU17/TrainWise-fitness-appointment-app",
    accentColor: "#37D67A",
  },
  {
    id: 2,
    title: "Workflow X",
    image: "/workflowx.png",
    description: "An automated consumer onboarding workflow platform featuring a visual drag-and-drop designer, role-based access controls, dynamic form building, and robust client-side schemas using Yup validation.",
    tags: ["React", "Node.js", "TypeScript", "Material UI"],
    liveDemo: "https://workflow-x274.onrender.com/",
    github: "https://github.com/ChaitanyaU17/workflow.git",
    accentColor: "#2563EB",
  },
  {
    id: 3,
    title: "CG Multiplex",
    image: "/CGMultiplex thumbnail.png",
    description: "A comprehensive movie-related web application built with React, Redux, and Tailwind CSS. Provides detailed information about movies, TV shows, and entertainment industry professionals.",
    tags: ["React", "Redux", "Tailwind CSS"],
    liveDemo: "https://cgmultiplex.onrender.com",
    github: "https://github.com/ChaitanyaU17/MovieApp",
    accentColor: "#FF6B6B",
  },
  {
    id: 4,
    title: "Foodie Restaurant",
    image: "/foodie thumbnail.png",
    description: "A front-end clone of Swiggy built with React, Redux, and Tailwind CSS. Features API calls for fetching real-time menus, state management for cart operations, and a responsive UI.",
    tags: ["React", "Redux", "Tailwind CSS", "REST API"],
    liveDemo: "https://shimmering-griffin-9ad94c.netlify.app/",
    github: "https://github.com/ChaitanyaU17/Foodie_Restaurant-App",
    accentColor: "#FF9439",
  },
  {
    id: 5,
    title: "Air-Aware Weather",
    image: "/wheather thumbnail.png",
    description: "A real-time weather and AQI tracking app offering weather updates, pollution protection tips, and environmental health education built with React.",
    tags: ["React", "REST API", "Tailwind CSS"],
    liveDemo: "https://reactjs-projects-gold.vercel.app/",
    github: "https://github.com/ChaitanyaU17/Reactjs-Projects",
    accentColor: "#15C2C5",
  },
  {
    id: 6,
    title: "Result Management",
    image: "/reusultmanagement thumbnail.png",
    description: "A MERN stack-based Result Management System that simplifies student result tracking. Admins can upload and update results while students securely access their performance data.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://resultmanagement.netlify.app/",
    github: "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Result-Management",
    accentColor: "#845EF7",
  },
  {
    id: 7,
    title: "Joblia – Job Portal",
    image: "/job portal thumbnail.png",
    description: "Joblia connects job seekers and recruiters. Users can search and apply for jobs, manage applications, and track status. Includes authentication, filtering, and employer dashboard.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://warm-churros-ee1a88.netlify.app/",
    github: "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Job-Listing-Portal",
    accentColor: "#E64980",
  },
  {
    id: 8,
    title: "Ecommerce Website",
    image: "/ecommerce thumbnail.png",
    description: "React-based e-commerce app with Firebase authentication, dynamic routing, cart management, and profile features ensuring secure user access and optimized shopping experience.",
    tags: ["React", "Firebase", "Redux"],
    liveDemo: "https://sharpner-frontend-react-gx86.vercel.app/user-auth",
    github: "https://github.com/ChaitanyaU17/Sharpner_Frontend_React/tree/main/EcommerceProject",
    accentColor: "#FF9439",
  },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1
        ? prev === projects.length - 1 ? 0 : prev + 1
        : prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > deltaY) {
      paginate(deltaX > 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } }),
  };

  const project = projects[current];

  return (
    <section className="py-2 space-y-6">
      <div
        className="relative overflow-hidden rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
          >
            <div
              className="absolute -inset-1 rounded-3xl opacity-30 blur-xl hidden dark:block"
              style={{ background: `linear-gradient(135deg, ${project.accentColor}40, transparent, ${project.accentColor}20)` }}
            />

            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-gradient-to-br dark:from-gray-900/95 dark:to-gray-950/98 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-2xl">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 hover:scale-110" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                <div
                  className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md text-sm font-bold border border-white/20 text-white"
                  style={{ background: `${project.accentColor}40` }}
                >
                  {current + 1} / {projects.length}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md text-xs text-gray-300 border border-white/20">
                  <Zap className="w-3 h-3" />
                  Swipe to explore
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                      style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30`, color: project.accentColor }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <Link href={project.liveDemo} target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 text-white"
                    style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}CC)` }}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                  <Link href={project.github} target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </div>
              </div>

              <div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-tl-full opacity-20"
                style={{ background: `radial-gradient(circle at bottom right, ${project.accentColor}60, transparent)` }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full hidden sm:flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-lg text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full hidden sm:flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-lg text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 flex-wrap">
        {projects.map((_, index) => (
          <button key={index} onClick={() => goTo(index)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: index === current ? "2rem" : "0.5rem",
              background: index === current
                ? `linear-gradient(90deg, ${projects[index].accentColor}, ${projects[index].accentColor}80)`
                : "#D1D5DB",
            }}
          />
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {projects.map((proj, index) => (
          <button key={proj.id} onClick={() => goTo(index)}
            className="relative flex-shrink-0 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300"
            style={{
              width: "100px",
              borderColor: index === current ? proj.accentColor : "#E5E7EB",
              transform: index === current ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Image src={proj.image} alt={proj.title} fill className="object-cover" />
            {index === current && (
              <div className="absolute inset-0 opacity-30" style={{ backgroundColor: proj.accentColor }} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}