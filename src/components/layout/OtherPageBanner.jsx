import { motion } from "framer-motion";

const OtherPageBanner = ({ title }) => {
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
  return (
    <section className="flex items-center justify-center h-[300px] bg-black px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl h-full flex items-center justify-center flex-col gap-6"
      >
        {/* Animated Title */}
        <motion.h1
          variants={blurTitleVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug sm:leading-tight text-white flex items-center justify-center flex-col gap-6 text-center h-full"
        >
          {title}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default OtherPageBanner;
