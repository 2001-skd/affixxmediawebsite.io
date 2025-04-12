import React from "react";
import SectionHeading from "../ui/SectionHeading";
import aboutImg from "../../assets/gamright.webp";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { serviceData } from "../../data/servicesData";
console.log(serviceData);
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          heading="What We Provides ?"
          subHeading="Our Services"
        />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {serviceData.map((value, index) => (
          <Card content={value.description} imageSrc={value.img} key={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceSection;
