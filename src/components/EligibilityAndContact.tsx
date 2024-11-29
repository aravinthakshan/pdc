import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/animations";
import {
  CheckBadgeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const EligibilityAndContact = () => {
  return (
    <motion.div
      id="eligibility"
      className="py-16 bg-[#F4F4F4]"
      initial="initial"
      animate="animate"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            variants={slideIn}
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

          <motion.div
            id="contact"
            className="bg-white rounded-xl shadow-md p-6 sm:p-8"
            variants={slideIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <div className="space-y-6">
              <div className="space-y-4">
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
                        href="mailto:Kishore.b@manipal.edu"
                        className="text-gray-600 hover:text-[#CF7500] block"
                      >
                        Kishore.b@manipal.edu
                      </a>
                      <a
                        href="mailto:rani.panicker@manipal.edu"
                        className="text-gray-600 hover:text-[#CF7500] block"
                      >
                        rani.panicker@manipal.edu
                      </a>
                    </div>
                  </div>
                </div>

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

                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-[#CF7500] flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-gray-900">
                      Location
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Department of Computer Science & Engineering, MIT,
                      Manipal, Karnataka 576104
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EligibilityAndContact;
