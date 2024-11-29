import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "../utils/animations";

const Hero = () => {
  const scrollToSection = useCallback((href: string) => {
    const section = document.querySelector(href);
    if (section) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-[#F4F4F4] text-black relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BKG.png" // Path to image in the public folder
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#000000]"
          variants={fadeInUp}
        >
          Product Development Centre
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#6B7280]"
          variants={fadeInUp}
        >
          An initiative focused on students' learning and skill development
          through hands-on product creation. Opportunity to work on real-time
          projects under faculty mentorship, aligned with industry standards and
          technological advancements.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
            className="bg-[#d67520] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#FF7A33] transition-colors inline-block"
            aria-label="Learn more about Product Development Centre"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
