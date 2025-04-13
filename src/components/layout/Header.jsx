import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { NavLink, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";
import { navItems } from "../../data/navItems";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const routeLocation = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [routeLocation]);

  const socialMediaLinks = [
    { name: "Linkedin", icon: LinkedInIcon, link: "#" },
    { name: "Instagram", icon: InstagramIcon, link: "#" },
    { name: "Facebook", icon: FacebookIcon, link: "#" },
    { name: "x", icon: XIcon, link: "#" },
  ];

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b-[0.8px] border-gray-600 border-dashed fixed flex items-center justify-between w-screen z-10">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-[100%]">
          <NavLink to="/" className="text-black font-bold text-2xl">
            affixx Media
          </NavLink>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-black md:flex-row flex-col">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={item.submenu ? "relative group" : ""}
                >
                  <NavLink to={item.path}>{item.page}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <CTAButton label="Book a Call" icon={<AddCallIcon />} />
          </div>

          <button className="md:hidden block" onClick={handleToggleMenu}>
            <i className="bg-[#3938f3] text-white p-1 rounded-full flex items-center justify-center">
              {isMenuOpen ? (
                <CloseIcon className="text-white" />
              ) : (
                <MenuIcon className="text-white" />
              )}
            </i>
          </button>
        </div>

        <MobileMenu
          navItems={navItems}
          socialMediaLinks={socialMediaLinks}
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
        />
      </div>
    </header>
  );
};

export default Header;
