export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const SERVICES = [
  {
    key: "supply",
    label: "IT and Electronics Supply",
    description: "Devices, networks and accessories",
    summary: "The right hardware, sourced and set up for your business.",
    points: ["Laptops and desktops", "Networking", "Printers and POS hardware", "Accessories"],
    href: "/#supply",
  },
  {
    key: "software",
    label: "Software and Systems Development",
    description: "Apps and business systems",
    summary: "Software built around how your business actually works.",
    points: ["Web and mobile apps", "Business systems", "Integrations", "Cloud hosting"],
    href: "/#software",
  },
  {
    key: "data-ai",
    label: "Data, AI and Emerging Tech",
    description: "Insight and practical AI",
    summary: "Turn your data into decisions and put AI to work.",
    points: ["Dashboards and reporting", "Data pipelines", "AI assistants", "Automation"],
    href: "/#data-ai",
  },
  {
    key: "advisory",
    label: "IT Advisory and Support",
    description: "Planning, set-up and support",
    summary: "Clear advice and dependable support at every step.",
    points: ["IT strategy", "Installation", "Maintenance", "Help desk"],
    href: "/#advisory",
  },
] as const;

export const PRODUCTS = [
  {
    key: "pos",
    name: "Zonse247 POS",
    pitch: "Run every sale, shelf and shift from one point of sale.",
    features: ["Works offline", "MRA-ready receipts", "Stock and expiry tracking", "Multi-branch and staff"],
    platforms: ["Windows", "Android"],
    status: null,
    cta: { label: "Request a demo", href: "/?interest=pos#contact" },
    download: { label: "Download for Windows", href: "/download" },
    href: "/#pos",
    bridge: null,
  },
  {
    key: "marketplace",
    name: "Zonse247 Marketplace",
    pitch: "Local shops across Malawi, open online around the clock.",
    features: ["Verified local shops", "Synced with your POS", "Collection and delivery", "Mobile money and cards"],
    platforms: ["Web"],
    status: "Launching soon",
    cta: { label: "Get notified", href: "/?interest=marketplace#contact" },
    download: null,
    href: "/#marketplace",
    bridge: "One catalogue, in store and online",
  },
  {
    key: "automation",
    name: "Business Automation and Integration",
    pitch: "Connect your systems and let routine work run itself.",
    features: ["Workflow automation", "System integrations", "Payment integrations", "Automated reports"],
    platforms: ["Tailored to you"],
    status: null,
    cta: { label: "Talk to us", href: "/?interest=automation#contact" },
    download: null,
    href: "/#automation",
    bridge: "Connected to the tools you already use",
  },
] as const;

export const INTERESTS = [
  ...SERVICES.map(({ key, label }) => ({ key: key as string, label: label as string })),
  ...PRODUCTS.map(({ key, name }) => ({ key: key as string, label: name as string })),
  { key: "other", label: "Something else" },
];

export const COMPANY = {
  founded: 2024,
  businessesServed: 43,
  districts: 8,
};

export const CONTACT: { whatsapp: string | null; phone: string | null; email: string | null; location: string } = {
  whatsapp: null,
  phone: null,
  email: null,
  location: "Malawi",
};

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", children: SERVICES.map(({ label, href }) => ({ label, href })) },
  {
    label: "Products",
    href: "/#products",
    children: [
      ...PRODUCTS.map(({ name, href }) => ({ label: name, href })),
      { label: "Download Zonse247 POS", href: "/download" },
    ],
  },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS: Record<"x" | "facebook" | "instagram" | "linkedin", string | null> = {
  x: null,
  facebook: null,
  instagram: null,
  linkedin: null,
};
