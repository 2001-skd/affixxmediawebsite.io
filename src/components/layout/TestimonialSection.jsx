import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import StepCard from "../ui/StepCard";
import { testimonials } from "../../data/testimonials";

const TestimonialSection = () => {
  const marqueeVariants = {
    animate: {
      y: ["0%", "-50%"],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          heading="From Our Client's Perspective"
          subHeading="Testimonials"
        />
      </motion.div>

      <div className="relative h-[600px] overflow-hidden mt-6">
        {/* Top permanent fade overlay */}
        <div className="absolute top-0 left-0 w-full h-20 z-20 pointer-events-none bg-gradient-to-b from-white/95 to-transparent" />

        {/* Bottom permanent fade overlay */}
        <div className="absolute bottom-0 left-0 w-full h-20 z-20 pointer-events-none bg-gradient-to-t from-white/95 to-transparent" />

        <motion.div
          className="grid md:grid-cols-3 grid-cols-1 gap-4"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <StepCard
              key={index}
              title={`${testimonial.clientName} - ${testimonial.clientBusiness}`}
              description={testimonial.review}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
