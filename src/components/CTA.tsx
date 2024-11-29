import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "../utils/animations";

const CTA = () => {
  return (
    <motion.div
      className="bg-[#CF7500] py-6 sm:py-6 text-center"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-1 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
          variants={fadeInUp}
        >
          Join the Product Development Centre
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-white mb-6 sm:mb-8"
          variants={fadeInUp}
        >
          Transform your learning experience with real-world projects
        </motion.p>
        <motion.a
          href="https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true"
          target="_blank"
          className="bg-white text-[#CF7500] px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FFF4E6] transition-colors inline-block"
          variants={fadeInUp}
        >
          Apply Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CTA;
