import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, slideIn } from "../utils/animations";

interface MenuItem {
  href: string;
  label: string;
  isButton?: boolean;
}

const menuItems: MenuItem[] = [
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#benefits", label: "Benefits" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#contact", label: "Contact Us" },
  {
    href: "https://docs.google.com/forms/d/1MllTwj8JtS2yDV8dERSx9-iQakt_pFQ483qYHoIS6rU/viewform?edit_requested=true",
    label: "Apply Now",
    isButton: true,
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
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
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/ManipalLogo.jpg"
              alt="PDC Logo"
              className="h-10 w-auto max-h-10 max-w-full rounded-lg"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (!item.isButton) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
                target={item.isButton ? "_blank" : undefined}
                rel={item.isButton ? "noopener noreferrer" : undefined}
                className={`text-gray-600 hover:text-[#CF7500] transition-colors text-sm ${
                  item.isButton
                    ? "bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800]"
                    : ""
                }`}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 focus:outline-none"
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
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
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      if (!item.isButton) {
                        e.preventDefault();
                        scrollToSection(item.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    target={item.isButton ? "_blank" : undefined}
                    rel={item.isButton ? "noopener noreferrer" : undefined}
                    className={`text-gray-600 hover:text-[#CF7500] transition-colors text-sm ${
                      item.isButton
                        ? "bg-[#CF7500] text-white px-4 py-2 rounded-full hover:bg-[#A55800] w-full text-center mx-4"
                        : "w-full text-center"
                    }`}
                    variants={slideIn}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
