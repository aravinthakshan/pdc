import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
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
  );
};

export default Footer;
