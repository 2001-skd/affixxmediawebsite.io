import { NavLink } from "react-router-dom";

const CTAButton = ({
  link = "https://whatsform.com/JEIu8T",
  label = "Book a Free Strategy Call",
  color = "white",
  bgColor = "black",
  iconColor = "white",
  iconBgColor = "#3938f3",
  timing = false,
}) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  const iconContainerStyle = {
    backgroundColor: iconBgColor,
    color: iconColor,
  };
  return (
    <NavLink to={link} target="_blank">
      <button
        style={buttonStyle}
        className={`p-2 px-5 rounded-full font-bold flex items-center flex-col`}
      >
        {label}
      </button>
      {timing && (
        <span className="text-xs font-normal">In Just 30 Seconds</span>
      )}
    </NavLink>
  );
};

export default CTAButton;
