import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      page: "Home",
    },
    {
      path: "/about",
      page: "About",
    },
    {
      path: "/services",
      page: "Service",
    },
    {
      path: "/contact",
      page: "Contact",
    },
  ];

  const socialMediaLinks = [
    {
      name: "Linkedin",
      icon: LinkedInIcon,
      link: "#",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "#",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      link: "#",
    },
    {
      name: "x",
      icon: XIcon,
      link: "#",
    },
  ];

  // toggle menu starts
  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  // toggle menu ends

  return (
    <header className="bg-white border-b-[0.8px] border-gray-600 border-dashed fixed flex items-center justify-between w-screen">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-[100%]">
          <NavLink to="/" className="text-black font-bold text-2xl">
            affixx Media
          </NavLink>
          {/* navbar items starts */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-white md:flex-row flex-col">
              {navItems.map((value) => (
                <li
                  className={`text-black ${
                    value.submenu ? "relative group" : ""
                  }`}
                >
                  <NavLink
                    to={value.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-4 transition-all duration-100 ease-linear font-bold"
                        : ""
                    }
                  >
                    {value.page}{" "}
                    {value.submenu ? (
                      <KeyboardArrowDownIcon style={{ width: "15px" }} />
                    ) : (
                      ""
                    )}
                  </NavLink>

                  {value.submenu ? (
                    <ul
                      className="absolute glass-bg w-[250px] flex gap-5 flex-col p-2 -left-[50px] top-[100%] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out rounded-md
"
                    >
                      {value.submenu.map((submenus) => (
                        <li className="hover:bg-secondary p-2 rounded-md">
                          <NavLink to={submenus.path}>{submenus.page}</NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* navbar items ends */}

          {/* cta button starts */}
          <div className="hidden md:block">
            <CTAButton
              label="Book a Call"
              color="white"
              bgColor="black"
              icon={<AddCallIcon />}
              iconColor="black"
              iconBgColor="#68ffff"
            />
          </div>
          {/* cta button ends */}
          {/* menu toggle starts */}
          <button className="md:hidden block" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <i className="bg-[#5cffff] text-black p-1 rounded-full flex items-center justify-center">
                <CloseIcon className={`text-black`} />
              </i>
            ) : (
              <i className="bg-[#5cffff] text-black p-1 rounded-full flex items-center justify-center">
                <MenuIcon className={`text-black`} />
              </i>
            )}
          </button>
          {/* menu toggle ends */}
        </div>
        {/* menu mobile starts */}
        <MobileMenu
          navItems={navItems}
          socialMediaLinks={socialMediaLinks}
          isMenuOpen={isMenuOpen}
        />
        {/* menu mobile ends */}
      </div>
    </header>
  );
};

export default Header;
