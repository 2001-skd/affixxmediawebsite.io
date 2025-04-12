import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { serviceData } from "../../data/servicesData";

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const numCards = serviceData.length;
  // Calculate how much scroll progress each card should take up
  const cardScrollSegment = 1 / numCards;

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-white px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <SectionHeading heading="What We Provide?" subHeading="Our Services" />

        <div className="relative w-full h-[500px] mt-10">
          {serviceData.map((value, index) => {
            // Define scroll ranges for each card
            // Each card should appear at its segment and disappear at the next segment
            const startShow = index * cardScrollSegment;
            const fullyVisible = startShow + cardScrollSegment * 0.2; // Fully visible 20% into its segment
            const startHide = (index + 0.8) * cardScrollSegment; // Start hiding at 80% of its segment
            const fullyHidden = (index + 1) * cardScrollSegment;

            // Transform scroll progress to scale, y position and opacity
            const scale = useTransform(
              scrollYProgress,
              [startShow, fullyVisible, startHide, fullyHidden],
              [0.8, 1, 1, 0.8]
            );

            const y = useTransform(
              scrollYProgress,
              [startShow, fullyVisible, startHide, fullyHidden],
              [100, 0, 0, -100]
            );

            const opacity = useTransform(
              scrollYProgress,
              [startShow, fullyVisible, startHide, fullyHidden],
              [0, 1, 1, 0]
            );

            // Apply spring physics for smoother animations
            const springY = useSpring(y, { stiffness: 100, damping: 20 });
            const springScale = useSpring(scale, {
              stiffness: 100,
              damping: 20,
            });
            const springOpacity = useSpring(opacity, {
              stiffness: 100,
              damping: 20,
            });

            return (
              <motion.div
                key={index}
                style={{
                  y: springY,
                  scale: springScale,
                  opacity: springOpacity,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  pointerEvents:
                    index ===
                    Math.floor(scrollYProgress.get() / cardScrollSegment)
                      ? "auto"
                      : "none",
                }}
              >
                <Card
                  title={value.title}
                  content={value.description}
                  imageSrc={value.img}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
