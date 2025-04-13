import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { navItems } from "../../data/navItems";

const SOCIAL_LINKS = [
  { icon: <FacebookIcon />, url: "https://facebook.com/yourpage" },
  { icon: <InstagramIcon />, url: "https://instagram.com/yourpage" },
  { icon: <LinkedInIcon />, url: "https://linkedin.com/company/yourpage" },
  { icon: <XIcon />, url: "https://x.com/yourpage" },
  { icon: <WhatsAppIcon />, url: "https://wa.me/1234567890" },
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

const currentYear = new Date().getFullYear();

// Helper component for navigation links
const NavItem = ({ path, page, isSection }) => {
  if (isSection) {
    return (
      <a
        href={`${path}`}
        className="py-1.5 font-normal hover:text-gray-300 hover:underline underline-offset-4"
        target={path.startsWith("http") ? "_blank" : "_self"}
        rel={path.startsWith("http") ? "noopener noreferrer" : ""}
      >
        {page}
      </a>
    );
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "py-1.5 font-normal hover:text-gray-300 transition-all duration-100 ease-linear"
          : "py-1.5 font-normal hover:text-gray-300 hover:underline"
      }
    >
      {page}
    </NavLink>
  );
};

export default function Footer() {
  let content = "Let's grow your brand like never before With Affixx Media";
  return (
    <>
      <footer className="w-full bg-black text-white">
        <div className="text-3xl font-bold text-center px-5 py-2 violet_bg">
          {content}
        </div>
        <div className="mx-auto w-full max-w-7xl px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start gap-5">
              <h2 className="text-2xl font-bold">Affixx Media</h2>
              <div>
                {DETAILS.map((value, index) => (
                  <div key={index} className="flex items-center gap-3 mb-4">
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
                {navItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <NavItem
                      path={item.path}
                      page={item.page}
                      isSection={item.isSection}
                    />
                  </li>
                ))}
              </ul>

              <ul>
                <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
                  Our Services
                </h3>
                {navItems
                  .find((item) => item.page === "Service")
                  ?.services?.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <NavItem
                        path={service.path}
                        page={service.page}
                        isSection={service.isSection}
                      />
                    </li>
                  ))}
              </ul>

              <ul>
                <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
                  Connect
                </h3>
                <div className="flex gap-4 sm:justify-center mb-5">
                  {SOCIAL_LINKS.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 text-xl"
                    >
                      {item.icon}
                    </a>
                  ))}
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

          <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-700 py-4">
            <p className="mb-4 text-center text-sm font-normal md:mb-0">
              &copy; {currentYear}{" "}
              <a href="/" className="font-medium">
                Affixx Media
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
