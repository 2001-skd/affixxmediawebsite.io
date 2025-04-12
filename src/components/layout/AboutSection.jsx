import React from "react";
import SectionHeading from "../ui/SectionHeading";
import aboutImg from "../../assets/gamright.webp";
import AddCallIcon from "@mui/icons-material/AddCall";
import CTAButton from "../ui/CTAButton";

const AboutSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 flex-col gap-6 w-full mb-10">
      <SectionHeading heading="Who We Are ?" subHeading="About Us" />

      {/* about content starts */}
      <div className="bg-[#101014] flex flex-col md:flex-row items-center justify-between gap-8 p-5 rounded-md">
        {/* Image Part */}
        <div className="bg-[#020203] w-full md:w-1/2 h-64 sm:h-80 md:h-96 p-2 rounded-md">
          <img
            src={aboutImg}
            alt="about_img"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Content Part */}
        <div className="w-full md:w-1/2">
          <p className="font-medium text-white mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
            We’re a results-driven digital marketing team obsessed with growth.
            From <span className="violet_bg">strategy to storytelling</span>, we
            craft campaigns that turn{" "}
            <span className="violet_bg">clicks into customers</span>. With a
            sharp focus on{" "}
            <span className="violet_bg">creativity and performance</span>, we
            deliver{" "}
            <span className="violet_bg">real impact not just impressions</span>.
            Let’s build something unforgettable, together.
          </p>
          <CTAButton
            color="black"
            bgColor="white"
            label="Book a Free Call"
            icon={<AddCallIcon />}
          />
        </div>
      </div>
      {/* about content ends */}
    </section>
  );
};

export default AboutSection;
