import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideIn: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};
