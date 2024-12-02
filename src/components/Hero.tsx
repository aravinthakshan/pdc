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
      className="h-screen flex items-center justify-center bg-[#F4F4F4] text-black"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#000000]"
          variants={fadeInUp}
        >
          Product Development Centre
          {/* <span className="block text-[#d67520] mt-2">Empowering Students</span> */}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#6B7280]"
          variants={fadeInUp}
        >
          An initiative by Computer Science and Engineering Department, with
          clear focus on students' learning and skill development through
          hands-on product creation under faculty mentorship, aligned with
          industry standards and technological advancements.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
            className="bg-[#d67520] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#A55800] transition-colors inline-block"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
