"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaPhone,
} from "react-icons/fa6";
import { aosProps, type AosAnimation } from "@/lib/aos";
import { contactDetails, createWhatsAppHref } from "@/lib/contact";
import { services } from "@/lib/services";

type DgccPage = "home" | "about" | "services" | "contact";
type InnerPage = Exclude<DgccPage, "home">;
const cardAnimations: AosAnimation[] = [
  "fade-up",
  "fade-left",
  "fade-right",
  "zoom-in",
];

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

function ServiceCarousel({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="service-carousel">
      <div className="carousel-controls" aria-label="Service card navigation">
        <button
          className="carousel-control"
          type="button"
          aria-label="Show previous services"
          onClick={() => scroll(-1)}
        >
          <FaChevronLeft aria-hidden="true" focusable="false" />
        </button>
        <button
          className="carousel-control"
          type="button"
          aria-label="Show next services"
          onClick={() => scroll(1)}
        >
          <FaChevronRight aria-hidden="true" focusable="false" />
        </button>
      </div>
      <div className="service-grid" ref={trackRef}>
        {children}
      </div>
    </div>
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

            <section className="section">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-down")}>
                  <h2>What we do</h2>
                  <p>
                    Six core services that cover getting online, staying
                    running, staying protected and looking the part.
                  </p>
                </div>
                <ServiceCarousel>
                  {services.slice(0, 6).map((offering, index) => (
                    <article
                      className="service-card"
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
                      </div>
                    </article>
                  ))}
                </ServiceCarousel>
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
                    A new website needs a logo. A logo needs printing. A growing
                    business needs its data protected. At DGCC Tech LTD those
                    jobs sit under one roof, so nothing gets lost between
                    suppliers.
                  </p>
                  <Link className="textlink" href="/about">
                    About DGCC Tech LTD
                  </Link>
                </div>
              </div>
            </section>
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
                    <dd>DGCC Tech Limited</dd>
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
                <ul className="dot-grid">
                  <li {...aosProps("fade-up")}>
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
                  <li {...aosProps("zoom-in", { delay: 60, duration: 600 })}>
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
                <div className="section-head" {...aosProps("zoom-in-up")}>
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
                      <span className="editorial-index">
                        {String(index + 1).padStart(2, "0")} / OUR VALUES
                      </span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" {...aosProps("fade-left")}>
                  <h2>Who we work with</h2>
                </div>
                <ul
                  className="chips"
                  {...aosProps("fade-right", { delay: 80 })}
                >
                  <li>Businesses and offices</li>
                  <li>Schools</li>
                  <li>Online sellers</li>
                  <li>Individuals and students</li>
                  <li>Clients abroad</li>
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
                <ServiceCarousel>
                  {services.slice(0, 6).map((offering, index) => (
                    <article
                      className="service-card"
                      key={offering.id}
                      id={offering.id}
                      {...aosProps(
                        cardAnimations[index % cardAnimations.length],
                        {
                          delay: (index % cardAnimations.length) * 70,
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
                          priority={index < 2}
                        />
                      </div>
                      <div className="service-card-content">
                        <span className="service-eyebrow">
                          {offering.category}
                        </span>
                        <h2>{offering.cardTitle}</h2>
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
                </ServiceCarousel>
              </div>
            </section>

            <section className="section alt" id="svc-more">
              <div className="wrap">
                <div className="section-head" {...aosProps("zoom-in-down")}>
                  <h2>Also available at DGCC Tech</h2>
                  <p>
                    Need the hardware, the registration or just some good advice
                    first? We can help with that too.
                  </p>
                </div>
                <ServiceCarousel>
                  {services.slice(6).map((offering, index) => (
                    <article
                      className="service-card"
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
                </ServiceCarousel>
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
                      <span className="label">
                        Address listed for DGCC Tech
                      </span>
                      <address>{contactDetails.address}</address>
                      <p className="contact-confirmation">
                        Please confirm this address before visiting. An older
                        site listing also included 8, Badiru Street, off
                        Arolambo Road, Oke-aro Matogun; whether that is an
                        additional business location is unconfirmed.
                      </p>
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

        {page !== "contact" && (
          <section className="cta-band navy" id="ctaBand">
            <div
              className="wrap cta-inner"
              {...aosProps("zoom-in", { duration: 650 })}
            >
              <div {...aosProps("zoom-in", { delay: 100, duration: 650 })}>
                <h2>Have a project in mind?</h2>
                <p>
                  Tell us what you need. We will point you to the right service
                  and the next step.
                </p>
              </div>
              <div className="cta">
                <Link className="btn btn-gold" href="/contact">
                  Contact us
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
