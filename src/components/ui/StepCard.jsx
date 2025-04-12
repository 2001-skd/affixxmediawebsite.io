import React from "react";
import { motion } from "framer-motion";
import { onBoardsteps } from "../../data/onBoardSteps";

const StepCard = ({ title, description, index, isLastOdd, imgSrc, id }) => {
  const isLast = index === onBoardsteps.length - 1 && isLastOdd;

  return (
    <div
      className={`bg-black rounded-xl shadow-lg p-6 flex flex-col items-start gap-2 transition-all relative overflow-hidden w-full md:w-[calc(50%-1rem)] ${
        isLast ? "md:w-full" : ""
      }`}
    >
      {/* Image Part */}
      <div className="bg-[#020203] w-full h-64 sm:h-80 md:h-96 p-2 rounded-md">
        <img
          src={imgSrc}
          alt="about_img"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Content Part */}
      <div className="w-full md:w-1/2">
        <h5 className="violet_bg text-white font-bold mb-2">{title}</h5>
        <p className="font-medium text-white mb-5 text-base sm:text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>

      <p className="absolute text-white right-0 bottom-0 text-7xl font-bold opacity-50">
        {id}
      </p>
    </div>
  );
};

export default StepCard;
