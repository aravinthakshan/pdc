import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "../utils/animations";

const CTA = () => {
  return (
    <motion.div
      className="bg-[#CF7500] py-4 sm:py-5 text-center"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-1 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 sm:mb-6"
          variants={fadeInUp}
        >
          Join the Product Development Centre
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-white mb-4 sm:mb-5"
          variants={fadeInUp}
        >
          Transform your learning experience with real-world projects
        </motion.p>
        <motion.a
          href="https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true"
          target="_blank"
          className="bg-white text-[#CF7500] px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FFF4E6] transition-colors inline-block"
          variants={fadeInUp}
        >
          Apply Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CTA;
