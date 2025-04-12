import React from "react";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";

const HeroBanner = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full">
      <div className="w-full max-w-6xl flex items-center justify-center flex-col gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug sm:leading-tight">
          Your Brand Deserves to Be <span className="violet_bg">Seen</span> and{" "}
          <span className="green_bg">Sold</span>
        </h1>
        <h5 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
          We’re the digital marketing team that brings{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            bold ideas
          </span>
          ,{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            smart execution
          </span>
          , and{" "}
          <span className="border-b-[0.8px] border-gray-600 border-dashed">
            proven growth strategies
          </span>{" "}
          under one roof.
        </h5>
        <div>
          <CTAButton
            link="/contact"
            icon={<AddCallIcon />}
            label="Book a Free Strategy Call"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
