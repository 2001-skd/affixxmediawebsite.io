import React from "react";
import { motion } from "framer-motion";
import Card from "../../ui/Card";
import StepCard from "../../ui/StepCard";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceCardGroup = ({ title, img, details }) => {
  const { description, whatWeDo, howItHelps } = details[0];

  const cards = [
    { heading: "Description", text: description },
    { heading: "What We Do", text: whatWeDo },
    { heading: "How It Helps", text: howItHelps },
  ];

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full flex flex-col gap-6 mb-16"
    >
      {/* <h2 className="text-3xl font-bold text-center mb-6">{title}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
          <StepCard title={card.heading} description={card.text} imgSrc={img} />
          //   <Card
          //     title={card.heading}
          //     key={idx}
          //     content={card.text}
          //     imageSrc={img}
          //     button={false}
          //   />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCardGroup;
