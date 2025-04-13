import React from "react";
import WaveText from "./WaveText";

const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="section_heading flex items-center justify-center flex-col gap-5 mb-5">
      {subHeading && (
        <span className="text-2xl bg-[whitesmoke] px-5 rounded-full section_chip relative">
          {subHeading}
        </span>
      )}
      {heading && (
        <WaveText
          className="text-5xl font-bold text-center"
          tag="h5"
          text={heading}
        />
      )}
      {/* <h2 className="text-5xl font-bold">{heading}</h2> */}
    </div>
  );
};

export default SectionHeading;
