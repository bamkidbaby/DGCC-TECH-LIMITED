"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaChevronDown,
  FaPhone,
  FaGraduationCap,
} from "react-icons/fa6";
import { aosProps, type AosAnimation } from "@/lib/aos";
import { contactDetails, createWhatsAppHref } from "@/lib/contact";
import { services } from "@/lib/services";
import HomeExperience from "@/components/home-experience";

type DgccPage = "home" | "about" | "services" | "contact";
type InnerPage = Exclude<DgccPage, "home">;
const cardAnimations: AosAnimation[] = ["fade-up"];

const values = [
  {
    title: "Experienced team",
    text: "Hands-on skill across repairs, networking, design and development, so the person helping you has done this work before.",
  },
  {
    title: "Quality service",
    text: "Work that is done properly and checked before it reaches you.",
  },
  {
    title: "Affordable prices",
    text: "Fair pricing for individuals, schools and growing businesses.",
  },
  {
    title: "Customer satisfaction",
    text: "A job is finished when you are happy with it, and you can call or message us afterwards if anything needs attention.",
  },
] as const;

const faqs = [
  {
    question: "Do you support clients outside Nigeria?",
    answer:
      "Yes. Our remote IT support works for clients around the world. Call or message us to arrange a session.",
  },
  {
    question: "Can I take your training online?",
    answer:
      "Yes. We run physical and online classes in web development, graphic design, computer engineering and cyber security. Every course ends with a certificate.",
  },
  {
    question: "Can you design and print my materials together?",
    answer:
      "Yes. We design and print business cards, flyers, banners, T-shirts, mugs, receipts, ID cards and calendars in one place.",
  },
  {
    question: "What kinds of websites do you build?",
    answer:
      "Corporate sites, e-commerce stores, school portals and blogs. All of them are fast, modern and mobile-friendly.",
  },
  {
    question: "Do you sell computers and accessories?",
    answer:
      "Yes. We sell genuine desktops and laptops and quality accessories. Tell us what you need and we will advise.",
  },
] as const;

const homeFaqs: Array<{ question: string; answer: string }> = [
  ...faqs,
  {
    question: "How do I get started with DGCC TECH?",
    answer:
      "Choose the service closest to what you need, then call, email, use WhatsApp or complete the enquiry form. Include the goal, any important dates and useful reference information so the team can understand your request.",
  },
  {
    question: "Can I ask about a laptop or computer accessory before buying?",
    answer:
      "Yes. Tell the team how you plan to use the computer or which accessory you need. Availability, specifications and current prices can then be discussed directly rather than guessed online.",
  },
];

const defaultService = "Website Design and Development";

const pageHeroes: Record<
  InnerPage,
  {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    primary: { label: string; href: string; phone?: boolean };
    secondary?: { label: string; href: string };
  }
> = {
  about: {
    eyebrow: "One team, the full picture",
    title: "About DGCC Tech",
    description:
      "We connect people, businesses and schools to technology that works, and to the people who keep it working.",
    image: "/images/services/it-consultancy.jpg",
    imageAlt: "Colleagues collaborating around a laptop in a workspace",
    primary: { label: "Explore our services", href: "/services" },
    secondary: { label: "Talk to our team", href: "/contact" },
  },
  services: {
    eyebrow: "Practical expertise",
    title: "Technology services that work together.",
    description:
      "Six core services, plus hardware sales, online registrations and IT consultancy.",
    image: "/images/services/web-development.jpg",
    imageAlt: "Professional website development work in progress",
    primary: { label: "Request a service", href: "/contact" },
    secondary: { label: "Call our team", href: contactDetails.phoneHref },
  },
  contact: {
    eyebrow: "Here when you need us",
    title: "Get in touch",
    description:
      "Call, message or visit. Tell us what you need and we will tell you how we can help.",
    image: "/images/contact-reception.jpg",
    imageAlt: "Modern office reception and client waiting area",
    primary: {
      label: "Call +234 704 537 1328",
      href: contactDetails.phoneHref,
      phone: true,
    },
    secondary: {
      label: "Email our team",
      href: `mailto:${contactDetails.email}`,
    },
  },
};

function PageHero({ page }: { page: InnerPage }) {
  const hero = pageHeroes[page];

  return (
    <section className="hero navy">
      <div className="wrap">
        <div className="hero-grid">
          <div
            className="hero-image"
            {...aosProps("fade-right", { duration: 700 })}
          >
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
              className="hero-photo"
            />
          </div>
          <div
            className="hero-copy"
            {...aosProps("fade-left", { duration: 700, delay: 80 })}
          >
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="lede">{hero.description}</p>
            <div className="cta">
              <a className="btn btn-gold" href={hero.primary.href}>
                {hero.primary.phone && (
                  <FaPhone aria-hidden="true" focusable="false" />
                )}
                {hero.primary.label}
              </a>
              {hero.secondary && (
                <Link className="btn btn-ghost" href={hero.secondary.href}>
                  {hero.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeHero() {
  return (
    <section className="home-hero navy">
      <Image
        src="/images/services/computer-sales.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="home-hero-background"
      />
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="wrap home-hero-wrap">
        <div className="home-hero-grid">
          <div
            className="home-hero-copy"
            {...aosProps("fade-right", { duration: 700 })}
          >
            <p className="hero-eyebrow">Technology, connected</p>
            <h1>Connecting dots in tech.</h1>
            <p className="lede">
              Your trusted partner for smart tech solutions, innovative services
              and excellent support.
            </p>
            <div className="cta">
              <a
                className="btn btn-gold"
                href={createWhatsAppHref(
                  "Hello DGCC Tech, I would like to discuss a project.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <Link className="btn btn-ghost" href="/contact">
                Request a Project
              </Link>
            </div>
            <p className="hero-note">
              {contactDetails.address} Remote IT support for clients worldwide.
            </p>
          </div>

          <div
            className="home-hero-art"
            {...aosProps("fade-left", { duration: 700, delay: 100 })}
          >
            <svg
              viewBox="0 0 600 520"
              role="group"
              aria-label="DGCC Tech services connected around one hub"
            >
              <g className="home-network-lines" aria-hidden="true">
                <path d="M300 260 140 104M300 260 390 76M300 260 478 226M300 260 430 414M300 260 190 442M300 260 110 286" />
                <path d="m140 104 250-28 88 150-48 188-240 28-80-156z" />
              </g>
              <g className="home-network-hub" aria-hidden="true">
                <circle cx="300" cy="260" r="48" />
                <circle className="home-network-arc" cx="300" cy="260" r="48" />
                <text x="300" y="266" textAnchor="middle">
                  DGCC
                </text>
              </g>
              <Link
                href="/services/website-design-development"
                aria-label="Website design and development"
              >
                <circle
                  className="home-network-node"
                  cx="140"
                  cy="104"
                  r="10"
                />
                <text x="124" y="96" textAnchor="end">
                  Websites
                </text>
              </Link>
              <Link
                href="/services/branding-graphic-design"
                aria-label="Branding and graphic design"
              >
                <circle className="home-network-node" cx="390" cy="76" r="10" />
                <text x="410" y="68">
                  Branding
                </text>
              </Link>
              <Link
                href="/services/general-printing"
                aria-label="Printing services"
              >
                <circle
                  className="home-network-node"
                  cx="478"
                  cy="226"
                  r="10"
                />
                <text x="498" y="232">
                  Printing
                </text>
              </Link>
              <Link href="/services/tech-training" aria-label="Tech training">
                <circle
                  className="home-network-node"
                  cx="430"
                  cy="414"
                  r="10"
                />
                <text x="450" y="422">
                  Training
                </text>
              </Link>
              <Link href="/services/cyber-security" aria-label="Cyber security">
                <circle
                  className="home-network-node"
                  cx="190"
                  cy="442"
                  r="10"
                />
                <text x="174" y="466" textAnchor="end">
                  Cyber security
                </text>
              </Link>
              <Link
                href="/services/computer-engineering-it-support"
                aria-label="IT support"
              >
                <circle
                  className="home-network-node"
                  cx="110"
                  cy="286"
                  r="10"
                />
                <text x="90" y="292" textAnchor="end">
                  IT support
                </text>
              </Link>
            </svg>
          </div>
        </div>
        <ul className="assure">
          <li>
            <FaCheck aria-hidden="true" focusable="false" />
            Experienced team
          </li>
          <li>
            <FaCheck aria-hidden="true" focusable="false" />
            Quality service
          </li>
          <li>
            <FaCheck aria-hidden="true" focusable="false" />
            Affordable prices
          </li>
          <li>
            <FaCheck aria-hidden="true" focusable="false" />
            Customer satisfaction
          </li>
        </ul>
      </div>
    </section>
  );
}

function ServiceGrid({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "home" | "catalogue" | "secondary";
}) {
  return (
    <div className={`service-grid service-grid--${variant}`}>{children}</div>
  );
}

export default function DgccLanding({
  page,
  initialService = defaultService,
}: {
  page: DgccPage;
  initialService?: string;
}) {
  const [name, setName] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const text = `Hello DGCC Tech,${name ? ` my name is ${name}.` : ""}\nI am interested in: ${service}.${message ? `\n\n${message}` : ""}`;
    return createWhatsAppHref(text);
  }, [name, message, service]);

  const emailHref = useMemo(() => {
    const text = `Hello DGCC Tech,${name ? ` my name is ${name}.` : ""}\nI am interested in: ${service}.${message ? `\n\n${message}` : ""}`;
    return `mailto:${contactDetails.email}?subject=${encodeURIComponent(`Enquiry: ${service}`)}&body=${encodeURIComponent(text)}`;
  }, [name, message, service]);

  return (
    <>
      <main>
        {page === "home" && (
          <div className="page">
            <HomeHero />
            <HomeExperience />
            {false && (
              <>
                <section className="section home-introduction">
                  <div className="wrap home-introduction-grid">
                    <div {...aosProps("fade-right")}>
                      <p className="service-eyebrow">DGCC TECH Limited</p>
                      <h2>One Technology Partner. Multiple Possibilities.</h2>
                      <p>
                        DGCC TECH brings together digital development, IT
                        solutions, creative services, technology products and
                        professional training to help businesses and individuals
                        make better use of technology.
                      </p>
                      <Link className="textlink" href="/about">
                        Discover the company <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                    <div
                      className="home-introduction-media"
                      {...aosProps("fade-left", { delay: 100 })}
                    >
                      <figure>
                        <Image
                          src="/images/contact-reception.jpg"
                          alt="DGCC TECH reception space"
                          fill
                          sizes="(max-width: 800px) 100vw, 50vw"
                          className="hero-photo"
                        />
                      </figure>
                      <p>
                        From a clear online presence to reliable devices,
                        protected digital assets, professional print and useful
                        skills, our connected capabilities make the next step
                        easier to see.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="section home-divisions">
                  <div className="wrap">
                    <div
                      className="home-section-heading"
                      {...aosProps("fade-down")}
                    >
                      <p className="service-eyebrow">
                        Four connected divisions
                      </p>
                      <h2>More ways to make technology useful.</h2>
                      <p>
                        Different capabilities, brought together by one
                        practical conversation.
                      </p>
                    </div>
                    <div className="home-divisions-grid">
                      <article
                        className="home-division home-division--digital"
                        {...aosProps("fade-up")}
                      >
                        <figure>
                          <Image
                            src="/images/services/cyber-security.jpg"
                            alt="Digital security infrastructure"
                            fill
                            sizes="(max-width: 760px) 100vw, 65vw"
                            className="hero-photo"
                          />
                        </figure>
                        <div>
                          <span>01 / DIGITAL & IT</span>
                          <h3>Digital & IT Solutions</h3>
                          <p>
                            Websites, cybersecurity and technical support for
                            the systems people rely on.
                          </p>
                          <Link href="/services">
                            Explore digital services{" "}
                            <FaArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                      <article
                        className="home-division home-division--creative"
                        {...aosProps("fade-up", { delay: 60 })}
                      >
                        <div>
                          <span>02 / CREATIVE & PRODUCTION</span>
                          <h3>Creative & Production Services</h3>
                          <p>
                            Brand communication, graphic design and print work
                            that carries your message into the world.
                          </p>
                          <Link href="/services/branding-graphic-design">
                            Explore creative services{" "}
                            <FaArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                        <figure>
                          <Image
                            src="/images/services/printing.jpg"
                            alt="Professional printing equipment"
                            fill
                            sizes="(max-width: 760px) 100vw, 45vw"
                            className="hero-photo"
                          />
                        </figure>
                      </article>
                      <article
                        className="home-division home-division--products"
                        {...aosProps("fade-up", { delay: 120 })}
                      >
                        <figure>
                          <Image
                            src="/images/services/computer-sales.jpg"
                            alt="Laptop and desktop computer equipment"
                            fill
                            sizes="(max-width: 760px) 100vw, 45vw"
                            className="hero-photo"
                          />
                        </figure>
                        <div>
                          <span>03 / PRODUCTS</span>
                          <h3>Technology Products</h3>
                          <p>
                            Computers, accessories, hardware and peripherals
                            discussed around the work you need to do.
                          </p>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={createWhatsAppHref(
                              "Hello DGCC TECH, I would like to enquire about technology products.",
                            )}
                          >
                            Enquire about products{" "}
                            <FaArrowRight aria-hidden="true" />
                          </a>
                        </div>
                      </article>
                      <article
                        className="home-division home-division--academy"
                        {...aosProps("fade-up", { delay: 180 })}
                      >
                        <div>
                          <span>04 / EDUCATION</span>
                          <h3>Technology Education</h3>
                          <p>
                            Practical opportunities to learn web development,
                            design, engineering and cybersecurity.
                          </p>
                          <Link href="/academy">
                            Explore the Academy{" "}
                            <FaArrowRight aria-hidden="true" />
                          </Link>
                        </div>
                        <figure>
                          <Image
                            src="/images/services/tech-training.jpg"
                            alt="Technology training environment"
                            fill
                            sizes="(max-width: 760px) 100vw, 45vw"
                            className="hero-photo"
                          />
                        </figure>
                      </article>
                    </div>
                  </div>
                </section>

                <section className="section home-services" id="services">
                  <div className="wrap">
                    <div
                      className="home-section-heading"
                      {...aosProps("fade-down")}
                    >
                      <p className="service-eyebrow">Explore our services</p>
                      <h2>Specialist work, connected by a wider view.</h2>
                      <Link className="textlink" href="/services">
                        View every service <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="home-services-editorial">
                      {services.slice(0, 6).map((offering, index) => (
                        <article
                          className={`home-service home-service--${index + 1}`}
                          key={offering.id}
                          {...aosProps("fade-up", { delay: index * 55 })}
                        >
                          <Link
                            className="home-service-image"
                            href={`/services/${offering.slug}`}
                            aria-label={`Learn about ${offering.cardTitle}`}
                          >
                            <Image
                              src={offering.image}
                              alt={offering.imageAlt}
                              fill
                              sizes="(max-width: 720px) 100vw, 50vw"
                              className="service-card-photo"
                            />
                          </Link>
                          <div className="home-service-copy">
                            <p>
                              {String(index + 1).padStart(2, "0")} /{" "}
                              {offering.category}
                            </p>
                            <h3>{offering.cardTitle}</h3>
                            <span>{offering.description}</span>
                            <Link href={`/services/${offering.slug}`}>
                              Explore service{" "}
                              <FaArrowRight aria-hidden="true" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="section home-reasons">
                  <div className="wrap home-reasons-grid">
                    <figure
                      className="home-reasons-image"
                      {...aosProps("fade-right")}
                    >
                      <Image
                        src="/images/services/it-support.jpg"
                        alt="Technical support workspace"
                        fill
                        sizes="(max-width: 820px) 100vw, 47vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div {...aosProps("fade-left", { delay: 90 })}>
                      <p className="service-eyebrow">A connected way to work</p>
                      <h2>
                        Built for the questions behind the first question.
                      </h2>
                      <p>
                        Technology rarely stands alone. A growing organisation
                        might need a website, a dependable device, secure email,
                        branded materials and guidance for its team. DGCC TECH
                        brings those practical conversations together.
                      </p>
                      <ul>
                        <li>
                          Digital, physical and creative services in one place
                        </li>
                        <li>Solutions discussed around your actual need</li>
                        <li>Professional guidance before the work begins</li>
                      </ul>
                      <Link className="textlink" href="/about">
                        Why work with DGCC TECH{" "}
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>

                <section className="section home-products" id="products">
                  <div className="wrap home-products-layout">
                    <div {...aosProps("fade-right")}>
                      <p className="service-eyebrow">Technology store</p>
                      <h2>Equipment that fits the job in front of you.</h2>
                      <p>
                        Speak to the team about desktops, laptops and
                        accessories for work, school or everyday use. Current
                        availability, specifications and prices are discussed
                        directly so you can make an informed choice.
                      </p>
                      <a
                        className="btn btn-gold"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={createWhatsAppHref(
                          "Hello DGCC TECH, I am interested in computers or accessories. Please share the current options, specifications and prices for my needs.",
                        )}
                      >
                        Enquire about products{" "}
                        <FaArrowRight aria-hidden="true" />
                      </a>
                    </div>
                    <div
                      className="home-product-visuals"
                      {...aosProps("fade-left", { delay: 90 })}
                    >
                      <figure>
                        <Image
                          src="/images/services/computer-sales.jpg"
                          alt="Laptop and computer products available from DGCC TECH"
                          fill
                          sizes="(max-width: 820px) 100vw, 40vw"
                          className="hero-photo"
                        />
                      </figure>
                      <figure>
                        <Image
                          src="/images/services/computer-accessories.jpg"
                          alt="Computer accessories"
                          fill
                          sizes="(max-width: 820px) 55vw, 22vw"
                          className="hero-photo"
                        />
                      </figure>
                    </div>
                  </div>
                </section>

                <section className="section home-work" id="portfolio">
                  <div className="wrap home-work-grid">
                    <div {...aosProps("fade-right")}>
                      <p className="service-eyebrow">
                        Selected work / creative capability
                      </p>
                      <h2>Ideas Made Practical.</h2>
                      <p>
                        We share work only when it can be shown responsibly and
                        with the right permission. Our portfolio approach
                        focuses on the kind of digital, design and production
                        outcomes we can help you plan.
                      </p>
                      <Link className="textlink" href="/portfolio">
                        Explore our portfolio approach{" "}
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                    <div
                      className="home-work-images"
                      {...aosProps("fade-left", { delay: 80 })}
                    >
                      <figure>
                        <Image
                          src="/images/services/web-development.jpg"
                          alt="Website development workspace"
                          fill
                          sizes="(max-width: 820px) 100vw, 45vw"
                          className="hero-photo"
                        />
                      </figure>
                      <figure>
                        <Image
                          src="/images/services/branding.jpg"
                          alt="Branding and graphic design workspace"
                          fill
                          sizes="(max-width: 820px) 50vw, 25vw"
                          className="hero-photo"
                        />
                      </figure>
                    </div>
                  </div>
                </section>

                <section className="section home-academy" id="academy">
                  <div className="wrap home-academy-layout">
                    <figure {...aosProps("fade-right")}>
                      <Image
                        src="/images/services/tech-training.jpg"
                        alt="Technology training workspace"
                        fill
                        sizes="(max-width: 820px) 100vw, 48vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div {...aosProps("fade-left", { delay: 80 })}>
                      <p className="service-eyebrow">DGCC Tech Academy</p>
                      <h2>Learn. Build. Grow.</h2>
                      <p>
                        Technology is constantly evolving. DGCC TECH provides
                        opportunities to develop practical skills and confidence
                        in web development, graphic design, computer engineering
                        and cybersecurity.
                      </p>
                      <Link className="btn btn-outline" href="/academy">
                        Explore the Academy{" "}
                        <FaGraduationCap aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </section>

                <section className="section home-process">
                  <div className="wrap">
                    <div className="home-section-heading">
                      <p className="service-eyebrow">How it works</p>
                      <h2>A clear way to get the right help.</h2>
                    </div>
                    <ol>
                      {[
                        [
                          "Tell Us What You Need",
                          "Share your project, technical issue, product requirement or training interest.",
                        ],
                        [
                          "Discuss the Right Solution",
                          "We understand your requirements and discuss an appropriate approach.",
                        ],
                        [
                          "Get the Work Underway",
                          "Move forward with the agreed service, product or training arrangement.",
                        ],
                        [
                          "Stay Connected",
                          "Maintain communication for relevant support and follow-up.",
                        ],
                      ].map(([title, copy], index) => (
                        <li
                          key={title}
                          {...aosProps("fade-up", { delay: index * 60 })}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <div>
                            <h3>{title}</h3>
                            <p>{copy}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </section>

                <section className="section home-conversion">
                  <div
                    className="wrap home-conversion-inner"
                    {...aosProps("fade-up")}
                  >
                    <div>
                      <p className="service-eyebrow">Start a conversation</p>
                      <h2>Whatever Your Technology Needs, Let&apos;s Talk.</h2>
                      <p>
                        Whether you&apos;re building a digital presence, looking
                        for technical support, sourcing technology products or
                        developing new skills, DGCC TECH is ready to hear from
                        you.
                      </p>
                    </div>
                    <div className="home-conversion-actions">
                      <Link className="btn btn-gold" href="/contact">
                        Start a project <FaArrowRight aria-hidden="true" />
                      </Link>
                      <Link className="btn btn-ghost" href="/services">
                        Explore our services
                      </Link>
                      <a
                        className="textlink"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={createWhatsAppHref(
                          "Hello DGCC TECH, I would like to discuss a project or request a quotation.",
                        )}
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </section>

                {false && (
                  <>
                    <section className="section alt">
                      <div className="wrap brand-intro-grid">
                        <div
                          className="brand-photo-stack"
                          {...aosProps("fade-right")}
                        >
                          <figure className="brand-photo-primary">
                            <Image
                              src="/images/contact-reception.jpg"
                              alt="DGCC TECH reception space"
                              fill
                              sizes="(max-width: 820px) 100vw, 50vw"
                              className="hero-photo"
                            />
                          </figure>
                          <figure className="brand-photo-secondary">
                            <Image
                              src="/images/services/it-support.jpg"
                              alt="Computer technical support workspace"
                              fill
                              sizes="(max-width: 820px) 55vw, 25vw"
                              className="hero-photo"
                            />
                          </figure>
                        </div>
                        <div
                          className="brand-intro-copy"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          <p className="service-eyebrow">DGCC TECH Limited</p>
                          <h2>
                            Technology that supports the work you are trying to
                            do.
                          </h2>
                          <p>
                            DGCC TECH helps individuals, businesses, schools and
                            organisations make practical use of technology. From
                            building a clear online presence to keeping
                            computers running, protecting important digital
                            assets, producing branded materials and developing
                            useful skills, our services are designed to work
                            together.
                          </p>
                          <p>
                            We start with the need in front of you, then help
                            you understand the options and the right next step.
                            That connected approach is what we mean by{" "}
                            <strong>Connecting dots in tech.</strong>
                          </p>
                          <Link className="textlink" href="/about">
                            Get to know DGCC TECH
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section className="section">
                      <div className="wrap">
                        <div
                          className="section-head"
                          {...aosProps("fade-down")}
                        >
                          <h2>What we do</h2>
                          <p>
                            Six core services that cover getting online, staying
                            running, staying protected and looking the part.
                          </p>
                        </div>
                        <ServiceGrid variant="home">
                          {services.slice(0, 6).map((offering, index) => (
                            <article
                              className="service-card service-card--home"
                              key={offering.id}
                              {...aosProps(
                                cardAnimations[index % cardAnimations.length],
                                {
                                  delay: (index % cardAnimations.length) * 70,
                                  duration: 600,
                                },
                              )}
                            >
                              <Link
                                className="service-card-image"
                                href={`/services/${offering.slug}`}
                                aria-label={`Learn about ${offering.cardTitle}`}
                              >
                                <Image
                                  src={offering.image}
                                  alt={offering.imageAlt}
                                  fill
                                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                  className="service-card-photo"
                                />
                              </Link>
                              <div className="service-card-content">
                                <span className="service-eyebrow">
                                  {offering.category}
                                </span>
                                <h3>{offering.cardTitle}</h3>
                                <p>{offering.description}</p>
                                <Link
                                  className="service-card-link"
                                  href={`/services/${offering.slug}`}
                                >
                                  Explore this service{" "}
                                  <FaArrowRight aria-hidden="true" />
                                </Link>
                              </div>
                            </article>
                          ))}
                        </ServiceGrid>
                        <Link className="btn btn-outline" href="/services">
                          View all services
                        </Link>
                      </div>
                    </section>

                    <section className="section alt">
                      <div className="wrap split">
                        <div {...aosProps("fade-right")}>
                          <h2>One team for the whole chain</h2>
                        </div>
                        <div
                          className="prose"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          <p>
                            A new website needs a logo. A logo needs printing. A
                            growing business needs its data protected. At DGCC
                            Tech LTD those jobs sit under one roof, so nothing
                            gets lost between suppliers.
                          </p>
                          <Link className="textlink" href="/about">
                            About DGCC Tech LTD
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section className="section home-products" id="products">
                      <div className="wrap products-feature">
                        <div {...aosProps("fade-right")}>
                          <p className="service-eyebrow">DGCC TECH Store</p>
                          <h2>
                            Technology products, chosen around your needs.
                          </h2>
                          <p>
                            Tell us how you work, study or run your business. We
                            will help you discuss suitable laptops, desktops,
                            accessories and peripherals without making you
                            navigate a generic catalogue.
                          </p>
                          <a
                            className="btn btn-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={createWhatsAppHref(
                              "Hello DGCC TECH, I am interested in purchasing a laptop. Please send me your available models, specifications and prices.",
                            )}
                          >
                            Enquire about products{" "}
                            <FaArrowRight aria-hidden="true" />
                          </a>
                        </div>
                        <figure
                          className="products-image"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          <Image
                            src="/images/services/computer-sales.jpg"
                            alt="Laptop and computer products available from DGCC TECH"
                            fill
                            sizes="(max-width: 780px) 100vw, 42vw"
                            className="hero-photo"
                          />
                        </figure>
                      </div>
                    </section>

                    <section className="section alt">
                      <div className="wrap split">
                        <div {...aosProps("fade-right")}>
                          <p className="service-eyebrow">Why DGCC TECH</p>
                          <h2>Practical technology, connected.</h2>
                        </div>
                        <div
                          className="prose"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          <p>
                            Technology decisions are easier when the people
                            helping you can see the bigger picture. DGCC TECH
                            brings together digital services, practical
                            technical support, creative work and learning
                            opportunities.
                          </p>
                          <p>
                            Whether you are managing a business need or a
                            personal project, start with a conversation about
                            the right next step.
                          </p>
                          <Link className="textlink" href="/about">
                            Learn more about DGCC TECH
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section className="section portfolio-intro" id="portfolio">
                      <div className="wrap split">
                        <div {...aosProps("fade-right")}>
                          <p className="service-eyebrow">Portfolio</p>
                          <h2>Work should speak for itself.</h2>
                        </div>
                        <div
                          className="prose"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          <p>
                            We only share project work when it can be shown
                            responsibly and with the right permission. If you
                            would like to discuss a similar project, tell us
                            what you are planning.
                          </p>
                          <Link className="textlink" href="/portfolio">
                            Explore our approach to portfolio work
                          </Link>
                        </div>
                      </div>
                    </section>

                    <section className="section alt" id="academy">
                      <div className="wrap academy-grid">
                        <div {...aosProps("fade-right")}>
                          <p className="service-eyebrow">DGCC Tech Academy</p>
                          <h2>Build practical technology skills.</h2>
                          <p className="academy-copy">
                            Explore training in web development, graphic design,
                            computer engineering and cybersecurity. Classes are
                            available in person and online.
                          </p>
                          <Link className="btn btn-gold" href="/academy">
                            Enrol for Training{" "}
                            <FaGraduationCap aria-hidden="true" />
                          </Link>
                        </div>
                        <Image
                          src="/images/services/tech-training.jpg"
                          alt="Technology training workspace"
                          width={720}
                          height={540}
                          className="academy-image"
                          {...aosProps("fade-left", { delay: 80 })}
                        />
                      </div>
                    </section>

                    <section className="section">
                      <div className="wrap">
                        <div
                          className="section-head"
                          {...aosProps("fade-down")}
                        >
                          <p className="service-eyebrow">Our process</p>
                          <h2>
                            Clear steps, from first conversation to support.
                          </h2>
                        </div>
                        <ol className="process-grid">
                          {[
                            "Understand your needs",
                            "Discuss the right solution",
                            "Plan and execute the work",
                            "Deliver and provide relevant support",
                          ].map((step, index) => (
                            <li
                              key={step}
                              {...aosProps("fade-up", { delay: index * 75 })}
                            >
                              <span>{String(index + 1).padStart(2, "0")}</span>
                              <h3>{step}</h3>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </section>

                    <section className="section home-faq">
                      <div className="wrap split">
                        <div {...aosProps("fade-right")}>
                          <p className="service-eyebrow">
                            Frequently asked questions
                          </p>
                          <h2>Helpful answers before you get in touch.</h2>
                          <p className="faq-intro">
                            If your question is more specific, send an enquiry
                            with the details you have and the team can guide you
                            from there.
                          </p>
                        </div>
                        <div
                          className="faq"
                          {...aosProps("fade-left", { delay: 80 })}
                        >
                          {homeFaqs.map(({ question, answer }, index) => (
                            <details
                              key={question}
                              {...aosProps("fade-up", { delay: index * 45 })}
                            >
                              <summary>
                                {question}
                                <FaChevronDown
                                  className="faq-chevron"
                                  aria-hidden="true"
                                />
                              </summary>
                              <p>{answer}</p>
                            </details>
                          ))}
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </>
            )}
          </div>
        )}

        {page === "about" && (
          <div className="page">
            <PageHero page="about" />

            <section className="section">
              <div className="wrap split">
                <div className="prose" {...aosProps("fade-right")}>
                  <h2 style={{ marginBottom: "1.5rem" }}>Who we are</h2>
                  <p>
                    DGCC Tech Limited is a technology company based at{" "}
                    {contactDetails.address} We build websites, repair and
                    support computers, design brands, secure data, print
                    merchandise and train people in tech.
                  </p>
                  <p>
                    Most tech problems do not sit in a single box. A website
                    needs a logo, a logo needs printing, and a growing business
                    needs its data protected. So we keep the whole chain under
                    one roof and treat each piece as connected to the others.
                  </p>
                  <p>
                    That idea is in our slogan: connecting dots in tech. Whether
                    you visit our office or work with us remotely from another
                    country, you deal with one team that already understands the
                    full picture.
                  </p>
                </div>
                <dl className="facts" {...aosProps("fade-left", { delay: 80 })}>
                  <div>
                    <dt>Company</dt>
                    <dd>DGCC Tech LTD</dd>
                  </div>
                  <div>
                    <dt>Registration</dt>
                    <dd>BN 3520720</dd>
                  </div>
                  <div>
                    <dt>Based in</dt>
                    <dd>{contactDetails.address}</dd>
                  </div>
                  <div>
                    <dt>Works with</dt>
                    <dd>Clients on site and remotely, worldwide</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href={contactDetails.phoneHref}>
                        {contactDetails.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${contactDetails.email}`}>
                        {contactDetails.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-down")}>
                  <h2>The dots we connect</h2>
                  <p>
                    Five needs that usually mean five different suppliers. With
                    us, they are one conversation.
                  </p>
                </div>
                <ul className="dot-grid about-capabilities">
                  <li {...aosProps("fade-up")}>
                    <figure className="capability-lead-image">
                      <Image
                        src="/images/services/web-development.jpg"
                        alt="Website development work in progress"
                        fill
                        sizes="(max-width: 820px) 100vw, 50vw"
                        className="hero-photo"
                      />
                    </figure>
                    <span className="editorial-index">01 / CAPABILITY</span>
                    <h3>Get online</h3>
                    <p>
                      Corporate sites, e-commerce stores, school portals and
                      blogs.
                    </p>
                  </li>
                  <li {...aosProps("fade-left", { delay: 60 })}>
                    <span className="editorial-index">02 / SUPPORT</span>
                    <h3>Stay running</h3>
                    <p>
                      Repairs, office networking, CCTV, server setup and remote
                      IT support.
                    </p>
                  </li>
                  <li {...aosProps("fade-right", { delay: 100 })}>
                    <span className="editorial-index">03 / SECURITY</span>
                    <h3>Stay protected</h3>
                    <p>
                      SSL, website security, backups, email protection and hack
                      prevention.
                    </p>
                  </li>
                  <li {...aosProps("fade-up", { delay: 60, duration: 600 })}>
                    <span className="editorial-index">04 / IDENTITY</span>
                    <h3>Look the part</h3>
                    <p>
                      Logos, brand identity, flyers, packaging and everything we
                      print.
                    </p>
                  </li>
                  <li {...aosProps("fade-up", { delay: 100 })}>
                    <span className="editorial-index">05 / LEARNING</span>
                    <h3>Grow skills</h3>
                    <p>
                      Practical training in web development, design, computer
                      engineering and cyber security.
                    </p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="section">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-up")}>
                  <h2>What you can expect</h2>
                </div>
                <div className="values">
                  {values.map(({ title, text }, index) => (
                    <div
                      className="val"
                      key={title}
                      {...aosProps(cardAnimations[index], {
                        delay: index * 65,
                        duration: 600,
                      })}
                    >
                      <span className="val-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="val-copy">
                        <span className="editorial-index">OUR VALUES</span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-left")}>
                  <h2>Who we work with</h2>
                  <p>
                    From a first laptop to a connected workplace, we meet people
                    where technology needs to do useful work.
                  </p>
                </div>
                <ul className="audience-showcase">
                  <li
                    className="audience-card audience-card--businesses"
                    {...aosProps("fade-up")}
                  >
                    <figure className="audience-card-image">
                      <Image
                        src="/images/services/it-consultancy.jpg"
                        alt="Technology consultation in a professional workspace"
                        fill
                        sizes="(max-width: 820px) 100vw, 58vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div className="audience-card-copy">
                      <span className="editorial-index">01 / PARTNERS</span>
                      <h3>Businesses and offices</h3>
                      <p>
                        Connected technology for the day-to-day work behind
                        growing operations.
                      </p>
                    </div>
                  </li>
                  <li
                    className="audience-card audience-card--schools"
                    {...aosProps("fade-up", { delay: 70 })}
                  >
                    <figure className="audience-card-image">
                      <Image
                        src="/images/services/tech-training.jpg"
                        alt="Technology learning and training environment"
                        fill
                        sizes="(max-width: 820px) 100vw, 42vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div className="audience-card-copy">
                      <span className="editorial-index">02 / EDUCATION</span>
                      <h3>Schools</h3>
                      <p>
                        Practical digital support for learning environments and
                        school communities.
                      </p>
                    </div>
                  </li>
                  <li
                    className="audience-card audience-card--sellers"
                    {...aosProps("fade-up", { delay: 100 })}
                  >
                    <figure className="audience-card-image">
                      <Image
                        src="/images/services/web-development.jpg"
                        alt="Online business website work in progress"
                        fill
                        sizes="(max-width: 820px) 100vw, 42vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div className="audience-card-copy">
                      <span className="editorial-index">03 / COMMERCE</span>
                      <h3>Online sellers</h3>
                      <p>
                        A clearer digital presence for the products and services
                        people need to find.
                      </p>
                    </div>
                  </li>
                  <li
                    className="audience-card audience-card--individuals"
                    {...aosProps("fade-up", { delay: 130 })}
                  >
                    <figure className="audience-card-image">
                      <Image
                        src="/images/services/computer-sales.jpg"
                        alt="Computer technology for personal work and study"
                        fill
                        sizes="(max-width: 820px) 100vw, 58vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div className="audience-card-copy">
                      <span className="editorial-index">04 / PERSONAL</span>
                      <h3>Individuals and students</h3>
                      <p>
                        Helpful technology choices, repairs and skills for work,
                        study and everyday life.
                      </p>
                    </div>
                  </li>
                  <li
                    className="audience-card audience-card--abroad"
                    {...aosProps("fade-up", { delay: 160 })}
                  >
                    <figure className="audience-card-image">
                      <Image
                        src="/images/services/it-support.jpg"
                        alt="Remote technical support workspace"
                        fill
                        sizes="(max-width: 820px) 100vw, 45vw"
                        className="hero-photo"
                      />
                    </figure>
                    <div className="audience-card-copy">
                      <span className="editorial-index">05 / REMOTE</span>
                      <h3>Clients abroad</h3>
                      <p>
                        Remote support and digital services that keep distance
                        from getting in the way.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {page === "services" && (
          <div className="page">
            <PageHero page="services" />

            <section className="section">
              <div className="wrap">
                <div className="services-catalogue">
                  {services.slice(0, 6).map((offering, index) => (
                    <article
                      className={`service-showcase${index === 0 ? " service-showcase--feature" : ""}`}
                      key={offering.id}
                      id={offering.id}
                      {...aosProps("fade-up", {
                        delay: index * 60,
                        duration: 650,
                      })}
                    >
                      <Link
                        className="service-showcase-image"
                        href={`/services/${offering.slug}`}
                        aria-label={`Learn about ${offering.cardTitle}`}
                      >
                        <Image
                          src={offering.image}
                          alt={offering.imageAlt}
                          fill
                          sizes="(max-width: 760px) 100vw, 56vw"
                          className="service-showcase-photo"
                          priority={index < 2}
                        />
                      </Link>
                      <div className="service-showcase-copy">
                        <span
                          className="service-showcase-number"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="service-eyebrow">
                          {offering.category}
                        </span>
                        <h2>{offering.cardTitle}</h2>
                        <p>{offering.description}</p>
                        <Link
                          className="service-showcase-link"
                          href={`/services/${offering.slug}`}
                        >
                          Explore service{" "}
                          <FaArrowRight
                            className="service-showcase-arrow"
                            aria-hidden="true"
                            focusable="false"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section alt" id="svc-more">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-up")}>
                  <h2>Also available at DGCC Tech</h2>
                  <p>
                    Need the hardware, the registration or just some good advice
                    first? We can help with that too.
                  </p>
                </div>
                <ServiceGrid variant="secondary">
                  {services.slice(6).map((offering, index) => (
                    <article
                      className="service-card service-card--secondary"
                      key={offering.slug}
                      {...aosProps(
                        cardAnimations[(index + 1) % cardAnimations.length],
                        {
                          delay: index * 70,
                          duration: 600,
                        },
                      )}
                    >
                      <div className="service-card-image">
                        <Image
                          src={offering.image}
                          alt={offering.imageAlt}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          className="service-card-photo"
                        />
                      </div>
                      <div className="service-card-content">
                        <span className="service-eyebrow">
                          {offering.category}
                        </span>
                        <h3>{offering.cardTitle}</h3>
                        <p>{offering.description}</p>
                        <Link
                          className="service-card-link"
                          href={`/services/${offering.slug}`}
                        >
                          Learn about this service{" "}
                          <FaArrowRight
                            className="service-card-arrow"
                            aria-hidden="true"
                            focusable="false"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
                </ServiceGrid>
              </div>
            </section>
          </div>
        )}

        {page === "contact" && (
          <div className="page">
            <PageHero page="contact" />
            <section className="contact navy">
              <div className="wrap">
                <div className="contact-grid">
                  <div {...aosProps("fade-right")}>
                    <div className="group">
                      <span className="label">Phone and WhatsApp</span>
                      <a className="big-link" href={contactDetails.phoneHref}>
                        {contactDetails.phoneDisplay}
                      </a>
                      <a
                        className="map-link"
                        href={createWhatsAppHref(
                          "Hello DGCC Tech, I would like to make an enquiry.",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                    <div className="group">
                      <span className="label">Email</span>
                      <a
                        className="mail"
                        href={`mailto:${contactDetails.email}`}
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                    <div className="group">
                      <span className="label">Office address</span>
                      <address>{contactDetails.address}</address>
                      <a
                        className="map-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={contactDetails.mapsHref}
                      >
                        Open in Google Maps
                        <FaArrowUpRightFromSquare
                          aria-hidden="true"
                          focusable="false"
                        />
                      </a>
                    </div>
                  </div>

                  <form
                    className="panel"
                    id="requestForm"
                    noValidate
                    {...aosProps("fade-left", { delay: 80 })}
                  >
                    <h2>Tell us what you need</h2>
                    <p>Fill this in and send it straight to us.</p>
                    <div className="field">
                      <label htmlFor="fName">Your name</label>
                      <input
                        id="fName"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="fService">Service</label>
                      <select
                        id="fService"
                        name="service"
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                      >
                        <option>Website Design and Development</option>
                        <option>Cyber security</option>
                        <option>Computer Engineering and IT support</option>
                        <option>Branding and Graphic designing</option>
                        <option>General Printing</option>
                        <option>Tech training</option>
                        <option>Desktop and Laptop Sales</option>
                        <option>Computer Accessories</option>
                        <option>IT consultancy</option>
                        <option>Online Registrations</option>
                        <option>Something else</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="fMsg">Details</label>
                      <textarea
                        id="fMsg"
                        name="message"
                        placeholder="What are you looking to do? Add any dates, quantities or links."
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      />
                    </div>
                    <div className="actions">
                      <a
                        className="btn btn-gold"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={whatsappHref}
                      >
                        Send on WhatsApp
                      </a>
                      <a className="btn btn-ghost" href={emailHref}>
                        Send by email
                      </a>
                    </div>
                    <p className="fine">
                      Each button opens WhatsApp or your email app with your
                      message ready to send.
                    </p>
                  </form>
                </div>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-down")}>
                  <h2>Before you call</h2>
                </div>
                <div className="faq">
                  {faqs.map(({ question, answer }, index) => (
                    <details
                      key={question}
                      {...aosProps(
                        cardAnimations[index % cardAnimations.length],
                        {
                          delay: (index % cardAnimations.length) * 55,
                          duration: 600,
                        },
                      )}
                    >
                      <summary>
                        {question}
                        <FaChevronDown
                          className="faq-chevron"
                          aria-hidden="true"
                          focusable="false"
                        />
                      </summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {page !== "contact" && page !== "home" && (
          <section className="cta-band navy" id="ctaBand">
            <div
              className="wrap cta-inner"
              {...aosProps("zoom-in", { duration: 650 })}
            >
              <div {...aosProps("zoom-in", { delay: 100, duration: 650 })}>
                <h2>Ready to Move Your Business Forward?</h2>
                <p>
                  Let&apos;s discuss the technology solution that fits your
                  business or personal needs.
                </p>
              </div>
              <div className="cta">
                <Link className="btn btn-gold" href="/contact">
                  Start a Project
                  <FaArrowRight aria-hidden="true" focusable="false" />
                </Link>
                <a className="btn btn-ghost" href={contactDetails.phoneHref}>
                  <FaPhone aria-hidden="true" focusable="false" />
                  Call {contactDetails.phoneDisplay}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
