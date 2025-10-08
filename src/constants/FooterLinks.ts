import { FooterLink, SocialLink } from "@/types";

export const footerLinks: FooterLink[] = [
  { label: "About Us", path: "/About" },
  { label: "Menu", path: "/Menu" },
  { label: "Contact", path: "/Contact" },
  { label: "Privacy Policy", path: "/PrivacyPolicy" },
  { label: "Terms and Conditions", path: "/TC" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/biryanidarbaar_au/",
    icon: "instagram",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "Email",
    url: "https://www.twitter.com",
    icon: "mail",
    ariaLabel: "Email Biryani Darbaar",
  },
  {
    name: "Phone",
    url: "tel:+61460747490",
    icon: "phone",
    ariaLabel: "Call Biryani Darbaar",
  },
];
