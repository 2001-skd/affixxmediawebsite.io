import React from "react";
import SectionHeading from "../ui/SectionHeading";
// import aboutImg from "../../assets/gamright.webp";
// import Card from "../ui/Card";
import { motion } from "framer-motion";
import StepCard from "../ui/StepCard";
import { onBoardsteps } from "../../data/onBoardSteps";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const OnBoardSection = () => {
  const isOdd = onBoardsteps.length % 2 !== 0;

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10">
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
        className="flex flex-wrap gap-4 justify-center"
      >
        {onBoardsteps.map((step, index) => (
          <StepCard
            key={index}
            id={step.id}
            title={step.title}
            description={step.description}
            index={index}
            isLastOdd={isOdd}
            imgSrc={step.image}
            onBoard={true}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default OnBoardSection;
