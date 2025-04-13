import React from "react";
import HeroBanner from "../components/layout/HeroBanner";
import AboutSection from "../components/layout/AboutSection";
import OnBoardSection from "../components/layout/OnBoardSection";
import ServiceSection from "../components/layout/ServiceSection";
import TestimonialSection from "../components/layout/TestimonialSection";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServiceSection />
      <OnBoardSection />
      <TestimonialSection />
    </>
  );
};

export default Index;
