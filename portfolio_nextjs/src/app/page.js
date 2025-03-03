"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { RiLiveFill } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactMe from "@/components/ui/Contact";
import Skills from "@/components/ui/skills";

const projects = [
  {
    id: 1,
    title: "CG Multiplex",
    image: "/CGMultiplex thumbnail.png",
    description:
      "CGMultiplex is a comprehensive movie-related web application built with React, Redux, and Tailwind CSS. It provides detailed information about movies, TV shows, and entertainment industry professionals.",
    liveDemo: "https://chipper-zuccutto-af5cce.netlify.app/",
    github: "https://github.com/ChaitanyaU17/MovieApp",
  },
  {
    id: 2,
    title: "TrainWise - Fitness Trainer Appointment Booking Platform",
    image: "/trainwise thumbnail.png",
    description:
      "TrainWise is a MERN stack-based fitness trainer booking platform that allows users to book appointments with personal trainers based on their availability and expertise.",
    liveDemo: "https://train-wise-fitness-appointment-app-yzjx.vercel.app/",
    github: "https://github.com/ChaitanyaU17/TrainWise-fitness-appointment-app",
  },
  {
    id: 3,
    title: "Foodie Restaurant Management Website",
    image: "/foodie thumbnail.png",
    description:
      "Foodie is a restaurant management system that enables users to browse restaurant menus, order food, and track deliveries in real time.",
    liveDemo: "https://shimmering-griffin-9ad94c.netlify.app/",
    github: "https://github.com/ChaitanyaU17/Foodie_Restaurant-App",
  },
  {
    id: 4,
    title: "Air-Aware Real-Time Weather Update",
    image: "/wheather thumbnail.png",
    description:
      "Air-Aware is a real-time weather forecasting web application that provides weather details, air quality index, and climate trends.",
    liveDemo: "https://reactjs-projects-gold.vercel.app/",
    github: "https://github.com/ChaitanyaU17/Reactjs-Projects",
  },
  {
    id: 5,
    title: "Result Management System",
    image: "/reusultmanagement thumbnail.png",
    description:
      "A student result management system that enables administrators to upload student marks and allows students to check their results securely.",
    liveDemo: "https://resultmanagement.netlify.app/",
    github:
      "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Result-Management",
  },
  {
    id: 6,
    title: "Joblia - Job Listing Portal",
    image: "/job portal thumbnail.png",
    description:
      "Joblia is a job listing portal where job seekers can explore job opportunities and apply directly, while recruiters can post job openings.",
    liveDemo: "https://warm-churros-ee1a88.netlify.app/",
    github:
      "https://github.com/ChaitanyaU17/Internship-Projects/tree/main/Job-Listing-Portal",
  },
  {
    id: 7,
    title: "Generics Ecommerce Website",
    image: "/ecommerce thumbnail.png",
    description:
      "An eCommerce platform that allows users to browse products, add them to the cart, and complete purchases securely.",
    liveDemo: "https://sharpner-frontend-react-gx86.vercel.app/user-auth",
    github:
      "https://github.com/ChaitanyaU17/Sharpner_Frontend_React/tree/main/EcommerceProject",
  },
  {
    id: 8,
    title: "YouTube 2.0",
    image: "/youtube thumbnail.png",
    description:
      "A YouTube clone built with React that allows users to search, watch videos, and explore trending content.",
    liveDemo: "https://youtube-clone-brown-psi.vercel.app/",
    github: "https://github.com/ChaitanyaU17/Youtube_2.0",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-4 py-10 "> 
        {/* py-20 */}
        <motion.header
          id="home"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-35 h-35 rounded-full overflow-hidden">
            {/* w-20 h-20 */}
            <Image
              src="/profile.jpeg"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
              alt="Profile Picture"
              width={200}
              height={150}
            />
            {/* width={100} height={100} */}
          </div>

          {/* <nav>
            <ul className="flex space-x-6 text-lg font-medium text-gray-700 dark:text-white">
              {[
                { name: "Home", id: "home" },
                { name: "My Expertise", id: "expertise" },
                { name: "Education", id: "education" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 text-transparent bg-clip-text transition hover:opacity-80 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}

          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Chaitanya Umbarkar
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Web Developer</p>
              <p className="text-gray-600 dark:text-gray-400">
                Sangamner, Ahilya Nagar, Maharashtra
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold ">
                Building Scalable Solutions for tomorrow
              </h2>
              {/* <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl ">
                Expert in MERN Stack with{" "}
                <span className="text-black dark:text-white">React JS</span> and{" "}
                <span className="text-black dark:text-white">Node JS</span>. and
                specialize in designing and implementing large-scale distributed
                systems. and deep expertise in{" "}
                <span className="text-black dark:text-white">
                  MongoDB, MySQL, JAVA
                </span>
                .
              </p> */}

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
                Passionate Web Developer dedicated to crafting seamless,
                user-centric web applications with precision and innovation,
                leveraging the MERN stack to deliver impactful solutions. <br />{" "}
                As a full-stack developer, I&rsquo;ve had the privilege of working on
                the user-facing aspects of projects. I&rsquo;m fueled by a deep
                passion for problem-solving and thrive in collaborative
                environments where I can transform ideas into visually appealing
                and functional interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
                <Link href="https://drive.google.com/file/d/1csDb2_4mwVPiBusDEx29j9siTpJAkWVK/view?usp=drive_link">
                  Resume
                </Link>
              </Button>

              <Link
                href="https://github.com/ChaitanyaU17"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/chaitanya-umbarkar-32347023"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>

              <Link
                href="https://x.com/CUmbarkar"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            id="expertise"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              My Expertise
            </h2>
            <Skills />
          </motion.section>

          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    July 2024, September 2024
                  </p>
                  <p>Web Developer Intern</p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Zidio Development
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I had the privilege of working with an incredible group of 7
                interns, where we tackled two challenging projects:{" "}
                <span className="text-black dark:text-white">
                  a Job Listing Portal
                </span>{" "}
                and{" "}
                <span className="text-black dark:text-white">
                  a Result Management System
                </span>{" "}
                , both built with the MERN stack. We collaborated to plan our
                approach, optimize functionalities, and enhance our applications
                together. The journey was filled with learning, hands-on
                experience, and fantastic support from our mentors, who were
                always there to guide us through problem-solving sessions.
              </p>
            </div>
          </motion.section>

          <motion.section
            id="education"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Education
              </h2>

              <div className="space-y-1.5">
                <p className="font-medium">BE - Information Technology</p>
                <p className="text-blue-600 dark:text-blue-400">
                  Sandip Institute of Technology and Research Center, Nashik
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jun 2019 - July 2023
                </p>
                <p className="font-medium">CGPA: 8.10</p>
              </div>

              <div className="space-y-1.5">
                <p className="font-medium">XII</p>
                <p className="text-blue-600 dark:text-blue-400">
                  DVMH, Savitribai Phule University, Pune
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jun 2018 - Jun 2019
                </p>
                <p className="font-medium">Percent: 66.92</p>
              </div>

              <div className="space-y-1.5">
                <p className="font-medium">X</p>
                <p className="text-blue-600 dark:text-blue-400">
                  DVMH, Savitribai Phule University, Pune
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jun 2016 - Jun 2017
                </p>
                <p className="font-medium">Percent: 76.80</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <Slider {...settings}>
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4"
                      width={800}
                      height={600}
                    />
                    <h3 className="text-xl font-bold text-center">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex items-center space-x-6">
                      <Link
                        href={project.liveDemo}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors mt-2"
                      >
                        <RiLiveFill className="w-5 h-5" />
                        <span>Live Demo</span>
                      </Link>

                      <Link
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors mt-2"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Github Code</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </motion.section>
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactMe />
          </motion.section>
        </main>
        <footer className="text-center text-gray-500 py-4 text-sm">
          © {new Date().getFullYear()} Chaitanya Umbarkar. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
