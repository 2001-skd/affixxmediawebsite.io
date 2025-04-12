import React, { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import aboutImg from "../../assets/gamright.webp";
import Card from "../ui/Card";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const AboutSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
    transition: { duration: 2, ease: "easeOut" },
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const content = (
    <>
      We’re a results-driven digital marketing team obsessed with growth. From{" "}
      <span className="violet_bg">strategy to storytelling</span>, we craft
      campaigns that turn{" "}
      <span className="violet_bg">clicks into customers</span>. With a sharp
      focus on <span className="violet_bg">creativity and performance</span>, we
      deliver{" "}
      <span className="violet_bg">real impact not just impressions</span>. Let’s
      build something unforgettable, together.
    </>
  );

  return (
    <section
      id="about"
      ref={targetRef}
      className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10 relative h-[180vh]"
    >
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading heading="Who We Are ?" subHeading="About Us" />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{ x }}
        transition={{ type: "spring", stiffness: 100, damping: 100 }}
      >
        <Card content={content} imageSrc={aboutImg} button={true} />
      </motion.div>
    </section>
  );
};

export default AboutSection;
