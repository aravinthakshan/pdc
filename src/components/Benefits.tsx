import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../utils/animations";
import {
  RocketLaunchIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  UsersIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

const benefits = [
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
      "On Completion, Students will get experience certificate useful for their summer internships. Projects can be considered as part of their ITR*",
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
];

const Benefits = () => {
  return (
    <motion.div
      id="benefits"
      className="py-16 bg-[#F4F4F4]"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
          variants={fadeIn}
        >
          Key Benefits
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerChildren}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              variants={fadeIn}
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Benefits;
