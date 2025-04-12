import React from "react";
import CTAButton from "./CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";

const Card = ({
  imageSrc,
  title = false,
  content,
  reverse = false,
  button = false,
}) => {
  return (
    <div
      className={`bg-[#101014] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-8 p-5 rounded-md`}
    >
      {/* Image Part */}
      <div className="bg-[#020203] w-full md:w-1/2 h-64 sm:h-80 md:h-96 p-2 rounded-md">
        <img
          src={imageSrc}
          alt="about_img"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content Part */}
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-3">
          {title && title}
        </h1>
        <p className="font-medium text-white mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
          {content}
        </p>
        {button && (
          <CTAButton
            label="Book a Free Call"
            color="black"
            bgColor="white"
            icon={<AddCallIcon />}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
