import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#benefits", label: "Benefits" },
    { href: "https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true", label: "Apply Now", isButton: true },
  ];

  return (
    <motion.div 
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md"  // Set background-color to white
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/Manipal.png" 
              alt="PDC Logo" 
              className="h-10 w-auto rounded-lg"
            />
            <div className="text-xl font-medium tracking-wide text-gray-800">
              PDC, MIT Manipal
            </div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.isButton ? "_blank" : undefined}
                className={`text-gray-600 hover:text-[#CF7500] transition-colors ${
                  item.isButton
                    ? "bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.isButton ? "_blank" : undefined}
                    className={`text-gray-600 hover:text-[#CF7500] transition-colors ${
                      item.isButton
                        ? "bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800] w-full text-center"
                        : ""
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}