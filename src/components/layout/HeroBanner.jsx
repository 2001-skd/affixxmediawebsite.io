import React from "react";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const blurTitleVariant = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroBanner = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl flex items-center justify-center flex-col gap-6 text-center"
      >
        {/* Animated Title */}
        <motion.h1
          variants={blurTitleVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug sm:leading-tight"
        >
          Your Brand Deserves to Be <span className="violet_bg">Seen</span> and{" "}
          <span className="green_bg">Sold</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h5
          variants={fadeUpVariant}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700"
        >
          We’re the digital marketing team that brings{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            bold ideas
          </span>
          ,{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            smart execution
          </span>
          , and{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            proven growth strategies
          </span>{" "}
          under one roof.
        </motion.h5>

        {/* Animated Button */}
        <motion.div variants={fadeUpVariant}>
          <CTAButton timing={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
