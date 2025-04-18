import React from "react";
import CTAButton from "../ui/CTAButton";
import { motion } from "framer-motion";
import seen from "../../assets/images/seen.png";
import sold from "../../assets/images/sold.png";

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

const floatAnimation = {
  animate: {
    y: [0, -10, 0], // floating effect
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
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
          Your Brand Deserves to Be{" "}
          <span className="relative inline-block">
            Seen{" "}
            <motion.img
              src={seen}
              alt="seen"
              className="absolute w-16 sm:w-20 md:w-24 h-auto -right-0 -top-10 -z-[1] -rotate-[20deg]"
              {...floatAnimation}
            />
          </span>{" "}
          and{" "}
          <span className="relative inline-block">
            Sold{" "}
            <motion.img
              src={sold}
              alt="sold"
              className="absolute w-14 sm:w-16 md:w-20 h-auto -right-12 sm:-right-14 top-0 -z-[1] rotate-[37deg]"
              {...floatAnimation}
            />
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h5
          variants={fadeUpVariant}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700"
        >
          We’re an AI-driven digital marketing agency.
        </motion.h5>

        {/* CTA Button */}
        <motion.div variants={fadeUpVariant}>
          <CTAButton timing={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
