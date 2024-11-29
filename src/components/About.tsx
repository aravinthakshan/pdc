import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/animations";
{
  /* About Section */
}
const About = () => {
  return (
    <motion.div
      id="about"
      className="py-16 bg-[#efefef]"
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
            <p className="text-lg text-gray-700 mb-4 text-justify">
              <strong>
                The Department of Computer Science & Engineering (CSE)
              </strong>{" "}
              was established in 1985. Over the years, the department has
              developed to become a Centre of excellence, providing in-depth
              technical knowledge and opportunities for innovation and research.
            </p>

            <p className="text-lg text-gray-700 mb-4 text-justify">
              <strong>Vision:</strong> Excellence in Computer Science &
              Engineering education through continuous learning, research, and
              teamwork.
            </p>

            <p className="text-lg text-gray-700 mb-4 text-justify">
              <strong>Mission:</strong> To impart excellent Computer Science &
              Engineering education for professional roles in a changing and
              challenging technological world, to advance knowledge through
              quality research in important emerging areas in the discipline,
              and to build a strong relationship with industry, academia, and
              society.
            </p>

            <p className="text-lg text-gray-700 mb-4 text-justify">
              Aligned with our department's vision, we have formed a faculty
              team to enhance student growth through cutting-edge technologies
              and mentorship, transforming innovative ideas into impactful
              products.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
