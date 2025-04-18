import { NavLink } from "react-router-dom";
import {
  adminDetails,
  workingHours,
  socialLinks,
  services,
  quickLinks,
  bottomFooter,
  copyright,
} from "../../data/footerItems";

const currentYear = new Date().getFullYear();

const NavItem = ({ path, page, isSection }) => {
  if (isSection) {
    return (
      <a
        href={path}
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
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Company Info & Contact */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Affixx Media</h2>
            <div>
              {adminDetails.map((value, index) => (
                <div key={index} className="flex items-center gap-3 mb-3">
                  <span>{<value.icon />}</span>
                  <a href={value?.link} className="hover:text-gray-300 text-sm">
                    {value.details}
                  </a>
                </div>
              ))}
              <ul className="mt-3">
                {workingHours.map(({ day, timing }, index) => (
                  <li key={index} className="text-sm py-0.5 ">
                    {day}: {timing}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((value, index) => (
                <li key={index} className="list-none">
                  <NavLink
                    to={value.path}
                    className="hover:text-gray-300 hover:underline text-sm"
                  >
                    {value.page}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3-4: Services in 2 columns (4x4 grid) */}
          <div className="md:col-span-2">
            <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((value, index) => (
                <li key={index} className="list-none">
                  <NavLink
                    to={value.path}
                    className="hover:text-gray-300 hover:underline text-sm"
                  >
                    {value.page}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-gray-300 underline underline-offset-4">
              Connect
            </h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 text-xl"
                >
                  {<item.icon />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="mt-12 flex flex-col md:flex-row items-center md:justify-between border-t border-gray-700 py-4 w-full gap-8">
          <p className="text-center text-sm font-normal">{copyright}</p>
          <ul className="flex items-center gap-5 md:gap-5">
            {bottomFooter[0]?.pages?.map((value, index) => (
              <li key={index} className="text-sm">
                <NavLink to={value.path}>{value.page}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
