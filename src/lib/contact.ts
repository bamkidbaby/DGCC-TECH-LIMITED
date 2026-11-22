export const contactDetails = {
  phoneDisplay: "+234 704 537 1328",
  phoneHref: "tel:+2347045371328",
  whatsappNumber: "2347045371328",
  email: "support@dgcctechltd.com",
  address:
    "3, Akinguroye Street, Toluwalase Estate, ASB Bus Stop, Oke Aro, Ogun State.",
  mapsHref: "https://maps.app.goo.gl/WWMtxSqxRn7ZhQj88",
} as const;

export function createWhatsAppHref(message: string) {
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const serviceEnquiries: Record<string, { label: string; message: string }> = {
  "website-design-development": {
    label: "Get Your Website Today",
    message: "Hello DGCC TECH, I am interested in getting a professional website for my business. Please let me know how we can get started.",
  },
  "cyber-security": {
    label: "Secure My Business",
    message: "Hello DGCC TECH, I would like to enquire about cybersecurity services for my business.",
  },
  "computer-engineering-it-support": {
    label: "Request Technical Support",
    message: "Hello DGCC TECH, I need computer engineering or technical support. Please let me know how I can get assistance.",
  },
  "branding-graphic-design": {
    label: "Start My Design Project",
    message: "Hello DGCC TECH, I would like to discuss a graphic design or branding project.",
  },
  "general-printing": {
    label: "Get a Printing Quote",
    message: "Hello DGCC TECH, I would like to request a quotation for printing services.",
  },
  "tech-training": {
    label: "Enrol Now",
    message: "Hello DGCC TECH, I am interested in technology training. Please share your available courses and enrolment information.",
  },
  "it-consultancy": {
    label: "Book an IT Consultation",
    message: "Hello DGCC TECH, I would like to discuss IT consultancy for my organisation.",
  },
  "desktop-laptop-sales": {
    label: "Enquire About Computers",
    message: "Hello DGCC TECH, I am interested in purchasing a laptop or desktop computer. Please send me your available options, specifications and prices.",
  },
  "computer-accessories": {
    label: "Enquire About Accessories",
    message: "Hello DGCC TECH, I am interested in computer accessories. Please share your available options and prices.",
  },
};

export function getServiceEnquiry(slug: string, serviceTitle: string) {
  return serviceEnquiries[slug] ?? {
    label: "Request a Quote",
    message: `Hello DGCC TECH, I am interested in ${serviceTitle}. Please let me know how to get a quotation.`,
  };
}
