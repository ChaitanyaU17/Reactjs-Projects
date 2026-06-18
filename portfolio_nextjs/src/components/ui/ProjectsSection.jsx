"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: "CG Multiplex",
    image: "/CGMultiplex thumbnail.png",
    description:
      "CGMultiplex is a comprehensive movie-related web application built with React, Redux, and Tailwind CSS. It provides detailed information about movies, TV shows, and entertainment industry professionals.",
    tags: ["React", "Redux", "Tailwind CSS"],
    liveDemo: "https://chipper-zuccutto-af5cce.netlify.app/",
    github: "https://github.com/ChaitanyaU17/MovieApp",
  },
  {
    id: 2,
    title: "TrainWise",
    image: "/trainwise thumbnail.png",
    description:
      "TrainWise is a MERN stack-based fitness trainer appointment booking platform featuring user authentication, appointment booking, profile management, and online payments.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://train-wise-fitness-appointment-app-yzjx.vercel.app/",
    github: "https://github.com/ChaitanyaU17/TrainWise-fitness-appointment-app",
  },
  {
    id: 3,
    title: "Foodie Restaurant Management",
    image: "/foodie thumbnail.png",
    description:
      "Foodie is a front-end clone of Swiggy built with React, Redux, and Tailwind CSS. It features API calls for fetching real-time menus, state management for cart operations, and a responsive UI.",
    tags: ["React", "Redux", "Tailwind CSS", "REST API"],
    liveDemo: "https://shimmering-griffin-9ad94c.netlify.app/",
    github: "https://github.com/ChaitanyaU17/Foodie_Restaurant-App",
  },
  {
    id: 4,
    title: "Air-Aware Weather Update",
    image: "/wheather thumbnail.png",
    description:
      "Air-Aware is a real-time weather and AQI tracking app offering weather updates, pollution protection tips, and environmental health education built with React.",
    tags: ["React", "REST API", "Tailwind CSS"],
    liveDemo: "https://reactjs-projects-gold.vercel.app/",
    github: "https://github.com/ChaitanyaU17/Reactjs-Projects",
  },
  {
    id: 5,
    title: "Result Management System",
    image: "/reusultmanagement thumbnail.png",
    description:
      "MERN stack-based Result Management System that simplifies student result tracking. Admins can upload and update results while students securely access their performance data.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://resultmanagement.netlify.app/",
    github:
      "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Result-Management",
  },
  {
    id: 6,
    title: "Joblia – Job Listing Portal",
    image: "/job portal thumbnail.png",
    description:
      "Joblia connects job seekers and recruiters. Users can search and apply for jobs, manage applications, and track status. Includes authentication, filtering, and employer dashboard.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    liveDemo: "https://warm-churros-ee1a88.netlify.app/",
    github:
      "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Job-Listing-Portal",
  },
  {
    id: 7,
    title: "Generics Ecommerce Website",
    image: "/ecommerce thumbnail.png",
    description:
      "React-based e-commerce app with Firebase authentication, dynamic routing, cart management, and profile features ensuring secure user access and optimized shopping experience.",
    tags: ["React", "Firebase", "Redux"],
    liveDemo: "https://sharpner-frontend-react-gx86.vercel.app/user-auth",
    github:
      "https://github.com/ChaitanyaU17/Sharpner_Frontend_React/tree/main/EcommerceProject",
  },
  {
    id: 8,
    title: "YouTube 2.0",
    image: "/youtube thumbnail.png",
    description:
      "A YouTube clone with dynamic search suggestions, live API fetching, real-time chat, and nested comments for an enhanced video streaming experience.",
    tags: ["React", "Redux", "Tailwind CSS", "REST API"],
    liveDemo: "https://youtube-clone-brown-psi.vercel.app/",
    github: "https://github.com/ChaitanyaU17/Youtube_2.0",
  },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Touch refs
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Mouse drag refs for thumbnail strip
  const scrollRef = useRef(null);
  const dragStartX = useRef(null);
  const dragScrollLeft = useRef(0);
  const isDragging = useRef(false);

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

  // ── Native touch handlers ──
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = Math.abs(touchStartY.current - e.changedTouches[0].clientY);

    // Only trigger if horizontal swipe is dominant
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > deltaY) {
      paginate(deltaX > 0 ? 1 : -1);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── Thumbnail strip mouse drag ──
  const onMouseDown = (e) => {
    isDragging.current = false;
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (dragStartX.current === null) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - dragStartX.current;
    if (Math.abs(walk) > 5) isDragging.current = true;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const onMouseUp = () => {
    dragStartX.current = null;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 260 : -260,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir > 0 ? -260 : 260,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.28, ease: "easeIn" },
    }),
  };

  const project = projects[current];

  return (
    <div className="space-y-4 w-full">
      {/* Main Card */}
      <div
        className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-lg w-full"
        // Touch events on the card
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
            className="w-full"
          >
            {/* Image */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

              {/* Counter */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                {current + 1} / {projects.length}
              </div>

              {/* Mobile swipe hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:hidden flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs whitespace-nowrap">
                ← swipe to explore →
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <RiLiveFill className="w-4 h-4" />
                  Live Demo
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop arrows only */}
        <button
          onClick={() => paginate(-1)}
          className="hidden sm:flex absolute left-3 top-28 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
        >
          <FaChevronLeft className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="hidden sm:flex absolute right-3 top-28 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md items-center justify-center text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
        >
          <FaChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-6 h-2 bg-gradient-to-r from-rose-600 to-indigo-600"
                : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="flex gap-2 overflow-x-auto pb-1 cursor-grab select-none w-full"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {projects.map((proj, index) => (
          <button
            key={proj.id}
            onClick={() => {
              if (!isDragging.current) goTo(index);
            }}
            className={`relative flex-shrink-0 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === current
                ? "border-indigo-500 scale-105 shadow-md opacity-100"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
            style={{ width: "88px" }}
          >
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              className="object-cover pointer-events-none"
            />
          </button>
        ))}
      </div>
    </div>
  );
}