import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";

const MobileMenu = ({ navItems, socialMediaLinks, isMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // toggle dropdown starts
  function handleDropDown(key) {
    setActiveDropdown((prev) => (prev === key ? null : key));
  }
  // toggle dropdown ends
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0,
          }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#435739]"
        >
          <ul
            className={`md:hidden text-white space-y-4 mt-16 bg-black px-5 py-5 w-full h-screen overflow-y-hidden ${
              isMenuOpen
                ? "fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-50"
                : "hidden"
            }`}
          >
            {navItems.map((value, index) => (
              <li key={index} className="w-full">
                <div
                  className="flex items-center justify-between text-xl"
                  onClick={() => value.submenu && handleDropDown(index)}
                >
                  <NavLink
                    to={value.path}
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline"
                    }
                  >
                    {value.page}
                  </NavLink>
                  {value.submenu && (
                    <KeyboardArrowDownIcon
                      style={{
                        transform:
                          activeDropdown === index
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                </div>
              </li>
            ))}

            {/* social media icon starts */}
            {/* cta button starts */}
            <div className="md:hidden block">
              <CTAButton
                label="Book a Call"
                color="black"
                bgColor="white"
                icon={<AddCallIcon />}
                iconColor="#68ffff"
                iconBgColor="black"
              />
            </div>
            {/* cta button ends */}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
