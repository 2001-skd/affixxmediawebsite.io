import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Marquee from "../ui/Marquee";

const QUICKLINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const OTHERLINKS = [
  {
    title: "Social Media Marketing",
    link: "/services",
  },
  {
    title: "Performance Marketing",
    link: "/services",
  },
  {
    title: "Influencer Marketing",
    link: "/services",
  },
  {
    title: "Search Engine Optimization (SEO)",
    link: "/services",
  },
  {
    title: "Guerrilla Marketing",
    link: "/services",
  },
  {
    title: "Website Development",
    link: "/services",
  },
  {
    title: "Mobile App Development",
    link: "/services",
  },
  {
    title: "Film Promotions",
    link: "/services",
  },
];

const OFFICE_HOURS = [
  {
    day: "Monday - Saturday",
    timing: "09:00 AM - 06:00 PM",
  },
  {
    day: "Sunday",
    timing: "Holiday",
  },
];

const DETAILS = [
  {
    title: "123 Creative Avenue, Digital District",
    link: "#",
    icon: <LocationOnIcon />,
  },
  {
    title: "1234567890",
    link: "tel:1234567890",
    icon: <LocalPhoneIcon />,
  },
  {
    title: "info@affixxmedia.com",
    link: "mailto:info@affixxmedia.com",
    icon: <EmailIcon />,
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  let content = "Let’s grow your brand like never before With Affixx Media";
  return (
    <>
      {/* <Marquee bg="violet_bg" content={content.repeat(5)} /> */}
      <footer className="w-full bg-black text-white">
        <div className="text-3xl font-bold text-center px-5 py-2 violet_bg">
          {content}
        </div>
        <div className="mx-auto w-full max-w-7xl px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start gap-5">
              <h2 className="text-2xl font-bold">Affixx Media</h2>
              <div>
                {DETAILS.map((value) => (
                  <div className="flex items-center gap-3 mb-4">
                    <span>{value.icon}</span>
                    <p className="text-left md:text-left">
                      <a href={value.link} className="hover:text-gray-300">
                        {value.title}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ul>
                <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
                  Quick Links
                </h3>
                {QUICKLINKS.map(({ title, link }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        isActive
                          ? "py-1.5 font-normal hover:text-gray-300 underline underline-offset-4 transition-all duration-100 ease-linear font-bold"
                          : "py-1.5 font-normal hover:text-gray-300 hover:underline underline-offset-4"
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
                  Our Services
                </h3>
                {OTHERLINKS.map(({ title, link }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        isActive
                          ? "py-1.5 font-normal hover:text-gray-300 underline underline-offset-4 transition-all duration-100 ease-linear font-bold"
                          : "py-1.5 font-normal hover:text-gray-300 hover:underline underline-offset-4"
                      }
                    >
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
                  Connect
                </h3>
                <div className="flex gap-4 sm:justify-center mb-5">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-xl"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-xl"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-xl"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-xl"
                  >
                    <XIcon />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 text-xl"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
                {OFFICE_HOURS.map(({ day, timing }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <p className="py-1.5 font-normal">
                      {day}: {timing}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-700 py-4 md:flex-row md:justify-between">
            <p className="mb-4 text-center text-sm font-normal md:mb-0">
              &copy; {currentYear}{" "}
              <a href="/" className="font-medium">
                Affixx Media
              </a>
              . All Rights Reserved.
            </p>

            <div className="flex gap-4 sm:justify-center">
              <a href="#" className="text-white hover:text-gray-300 text-xl">
                <FacebookIcon />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xl">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xl">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xl">
                <XIcon />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-xl">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
