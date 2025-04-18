import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import { onBoardsteps } from "../../data/onBoardSteps";

const fadeUpVariant = {
  hidden: { opacity: 1, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OnBoardSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-20">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          heading="How We Onboard You"
          subHeading="Getting Started"
        />
      </motion.div>

      {/* <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card content={content} imageSrc={aboutImg} />
      </motion.div> */}

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-4 justify-center w-[100%]"
      >
        {onBoardsteps.map((step, index) => (
          <Card
            key={index}
            imageSrc={step.image}
            title={step.title}
            content={step.description}
            reverse={step.reverse}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default OnBoardSection;
