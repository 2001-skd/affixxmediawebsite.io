import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const currentYear = new Date().getFullYear();

export const adminDetails = [
  {
    icon: LocationOnIcon,
    details: "123 Creative Avenue, Digital District",
  },
  {
    icon: LocalPhoneIcon,
    link: "tel:1234567890",
    details: "+91 1234567890",
  },
  {
    icon: EmailIcon,
    link: "mailto:info@affixxmedia.com",
    details: "info@affixxmedia.com",
  },
];

// working hours starts

export const workingHours = [
  {
    day: "Monday - Saturday",
    timing: "09:00 AM - 06:00 PM",
  },
  {
    day: "Sunday",
    timing: "Holiday",
  },
];
// working hours ends

// quick link starts
export const quickLinks = [
  {
    path: "/",
    page: "Home",
  },
  {
    path: "/",
    page: "About Us",
  },
  {
    path: "/services",
    page: "Services",
  },
  {
    path: "/",
    page: "Works",
  },
  {
    path: "/",
    page: "Clients",
  },
  {
    path: "/",
    page: "Blogs",
  },
];

// quick link ends

// social media Links starts
export const socialLinks = [
  { icon: FacebookIcon, url: "#" },
  { icon: InstagramIcon, url: "#" },
  { icon: LinkedInIcon, url: "#" },
  { icon: XIcon, url: "#" },
  { icon: WhatsAppIcon, url: "#" },
];
// social media Links ends

// services section starts
export const services = [
  {
    path: "/services",
    page: "Social Media Marketing",
  },
  {
    path: "/services",
    page: "Performance Marketing ",
  },
  {
    path: "/services",
    page: "Influencer Marketing ",
  },
  {
    path: "/services",
    page: "Search Engine Optimization (SEO) ",
  },
  {
    path: "/services",
    page: "Guerrilla Marketing ",
  },
  {
    path: "/services",
    page: "Website Development ",
  },
  {
    path: "/services",
    page: "Mobile App Development  ",
  },
  {
    path: "/services",
    page: "Film Promotions ",
  },
];
// services section ends

// footer bottom - copyright and t&c and privacy policy
export const copyright = `${currentYear} Affixx Media . All Rights Reserved.`;
export const bottomFooter = [
  {
    pages: [
      {
        path: "/terms&conditions",
        page: "Terms & Conditions",
      },
      {
        path: "/privacy_policy",
        page: "Privacy Policy",
      },
    ],
  },
];
