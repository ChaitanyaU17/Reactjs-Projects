"use client";

import { useState } from "react";
import { FiEye, FiX } from "react-icons/fi";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import ContactMe from "@/components/ui/Contact";
import Skills from "@/components/ui/skills";
import Experience from "@/components/ui/Experience";
import ProjectsSection from "@/components/ui/ProjectsSection";
import Education from "@/components/ui/Education";

export default function Home() {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 overflow-x-hidden">
      <div className="mx-auto max-w-4xl px-4 py-10 overflow-x-hidden">

        <AnimatePresence>
          {showProfileModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProfileModal(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-sm w-full"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Chaitanya Umbarkar"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.header
          id="home"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="relative group w-28 h-28 shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Profile Picture"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => setShowProfileModal(true)}
              className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <FiEye className="w-5 h-5 text-white" />
            </button>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-16">
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                  Chaitanya Umbarkar
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Full Stack Developer
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Work
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Pune, Maharashtra
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 hidden sm:block" />
                <a
                  href="mailto:chaitanyaumbarkar2002@gmail.com"
                  className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  chaitanyaumbarkar2002@gmail.com
                </a>
              </div>

              <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                  I build things that work — and work well.
                </h2>
                <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl leading-relaxed">
                  FullStack Developer with hands-on experience in the MERN stack, currently shipping production grade features at{" "}
                  <span className="text-gray-900 dark:text-white font-medium">Nandhar Technologies</span>.
                  I dont just write code I architect solutions that are fast, scalable, and built to last.
                </p>
                <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl leading-relaxed">
                  From pixel perfect UIs to robust REST APIs, I have delivered across the full stack.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105"
                >
                  <Link href="https://drive.google.com/file/d/1anhvtp1Uelq-MEzgRu_IQ3rrsFW3jWz0/view?usp=drive_link" target="_blank">
                    Resume
                  </Link>
                </Button>
                <Link href="https://github.com/ChaitanyaU17" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/chaitanya-umbarkar/" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/CUmbarkar" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <FaSquareXTwitter className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </section>

          <motion.section
            id="expertise"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              My Expertise
            </h2>
            <Skills />
          </motion.section>

          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <Experience />
          </motion.section>

          <motion.section
            id="education"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>
            <Education />
          </motion.section>

          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <ProjectsSection />
          </motion.section>

          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Contact Me
            </h2>
            <ContactMe />
          </motion.section>
        </main>

        <footer className="text-center text-gray-500 py-8 text-sm">
          © {new Date().getFullYear()} Chaitanya Umbarkar. All rights reserved.
        </footer>
      </div>
    </div>
  );
}