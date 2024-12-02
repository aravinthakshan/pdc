import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/animations";

const projects = [
  {
    title: "Faculty Management System",
    description:
      "Streamlined administrative tool for comprehensive faculty data management.",
    image: "./Faculty.png",
    technologies: ["ReactJS", "Node.js", "MongoDB"],
  },
  {
    title: "Student AI Chatbot Support",
    description:
      "AI-powered support system to assist students with real-time queries.",
    image: "/Messaging.png",
    technologies: ["GenAI", "Python", "Langchain"],
  },
  {
    title: "Automated Student Attendance System",
    description:
      "Automated attendance tracking using advanced AI technologies.",
    image: "/Attendance.png",
    technologies: ["Python", "React", "Django"],
  },
];

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="py-16 bg-[#F4F4F4]"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-9">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
          variants={fadeIn}
        >
          Upcoming Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 text-xs sm:text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
