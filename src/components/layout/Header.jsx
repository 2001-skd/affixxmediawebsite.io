import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { NavLink, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import CTAButton from "../ui/CTAButton";
import AddCallIcon from "@mui/icons-material/AddCall";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    {
      path: "/",
      page: "Home",
      isSection: false,
    },
    {
      path: "about",
      page: "About",
      isSection: true,
    },
    {
      path: "/services",
      page: "Service",
      isSection: false,
    },
    {
      path: "/contact",
      page: "Contact",
      isSection: false,
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

  // Handle section navigation
  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  // Handle active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter((item) => item.isSection)
        .map((item) => item.path);

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // If section is in viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  // toggle menu
  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="bg-white border-b-[0.8px] border-gray-600 border-dashed fixed flex items-center justify-between w-screen z-10">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-[100%]">
          <NavLink to="/" className="text-black font-bold text-2xl">
            affixx Media
          </NavLink>
          {/* navbar items starts */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-black md:flex-row flex-col">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${item.submenu ? "relative group" : ""}`}
                >
                  {item.isSection ? (
                    // Section link
                    <a
                      href={`#${item.path}`}
                      onClick={(e) => scrollToSection(item.path, e)}
                      className={`${
                        activeSection === item.path
                          ? "underline underline-offset-4 transition-all duration-100 ease-linear font-bold"
                          : ""
                      }`}
                    >
                      {item.page}{" "}
                      {item.submenu && (
                        <KeyboardArrowDownIcon style={{ width: "15px" }} />
                      )}
                    </a>
                  ) : (
                    // Regular page link
                    <NavLink
                      to={item.path}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "underline underline-offset-4 transition-all duration-100 ease-linear font-bold"
                          : ""
                      }
                    >
                      {item.page}{" "}
                      {item.submenu && (
                        <KeyboardArrowDownIcon style={{ width: "15px" }} />
                      )}
                    </NavLink>
                  )}

                  {item.submenu && (
                    <ul className="absolute glass-bg w-[250px] flex gap-5 flex-col p-2 -left-[50px] top-[100%] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out rounded-md">
                      {item.submenu.map((submenu, subIndex) => (
                        <li
                          key={subIndex}
                          className="hover:bg-secondary p-2 rounded-md"
                        >
                          <NavLink to={submenu.path}>{submenu.page}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* navbar items ends */}

          {/* cta button starts */}
          <div className="hidden md:block">
            <CTAButton
              link="/contact"
              label="Book a Call"
              icon={<AddCallIcon />}
            />
          </div>
          {/* cta button ends */}
          {/* menu toggle starts */}
          <button className="md:hidden block" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <i className="bg-[#5cffff] text-black p-1 rounded-full flex items-center justify-center">
                <CloseIcon className="text-black" />
              </i>
            ) : (
              <i className="bg-[#5cffff] text-black p-1 rounded-full flex items-center justify-center">
                <MenuIcon className="text-black" />
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
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
        {/* menu mobile ends */}
      </div>
    </header>
  );
};

export default Header;
