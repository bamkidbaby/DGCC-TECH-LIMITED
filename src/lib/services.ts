export type Service = {
  slug: string;
  id: string;
  title: string;
  cardTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  overview: string;
  audience: string;
  examples: string[];
  benefits: string[];
  deliverables: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "website-design-development",
    id: "svc-web",
    title: "Website Design and Development",
    cardTitle: "Website Design and Development",
    description:
      "Modern, mobile-friendly websites for businesses, schools and online sellers.",
    image: "/images/services/web-development.jpg",
    imageAlt: "Illustrative image of people working with laptops",
    category: "Digital service",
    overview:
      "DGCC Tech builds websites including corporate sites, e-commerce stores, school portals and blogs. The work is designed to present your organisation clearly and work across screen sizes.",
    audience: "Businesses, schools, organisations and online sellers.",
    examples: [
      "Corporate websites",
      "E-commerce stores",
      "School portals",
      "Blogs",
    ],
    benefits: [
      "A clear online presence for your organisation.",
      "A layout designed to work on mobile and desktop screens.",
      "Related services such as branding and printing available from one team.",
    ],
    deliverables: [
      "Website design and development scoped to your requirements.",
      "A responsive website for the agreed pages and features.",
    ],
    faqs: [
      {
        question: "What kinds of websites do you build?",
        answer:
          "Corporate sites, e-commerce stores, school portals and blogs.",
      },
      {
        question: "Can I request a quotation before work begins?",
        answer:
          "Yes. Share the type of site, key features and any reference links so the team can discuss your requirements and provide a quotation.",
      },
    ],
  },
  {
    slug: "cyber-security",
    id: "svc-cyber",
    title: "Cyber security",
    cardTitle: "Cyber security",
    description:
      "Practical help to protect your website, data and business email.",
    image: "/images/services/cyber-security.jpg",
    imageAlt: "Illustrative close-up of a computer circuit board",
    category: "Security",
    overview:
      "DGCC Tech offers cyber security services focused on protecting websites, data and email.",
    audience: "Businesses, schools and individuals who need help securing digital services and information.",
    examples: [
      "Website security support",
      "Data protection guidance",
      "Business email security",
    ],
    benefits: [
      "Identify security concerns in the areas you ask us to review.",
      "Get practical guidance for protecting important digital assets.",
    ],
    deliverables: [
      "A discussion of your security needs.",
      "Security support scoped and quoted for the agreed work.",
    ],
    faqs: [
      {
        question: "What can you help protect?",
        answer:
          "The listed service covers websites, data and business email. Contact us to describe your setup and the support you need.",
      },
      {
        question: "Do you publish fixed security service prices?",
        answer:
          "No fixed prices are listed. Request a quotation for your requirements.",
      },
    ],
  },
  {
    slug: "computer-engineering-it-support",
    id: "svc-it",
    title: "Computer Engineering and IT Support",
    cardTitle: "Computer Engineering and IT support",
    description:
      "Computer repairs, setup and remote IT support for homes and workplaces.",
    image: "/images/services/it-support.jpg",
    imageAlt: "Illustrative image of a technician helping with a laptop",
    category: "Technical support",
    overview:
      "DGCC Tech provides hands-on computer repairs and setups for offices and homes, alongside remote IT support.",
    audience: "Individuals, homes and offices needing computer repairs, setup or IT assistance.",
    examples: [
      "Computer repairs",
      "Computer setup",
      "Remote IT support",
    ],
    benefits: [
      "Get hands-on help with computer issues and setup.",
      "Remote support is available for clients outside the local area.",
    ],
    deliverables: [
      "Repair, setup or support work agreed for your device or environment.",
      "A quotation based on the issue and requested work.",
    ],
    faqs: [
      {
        question: "Can you provide support remotely?",
        answer:
          "Yes. Remote IT support is available for clients around the world. Contact the team to arrange a session.",
      },
      {
        question: "Do you also help with computer repairs?",
        answer:
          "Yes. Computer repairs and setups are part of the listed hands-on service.",
      },
    ],
  },
  {
    slug: "branding-graphic-design",
    id: "svc-brand",
    title: "Branding and Graphic Design",
    cardTitle: "Branding and Graphic designing",
    description:
      "Visual design to help your business look consistent on screen and in print.",
    image: "/images/services/branding.jpg",
    imageAlt: "Illustrative image of a digital design workspace",
    category: "Creative service",
    overview:
      "DGCC Tech offers graphic design and branding as part of its creative and print services.",
    audience: "Businesses and organisations that need design for their brand or printed materials.",
    examples: [
      "Business branding",
      "Design for business cards",
      "Artwork for flyers and banners",
    ],
    benefits: [
      "Keep related design and printing requests with one provider.",
      "Discuss a visual direction suited to your business and materials.",
    ],
    deliverables: [
      "Graphic design work scoped to the requested materials.",
      "Print-ready output where agreed as part of a print request.",
    ],
    faqs: [
      {
        question: "Can design and printing be requested together?",
        answer:
          "Yes. DGCC Tech lists design and printing together as an available service.",
      },
      {
        question: "What should I include in my enquiry?",
        answer:
          "Tell us what you are designing, where it will be used and any sizes or references you already have.",
      },
    ],
  },
  {
    slug: "general-printing",
    id: "svc-print",
    title: "General Printing",
    cardTitle: "General Printing",
    description:
      "Printing for business materials and branded merchandise, with design available.",
    image: "/images/services/printing.jpg",
    imageAlt: "Illustrative image of a professional printer",
    category: "Print and merchandise",
    overview:
      "DGCC Tech provides general printing and merchandising, with design and print available together.",
    audience: "Businesses, schools, organisations and individuals ordering printed materials.",
    examples: [
      "Business cards",
      "Flyers and banners",
      "T-shirts and mugs",
      "Receipts, ID cards and calendars",
    ],
    benefits: [
      "Request design and printing together.",
      "Discuss a single item or a larger branded merchandise run.",
    ],
    deliverables: [
      "Printing for the agreed material and quantity.",
      "Design when requested as part of the job.",
    ],
    faqs: [
      {
        question: "What items can you print?",
        answer:
          "Listed examples include business cards, flyers, banners, T-shirts, mugs, receipts, ID cards and calendars.",
      },
      {
        question: "Can you print artwork that I already have?",
        answer:
          "Contact the team with your artwork and print requirements so they can confirm suitability and provide a quotation.",
      },
    ],
  },
  {
    slug: "tech-training",
    id: "svc-train",
    title: "Tech training",
    cardTitle: "Tech training",
    description:
      "Practical technology classes available in person or online.",
    image: "/images/services/tech-training.jpg",
    imageAlt: "Illustrative image of a technology training session",
    category: "Training",
    overview:
      "DGCC Tech runs practical classes in web development, graphic design, computer engineering and cyber security. Training is available in person and online.",
    audience: "People looking to learn practical technology and creative skills.",
    examples: [
      "Web development",
      "Graphic design",
      "Computer engineering",
      "Cyber security",
    ],
    benefits: [
      "Choose between in-person and online classes.",
      "Learn from practical training in the listed subject areas.",
    ],
    deliverables: [
      "Training in the agreed subject and format.",
      "A certificate at the end of each course.",
    ],
    faqs: [
      {
        question: "Can I take the training online?",
        answer:
          "Yes. Classes are available in person and online in the listed subject areas.",
      },
      {
        question: "Do courses include a certificate?",
        answer: "Yes. The listed courses end with a certificate.",
      },
    ],
  },
  {
    slug: "desktop-laptop-sales",
    id: "svc-computers",
    title: "Desktop and Laptop Sales",
    cardTitle: "Desktop and Laptop Sales",
    description:
      "Desktop and laptop devices selected to suit your requirements.",
    image: "/images/services/computer-sales.jpg",
    imageAlt: "Illustrative image of desktop and laptop computers",
    category: "Devices",
    overview:
      "DGCC Tech sells desktop and laptop computers and can advise on a device suited to your needs.",
    audience: "Individuals, schools and businesses looking for desktop or laptop devices.",
    examples: ["Desktop computers", "Laptop computers"],
    benefits: [
      "Ask for advice based on how you plan to use the device.",
      "Discuss your preferred device and requirements with the team.",
    ],
    deliverables: [
      "Device options discussed in response to your requirements.",
      "A quotation for the selected device.",
    ],
    faqs: [
      {
        question: "What devices do you sell?",
        answer: "DGCC Tech lists desktop and laptop computers for sale.",
      },
      {
        question: "Can you recommend a device?",
        answer:
          "Yes. Share how you plan to use it and the team can advise on your options.",
      },
    ],
  },
  {
    slug: "computer-accessories",
    id: "svc-accessories",
    title: "Computer Accessories",
    cardTitle: "Computer Accessories",
    description:
      "Computer accessories to complement your desktop or laptop setup.",
    image: "/images/services/computer-accessories.jpg",
    imageAlt: "Illustrative image of computer equipment",
    category: "Accessories",
    overview:
      "DGCC Tech sells computer accessories. Contact the team with the device or accessory you need to check availability and pricing.",
    audience: "Computer users, homes, schools and offices looking for accessories.",
    examples: ["Computer accessories for desktop and laptop setups"],
    benefits: [
      "Ask about accessories for your specific computer setup.",
      "Get advice from the same team that provides computer support.",
    ],
    deliverables: [
      "Accessory options based on your enquiry.",
      "A quotation for the requested items.",
    ],
    faqs: [
      {
        question: "Which accessories are in stock?",
        answer:
          "Availability is not listed online. Contact DGCC Tech to ask about the item you need.",
      },
      {
        question: "Are prices available online?",
        answer:
          "No fixed prices are listed. Request a quotation for current options.",
      },
    ],
  },
  {
    slug: "it-consultancy",
    id: "svc-consultancy",
    title: "IT consultancy",
    cardTitle: "IT consultancy",
    description:
      "Technology advice and IT solutions discussed around your organisation's needs.",
    image: "/images/services/it-consultancy.jpg",
    imageAlt: "Illustrative image of colleagues discussing technology",
    category: "Consultancy",
    overview:
      "DGCC Tech offers IT consultancy and tailored technology solutions for businesses.",
    audience: "Businesses seeking advice on technology needs and IT solutions.",
    examples: [
      "IT advice for a business",
      "Discussion of technology requirements",
    ],
    benefits: [
      "Discuss your needs before deciding on a solution.",
      "Explore related services from one technology provider.",
    ],
    deliverables: [
      "Consultancy scoped to the needs discussed.",
      "A quotation for the requested consultancy work.",
    ],
    faqs: [
      {
        question: "Who is IT consultancy for?",
        answer:
          "The service is listed for businesses. Contact the team with your organisation's technology needs.",
      },
      {
        question: "How much does consultancy cost?",
        answer:
          "No fixed prices are listed. Request a quotation based on the support you need.",
      },
    ],
  },
  {
    slug: "online-registrations",
    id: "svc-registration",
    title: "Online Registrations",
    cardTitle: "Online Registrations",
    description:
      "Assistance with online registration tasks; ask us about the registration you need.",
    image: "/images/services/online-registration.jpg",
    imageAlt: "Illustrative image representing an online registration task",
    category: "Online services",
    overview:
      "Online registrations are listed among DGCC Tech's services. Contact the team with the specific registration and deadline so they can confirm whether they can assist.",
    audience:
      "Individuals seeking help with a specific online registration.",
    examples: ["Online registration assistance"],
    benefits: [
      "Discuss the registration you need help completing.",
      "Confirm requirements before sharing personal or application information.",
    ],
    deliverables: [
      "Assistance for the registration request agreed with the team.",
    ],
    faqs: [
      {
        question: "Which registrations can you help with?",
        answer:
          "The website lists online registrations but does not identify specific programmes. Contact the team to confirm your request.",
      },
      {
        question: "What information should I send?",
        answer:
          "Start by sharing the registration name and deadline. Do not send passwords or sensitive identity details in an initial enquiry.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
