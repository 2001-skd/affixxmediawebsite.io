import React from "react";
import HeroBanner from "../components/layout/HeroBanner";
import AboutSection from "../components/layout/AboutSection";
import OnBoardSection from "../components/layout/OnBoardSection";
import ServiceSection from "../components/layout/ServiceSection";

const Index = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServiceSection />
      <OnBoardSection />
    </>
  );
};

export default Index;
