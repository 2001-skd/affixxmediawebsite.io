const CTAButton = ({ label, color, bgColor, icon, iconColor, iconBgColor }) => {
  return (
    <button
      className={`bg-${bgColor} p-2 px-5 rounded-full text-${color} font-bold flex items-center justify-between gap-2`}
    >
      <i className={`bg-[${iconBgColor}] text-${iconColor} p-1 rounded-full`}>
        {icon}
      </i>
      {label}
    </button>
  );
};

export default CTAButton;
