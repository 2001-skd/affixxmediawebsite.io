import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHideLoader(true), 4500);
    return () => clearTimeout(hideTimer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Delay between Affixx and Media
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999] text-white"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          <motion.div className="flex gap-4 text-5xl sm:text-6xl md:text-7xl font-bold">
            <motion.span variants={wordVariants}>Affixx</motion.span>
            <motion.span variants={wordVariants}>Media</motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
