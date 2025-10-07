export interface NavLink {
  path: string;
  label: string;
}

export const navbarLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Menu", label: "Menu" },
  { path: "/SpecialOffer", label: "Special Offers" },
  { path: "/Order", label: "Order Now" },
];
