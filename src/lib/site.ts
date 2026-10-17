export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const SERVICES = [
  { key: "supply", label: "IT and Electronics Supply", description: "Devices, networks and accessories", href: "/#supply" },
  { key: "software", label: "Software and Systems Development", description: "Apps and business systems", href: "/#software" },
  { key: "data-ai", label: "Data, AI and Emerging Tech", description: "Insight and practical AI", href: "/#data-ai" },
  { key: "advisory", label: "IT Advisory and Support", description: "Planning, set-up and support", href: "/#advisory" },
] as const;

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services", children: SERVICES.map(({ label, href }) => ({ label, href })) },
  {
    label: "Products",
    href: "/#products",
    children: [
      { label: "Zonse247 POS", href: "/#pos" },
      { label: "Zonse247 Marketplace", href: "/#marketplace" },
    ],
  },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS: Record<"x" | "facebook" | "instagram" | "linkedin", string | null> = {
  x: null,
  facebook: null,
  instagram: null,
  linkedin: null,
};
