// Simple array of menu items, easier to manage later
export const menuItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Showcase", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonilas" },
  { label: "Pricing", href: "#pricing" },

  { label: "Contact", href: "#contact" },
];
export type MenuItem = typeof menuItems[number];