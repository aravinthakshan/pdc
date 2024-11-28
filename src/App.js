import React, { useState, useEffect } from 'react';
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
  FolderIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';

export default function ManipulLandingPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Working
  const projects = [
    {
      title: "Faculty Management System",
      description: "Streamlined administrative tool for comprehensive faculty data management.",
      image: "./Faculty.png",
      technologies: ["ReactJS", "DBMS", "Kubernetes"],
    },
    {
      title: "Student AI Chatbot Support",
      description: "AI-powered support system to assist students with real-time queries.",
      image: "/Messaging.png",
      technologies: ["GenAI", "Docker", "PostgreSQL"],
    },
    {
      title: "AI Powered Student Attendance System",
      description: "Automated attendance tracking using advanced AI technologies.",
      image: "/Attendance.png",
      technologies: ["Python", "TensorFlow", "React"],
    }
  ];
///* through Practical Technology Projects */
  return (
    <div className="min-h-screen bg-[#F4F4F4] antialiased font-sans">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        className="h-screen flex items-center justify-center bg-gradient-to-br from-[#CF7500] to-[#A55800] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Product Development Centre
            <span className="block text-[#FFD700] mt-2">Empowering Student Innovation </span> 
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            An initiative by the Department of Computer Science & Engineering, MIT Manipal to enhance student learning through hands-on product creation.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#about"
              className="bg-white text-[#CF7500] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFD700] transition-colors inline-block"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        id="about" 
        className="py-24 bg-white"
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
              <p className="text-lg text-gray-700 mb-4">
                The <strong>Product Development Centre</strong> (PDC) is an initiative by the 
                <strong> Department of Computer Science & Engineering of MIT Manipal</strong> <br></br> it offers opportunities to work on real-time projects 
                under faculty mentorship, aligned with industry standards and technological advancements.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                To foster an environment where students are introduced to cutting-edge technology platforms and tools, 
                focusing on skill development by guiding them to shape their innovative ideas into viable and impactful products.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Key Benefits Section */}
      <motion.div 
        id="benefits" 
        className="bg-[#F4F4F4] py-24"
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
            Key Benefits
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: RocketLaunchIcon, title: "Real-world Experience", description: "Gain hands-on experience in full-stack development and project management methodologies." },
              { icon: CheckBadgeIcon, title: "Industry-Relevant Skills", description: "Develop industry relevant skills in building modern technologies." },
              { icon: AcademicCapIcon, title: "Professional Recognition", description: "On Completion, Students will get experience certificate useful for their summer internships. (Projects can be considered as part of their ITR*)" },
              { icon: DocumentTextIcon, title: "Recommendation Letters", description: "Receive experience certificates and potential letters of recommendation, from the CSE department on successful completion*" },
              { icon: UsersIcon, title: "Connections", description: "Regular connect with Industry experts and opportunity to participate in workshops." },
              { icon: FolderIcon , title: "Projects", description: "Build a protfolio project to add to your resume, students from final year who wish to do a project for their 8th sem, can contact us as well." },
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 mx-auto text-[#CF7500] mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tech Stacks Section */}
      <motion.div 
        id="tech-stack" 
        className="bg-white py-24"
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
            Tech Stacks
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: CodeBracketIcon, title: "Languages", description: "JavaScript, TypeScript" },
              { icon: DevicePhoneMobileIcon, title: "Front-End", description: "ReactJS, React Native" },
              { icon: ServerIcon, title: "Back-End", description: "Spring Boot, Microservices, DDD" },
              { icon: TableCellsIcon, title: "Database", description: "PostgreSQL" },
              { icon: Cog6ToothIcon, title: "DevOps", description: "Jenkins, Docker, Kubernetes" },
              { icon: WrenchScrewdriverIcon, title: "Additional Tools", description: "Figma, Git, VS Code, Postman" },
            ].map((stack, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stack.icon className="w-14 h-14 text-[#CF7500] mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{stack.title}</h3>
                <p className="text-gray-600">{stack.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        id="projects" 
        className="py-24 bg-white"
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
            Upcoming Projects
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="bg-[#F4F4F4] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
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

  {/* Eligibility and Contact Section */}
  <motion.div 
    className="py-24 bg-gradient-to-b [#F4F4F4]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.8 } }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Eligibility Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-8"  // Added box styles
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
          <ul className="space-y-4 text-gray-700">
            {[
              "Open to B.Tech students from 4th, 6th, and 8th Semesters, no backlogs.",
              "Familiarity with HTML, CSS, and JavaScript, basic understanding of Java and OOP concepts.",
              "Willingness to learn and adapt to new technologies, frameworks and dedicate sufficient time.",
              "Good communication skills and the ability to work effectively in a team environment.",
            ].map((criterion, index) => (
              <li key={index} className="flex items-start">
                <CheckBadgeIcon className="w-6 h-6 text-[#CF7500] mr-3 mt-1 flex-shrink-0" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
          {/* <motion.img 
            src="/eligibility.jpg" 
            alt="Eligibility" 
            className="mt-8 rounded-lg shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          /> */}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-8"  // Added box styles
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="space-y-6">
            {[
              { icon: EnvelopeIcon, title: "Email", content: "manoj.r@manipal.edu", href: "mailto:manoj.r@manipal.edu" },
              { icon: PhoneIcon, title: "Mobile", content: "+91 9740288939", href: "tel:+919740288939" },
              { icon: MapPinIcon, title: "Location", content: "Manipal Institute of Technology, Manipal, Karnataka 576104" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <item.icon className="w-8 h-8 text-[#CF7500] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-600 hover:text-[#CF7500] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* <motion.img 
            src="/contact.jpg" 
            alt="Contact" 
            className="mt-8 rounded-lg shadow-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          /> */}
        </motion.div>
      </div>
    </div>
  </motion.div>

      {/* Contact CTA */}
      <motion.div 
        className="bg-[#CF7500] py-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Join the Product Development Centre
        </motion.h2>
        <motion.p 
          className="text-white text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your learning experience with real-world projects
        </motion.p>
        <motion.a 
          href="https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true" 
          target="_blank"
          className="bg-white text-[#CF7500] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#FFF4E6] transition-colors inline-block"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Apply Now
        </motion.a>
      </motion.div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>© 2024 Department of Computer Science & Engineering, MIT Manipal</p>
        <p className="text-sm text-gray-400 mt-2">*Conditions Apply</p>
      </footer>
    </div>
  );
}

