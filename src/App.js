import React, { useState } from "react";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
  UsersIcon,
  DocumentTextIcon,
  ServerIcon,
  TableCellsIcon,
  DevicePhoneMobileIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Header from "./components/Header";

export default function ManipulLandingPage() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Faculty Management System",
      description:
        "Streamlined administrative tool for comprehensive faculty data management.",
      image: "./Faculty.png",
      technologies: ["ReactJS", "DBMS", "Kubernetes"],
    },
    {
      title: "Student AI Chatbot Support",
      description:
        "AI-powered support system to assist students with real-time queries.",
      image: "/Messaging.png",
      technologies: ["GenAI", "Docker", "PostgreSQL"],
    },
    {
      title: "AI Powered Student Attendance System",
      description:
        "Automated attendance tracking using advanced AI technologies.",
      image: "/Attendance.png",
      technologies: ["Python", "TensorFlow", "React"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4] antialiased font-sans">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="h-screen flex items-center justify-center bg-[#F4F4F4] text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#000000]" // Dark Blue
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Product Development Centre
            <span className="block text-[#d67520] mt-2">
              Empowering Students
            </span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#6B7280]" // Light Gray for description
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            An initiative by the Department of Computer Science & Engineering,
            MIT Manipal to enhance student learning through hands-on product
            creation.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#about"
              className="bg-[#d67520] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FF7A33] transition-colors inline-block"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <motion.div
              className="md:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/Building.jpg"
                alt="About Image"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 mt-8 md:mt-0"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-700 mb-4 text-center">
                <strong>
                  The Department of Computer Science & Engineering (CSE)
                </strong>{" "}
                was established in 1985. Over the years, the department has
                developed to become a Centre of excellence, providing in-depth
                technical knowledge and opportunities for innovation and
                research.
              </p>

              <p className="text-lg text-gray-700 mb-4 text-center">
                <strong>Vision:</strong> Excellence in Computer Science &
                Engineering education through continuous learning, research, and
                teamwork.
              </p>

              <p className="text-lg text-gray-700 mb-4 text-center">
                <strong>Mission:</strong> To impart excellent Computer Science &
                Engineering education for professional roles in a changing and
                challenging technological world, to advance knowledge through
                quality research in important emerging areas in the discipline,
                and to build a strong relationship with industry, academia, and
                society.
              </p>

              <p className="text-lg text-gray-700 mb-4 text-center">
                Aligned with our department's vision, we have formed a faculty
                team to enhance student growth through cutting-edge technologies
                and mentorship, transforming innovative ideas into impactful
                products.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        id="benefits"
        className="py-16 bg-[#F4F4F4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Key Benefits
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: RocketLaunchIcon,
                title: "Real-world Experience",
                description:
                  "Gain hands-on experience in full-stack development and project management methodologies.",
              },
              {
                icon: CheckBadgeIcon,
                title: "Industry-Relevant Skills",
                description:
                  "Develop industry relevant skills in building modern technologies.",
              },
              {
                icon: AcademicCapIcon,
                title: "Professional Recognition",
                description:
                  "On Completion, Students will get experience certificate useful for their summer internships. (Projects can be considered as part of their ITR*)",
              },
              {
                icon: DocumentTextIcon,
                title: "Recommendation Letters",
                description:
                  "Receive experience certificates and potential letters of recommendation, from the CSE department on successful completion*",
              },
              {
                icon: UsersIcon,
                title: "Connections",
                description:
                  "Regular connect with Industry experts and opportunity to participate in workshops.",
              },
              {
                icon: FolderIcon,
                title: "Projects",
                description:
                  "Build a protfolio project to add to your resume, students from final year who wish to do a project for their 8th sem, can contact us as well.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#CF7500] mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-9">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#F4F4F4] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                        className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="eligibility"
        className="py-16 bg-[#F4F4F4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility Section */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4 text-sm sm:text-base text-gray-700">
                {[
                  "Open to B.Tech students from 4th, 6th, and 8th Semesters, no backlogs.",
                  "Familiarity with HTML, CSS, and JavaScript, basic understanding of Java and OOP concepts.",
                  "Willingness to learn and adapt to new technologies, frameworks and dedicate sufficient time.",
                  "Good communication skills and the ability to work effectively in a team environment.",
                ].map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <CheckBadgeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#CF7500] mr-3 mt-1 flex-shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-6 sm:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Email Contacts */}
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-[#CF7500] flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">
                        Email
                      </h3>
                      <div className="space-y-1 text-sm sm:text-base">
                        <a
                          href="mailto:manoj.r@manipal.edu"
                          className="text-gray-600 hover:text-[#CF7500] block"
                        >
                          manoj.r@manipal.edu
                        </a>
                        <a
                          href="mailto:mohan.shenoy@manipal.edu"
                          className="text-gray-600 hover:text-[#CF7500] block"
                        >
                          mohan.shenoy@manipal.edu
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Contacts */}
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="w-6 h-6 text-[#CF7500] flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">
                        Phone
                      </h3>
                      <div className="space-y-1 text-sm sm:text-base">
                        <a
                          href="tel:+919740288939"
                          className="text-gray-600 hover:text-[#CF7500] block"
                        >
                          +91 9740288939
                        </a>
                        <a
                          href="tel:+918277109560"
                          className="text-gray-600 hover:text-[#CF7500] block"
                        >
                          +91 8277109560
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-[#CF7500] flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">
                        Location
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Manipal Institute of Technology, Manipal, Karnataka
                        576104
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section - Reduced height */}
      <motion.div
        className="bg-[#CF7500] py-6 sm:py-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-1 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Join the Product Development Centre
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-white mb-6 sm:mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your learning experience with real-world projects
          </motion.p>
          <motion.a
            href="https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true"
            target="_blank"
            className="bg-white text-[#CF7500] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FFF4E6] transition-colors inline-block"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Apply Now
          </motion.a>
        </div>
      </motion.div>

      {/* Footer with Credits */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="max-5-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base">
                © 2024 Department of Computer Science & Engineering, MIT Manipal
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                *Conditions Apply
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs sm:text-sm text-gray-400">
                Website designed by{" "}
                <a
                  href="https://www.linkedin.com/in/aravinthakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CF7500] hover:text-[#A55800] transition-colors"
                >
                  A S Aravinthakshan
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
