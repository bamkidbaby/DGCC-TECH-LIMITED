"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaCheck,
  FaChevronDown,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaXmark,
} from "react-icons/fa6";

type DgccPage = "home" | "about" | "services" | "contact";

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

const serviceOfferings: Array<{
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
}> = [
  {
    id: "svc-web",
    label: "Website design and development",
    description:
      "We build fast, modern, mobile-friendly websites that look right and load quickly on every screen.",
    image: "/images/services/web-development.jpg",
    imageAlt: "Developers collaborating at a table with open laptops",
    category: "Digital service",
  },
  {
    id: "svc-it",
    label: "Computer engineering and IT support",
    description:
      "Hands-on repairs and setups for offices and homes, plus remote IT support for clients anywhere in the world.",
    image: "/images/services/it-support.jpg",
    imageAlt: "Technician pointing at a laptop while helping a client",
    category: "Technical support",
  },
  {
    id: "svc-brand",
    label: "Graphic designing and branding",
    description:
      "Give your business a look people remember, on screen and on paper.",
    image: "/images/services/branding.jpg",
    imageAlt: "Color palette and digital design work on a tablet",
    category: "Creative service",
  },
  {
    id: "svc-cyber",
    label: "Cyber security",
    description:
      "Protect your website, your data and your inbox before something goes wrong.",
    image: "/images/services/cyber-security.jpg",
    imageAlt: "Detailed illuminated computer circuit board",
    category: "Security",
  },
  {
    id: "svc-print",
    label: "General printing and merchandising",
    description:
      "Design and print in one place, from a single business card to a full branded merchandise run.",
    image: "/images/services/printing.jpg",
    imageAlt: "Professional multifunction printer ready for printing",
    category: "Print and merchandise",
  },
  {
    id: "svc-train",
    label: "Tech training",
    description:
      "Practical, hands-on classes in person or online. Every course ends with a certificate.",
    image: "/images/services/tech-training.jpg",
    imageAlt: "Instructor leading a professional classroom training session",
    category: "Training",
  },
];

const additionalOfferings = [
  {
    title: "Desktop and laptop sales",
    description: "Genuine desktop and laptop devices selected for your needs.",
    image: "/images/services/computer-sales.jpg",
    imageAlt: "Laptop displayed on a clean workstation",
    service: "Desktop and laptop sales",
    cta: "Ask about devices",
    category: "Devices",
  },
  {
    title: "Computer accessories",
    description: "Quality accessories to power and protect your technology.",
    image: "/images/services/computer-accessories.jpg",
    imageAlt: "Laptop computer ready for work",
    service: "Computer accessories sales",
    cta: "Ask about accessories",
    category: "Accessories",
  },
  {
    title: "Online registrations",
    description: "Fast, reliable and secure help with online registrations.",
    image: "/images/services/online-registration.jpg",
    imageAlt: "Technology professionals working at a computer",
    service: "Online registrations",
    cta: "Start a registration",
    category: "Online service",
  },
  {
    title: "IT consultancy",
    description: "Expert advice and tailored IT solutions for your business.",
    image: "/images/services/it-consultancy.jpg",
    imageAlt: "Colleagues discussing a technology project in a workspace",
    service: "IT consultancy",
    cta: "Book advice",
    category: "Consultancy",
  },
] as const;

const defaultService = "Website design and development";

export default function DgccLanding({
  page,
  initialService = defaultService,
}: {
  page: DgccPage;
  initialService?: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const text = `Hello DGCC Tech,${name ? ` my name is ${name}.` : ""}\nI am interested in: ${service}.${message ? `\n\n${message}` : ""}`;
    return `https://wa.me/2347082523166?text=${encodeURIComponent(text)}`;
  }, [name, message, service]);

  const emailHref = useMemo(() => {
    const text = `Hello DGCC Tech,${name ? ` my name is ${name}.` : ""}\nI am interested in: ${service}.${message ? `\n\n${message}` : ""}`;
    return `mailto:dgcctech@gmail.com?subject=${encodeURIComponent(`Enquiry: ${service}`)}&body=${encodeURIComponent(text)}`;
  }, [name, message, service]);

  useEffect(() => {
    if (page !== "home") {
      return;
    }

    const NS = "http://www.w3.org/2000/svg";
    const ambient = document.getElementById("ambient");
    if (ambient) {
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      for (let i = 0; i < 46; i += 1) {
        const circle = document.createElementNS(NS, "circle");
        circle.setAttribute("cx", (rnd() * 600).toFixed(1));
        circle.setAttribute("cy", (rnd() * 520).toFixed(1));
        circle.setAttribute("r", (1 + rnd() * 1.8).toFixed(1));
        circle.setAttribute("fill", "#fff");
        circle.setAttribute("opacity", (0.1 + rnd() * 0.22).toFixed(2));
        ambient.appendChild(circle);
      }
    }

    const toggleConnection = (nodeId: string, active: boolean) => {
      const edges = document.querySelectorAll(
        `#constellation .edge[data-n~="${nodeId}"]`,
      );
      const node = document.getElementById(`n${nodeId}`);
      edges.forEach((edge) => edge.classList.toggle("on", active));
      if (node) {
        node.classList.toggle("hot", active);
      }
    };

    const nodes = document.querySelectorAll(".node");
    const listeners: Array<[Element, () => void, () => void]> = [];

    nodes.forEach((node) => {
      const target = node as HTMLElement;
      const id = target.id.replace("n", "");
      const enter = () => toggleConnection(id, true);
      const leave = () => toggleConnection(id, false);
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
      target.addEventListener("focus", enter);
      target.addEventListener("blur", leave);
      listeners.push([target, enter, leave]);
    });

    return () => {
      listeners.forEach(([target, enter, leave]) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
        target.removeEventListener("focus", enter);
        target.removeEventListener("blur", leave);
      });
      ambient?.replaceChildren();
    };
  }, [page]);

  return (
    <>
      <header className="site-header navy">
        <div className="wrap bar">
          <Link className="brand" href="/" aria-label="DGCC Tech Limited, home">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <circle
                cx="24"
                cy="24"
                r="18"
                fill="none"
                stroke="#3D6BFF"
                strokeWidth="7"
              />
              <circle
                cx="24"
                cy="24"
                r="18"
                fill="none"
                stroke="#F5A81C"
                strokeWidth="7"
                strokeDasharray="62 200"
                transform="rotate(-60 24 24)"
              />
              <circle cx="24" cy="24" r="4" fill="#fff" />
            </svg>
            <span className="brand-word">
              <span>DGCC</span>
              <span>TECH</span>
            </span>
          </Link>

          <nav
            className={`nav ${menuOpen ? "open" : ""}`}
            id="nav"
            aria-label="Main"
          >
            <Link
              href="/"
              aria-current={page === "home" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              aria-current={page === "about" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/services"
              aria-current={page === "services" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              aria-current={page === "contact" ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <a className="btn btn-gold btn-sm" href="tel:+2347082523166">
            <FaPhone aria-hidden="true" focusable="false" />
            Call us
          </a>
          <button
            className="menu-btn"
            id="menuBtn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? (
              <FaXmark aria-hidden="true" focusable="false" />
            ) : (
              <FaBars aria-hidden="true" focusable="false" />
            )}
          </button>
        </div>
      </header>

      <main>
        {page === "home" && (
          <div className="page">
            <section className="hero navy">
              <div className="wrap">
                <div className="hero-grid">
                  <div
                    className="hero-copy"
                    data-aos="fade-right"
                    data-aos-duration="850"
                  >
                    <h1>
                      <span>Connecting</span>
                      <span>dots in</span>
                      <span>
                        tech<i className="dot" aria-hidden="true"></i>
                      </span>
                    </h1>
                    <p className="lede">
                      Your trusted partner for smart tech solutions, innovative
                      services and excellent support.
                    </p>
                    <div className="cta">
                      <a className="btn btn-gold" href="tel:+2347082523166">
                        <FaPhone aria-hidden="true" focusable="false" />
                        Call +234 708 252 3166
                      </a>
                      <Link className="btn btn-ghost" href="/services">
                        See what we do
                      </Link>
                    </div>
                    <p className="hero-note">
                      Based in Oke-aro, Ogun State. Remote IT support for
                      clients worldwide.
                    </p>
                  </div>

                  <div
                    className="hero-art"
                    data-aos="fade-left"
                    data-aos-duration="850"
                  >
                    <svg
                      id="constellation"
                      viewBox="0 0 600 520"
                      role="group"
                      aria-label="Six DGCC Tech services connected around one hub. Select a dot to open that service."
                    >
                      <g id="ambient" aria-hidden="true" />
                      <g aria-hidden="true">
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="1"
                          style={{ animationDelay: "3.5s" }}
                          d="M290 268 L150 100"
                        />
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="2"
                          style={{ animationDelay: "3.56s" }}
                          d="M290 268 L400 72"
                        />
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="3"
                          style={{ animationDelay: "3.62s" }}
                          d="M290 268 L480 245"
                        />
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="4"
                          style={{ animationDelay: "3.68s" }}
                          d="M290 268 L420 440"
                        />
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="5"
                          style={{ animationDelay: "3.74s" }}
                          d="M290 268 L200 468"
                        />
                        <path
                          className="edge spoke"
                          pathLength={1}
                          data-n="6"
                          style={{ animationDelay: "3.8s" }}
                          d="M290 268 L130 290"
                        />
                      </g>
                      <g aria-hidden="true">
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="1 2"
                          style={{ animationDelay: ".35s" }}
                          d="M150 100 L400 72"
                        />
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="2 3"
                          style={{ animationDelay: ".9s" }}
                          d="M400 72 L480 245"
                        />
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="3 4"
                          style={{ animationDelay: "1.45s" }}
                          d="M480 245 L420 440"
                        />
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="4 5"
                          style={{ animationDelay: "2s" }}
                          d="M420 440 L200 468"
                        />
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="5 6"
                          style={{ animationDelay: "2.55s" }}
                          d="M200 468 L130 290"
                        />
                        <path
                          className="edge peri"
                          pathLength={1}
                          data-n="6 1"
                          style={{ animationDelay: "3.1s" }}
                          d="M130 290 L150 100"
                        />
                      </g>
                      <g className="hub" aria-hidden="true">
                        <circle className="hub-ring" cx="290" cy="268" r="38" />
                        <circle
                          className="hub-arc"
                          cx="290"
                          cy="268"
                          r="38"
                          strokeDasharray="110 240"
                          transform="rotate(-70 290 268)"
                        />
                        <text x="290" y="274" textAnchor="middle">
                          DGCC
                        </text>
                      </g>
                      <a
                        className="node"
                        id="n1"
                        href="/services#svc-web"
                        style={{ animationDelay: ".15s" }}
                        aria-label="Website design and development"
                      >
                        <circle cx="150" cy="100" r="30" fill="transparent" />
                        <circle className="halo" cx="150" cy="100" r="17" />
                        <circle className="dot" cx="150" cy="100" r="8" />
                        <text x="134" y="92" textAnchor="end">
                          Websites
                        </text>
                      </a>
                      <a
                        className="node"
                        id="n2"
                        href="/services#svc-brand"
                        style={{ animationDelay: ".7s" }}
                        aria-label="Graphic designing and branding"
                      >
                        <circle cx="400" cy="72" r="30" fill="transparent" />
                        <circle className="halo" cx="400" cy="72" r="17" />
                        <circle className="dot" cx="400" cy="72" r="8" />
                        <text x="418" y="64" textAnchor="start">
                          Branding
                        </text>
                      </a>
                      <a
                        className="node"
                        id="n3"
                        href="/services#svc-print"
                        style={{ animationDelay: "1.25s" }}
                        aria-label="General printing and merchandising"
                      >
                        <circle cx="480" cy="245" r="30" fill="transparent" />
                        <circle className="halo" cx="480" cy="245" r="17" />
                        <circle className="dot" cx="480" cy="245" r="8" />
                        <text x="500" y="252" textAnchor="start">
                          Printing
                        </text>
                      </a>
                      <a
                        className="node"
                        id="n4"
                        href="/services#svc-train"
                        style={{ animationDelay: "1.8s" }}
                        aria-label="Tech training"
                      >
                        <circle cx="420" cy="440" r="30" fill="transparent" />
                        <circle className="halo" cx="420" cy="440" r="17" />
                        <circle className="dot" cx="420" cy="440" r="8" />
                        <text x="438" y="462" textAnchor="start">
                          Training
                        </text>
                      </a>
                      <a
                        className="node"
                        id="n5"
                        href="/services#svc-cyber"
                        style={{ animationDelay: "2.35s" }}
                        aria-label="Cyber security"
                      >
                        <circle cx="200" cy="468" r="30" fill="transparent" />
                        <circle className="halo" cx="200" cy="468" r="17" />
                        <circle className="dot" cx="200" cy="468" r="8" />
                        <text x="188" y="496" textAnchor="end">
                          Cyber security
                        </text>
                      </a>
                      <a
                        className="node"
                        id="n6"
                        href="/services#svc-it"
                        style={{ animationDelay: "2.9s" }}
                        aria-label="Computer engineering and IT support"
                      >
                        <circle cx="130" cy="290" r="30" fill="transparent" />
                        <circle className="halo" cx="130" cy="290" r="17" />
                        <circle className="dot" cx="130" cy="290" r="8" />
                        <text x="110" y="297" textAnchor="end">
                          IT support
                        </text>
                      </a>
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

            <section className="section">
              <div className="wrap">
                <div className="section-head" data-aos="fade-up">
                  <h2>What we do</h2>
                  <p>
                    Six core services that cover getting online, staying
                    running, staying protected and looking the part.
                  </p>
                </div>
                <div className="service-grid home-service-grid">
                  {serviceOfferings.map((offering, index) => (
                    <article
                      className="service-card"
                      key={offering.id}
                      data-aos="fade-up"
                      data-aos-delay={(index % 3) * 100}
                    >
                      <Link
                        className="service-card-image"
                        href={`/services#${offering.id}`}
                        aria-label={`Learn about ${offering.label}`}
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
                        <h3>{offering.label}</h3>
                        <p>{offering.description}</p>
                        <Link
                          className="service-card-link"
                          href={`/services#${offering.id}`}
                        >
                          Explore service{" "}
                          <FaArrowRight
                            className="service-card-arrow"
                            aria-hidden="true"
                            focusable="false"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
                <Link className="btn btn-outline" href="/services">
                  View all services
                </Link>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap split">
                <div data-aos="fade-right">
                  <h2>One team for the whole chain</h2>
                </div>
                <div className="prose" data-aos="fade-left">
                  <p>
                    A new website needs a logo. A logo needs printing. A growing
                    business needs its data protected. At DGCC Tech those jobs
                    sit under one roof, so nothing gets lost between suppliers.
                  </p>
                  <p>
                    Walk into our office in Oke-aro Matogun, or work with us
                    remotely from anywhere in the world.
                  </p>
                  <Link className="textlink" href="/about">
                    About DGCC Tech
                  </Link>
                </div>
              </div>
            </section>
          </div>
        )}

        {page === "about" && (
          <div className="page">
            <section className="page-head navy">
              <div className="wrap" data-aos="fade-down">
                <h1>About us</h1>
                <p>
                  We connect people, businesses and schools to technology that
                  works, and to the people who keep it working.
                </p>
              </div>
            </section>

            <section className="section">
              <div className="wrap split">
                <div className="prose" data-aos="fade-right">
                  <h2 style={{ marginBottom: "1.5rem" }}>Who we are</h2>
                  <p>
                    DGCC Tech Limited is a technology company based in Oke-aro
                    Matogun, Ogun State. We build websites, repair and support
                    computers, design brands, secure data, print merchandise and
                    train people in tech.
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
                <dl className="facts" data-aos="fade-left">
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
                    <dd>Oke-aro Matogun, Ogun State</dd>
                  </div>
                  <div>
                    <dt>Works with</dt>
                    <dd>Clients on site and remotely, worldwide</dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href="tel:+2347082523166">+234 708 252 3166</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href="mailto:dgcctech@gmail.com">dgcctech@gmail.com</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" data-aos="fade-up">
                  <h2>The dots we connect</h2>
                  <p>
                    Five needs that usually mean five different suppliers. With
                    us, they are one conversation.
                  </p>
                </div>
                <ul className="dot-grid">
                  <li data-aos="fade-up" data-aos-delay="0">
                    <h3>Get online</h3>
                    <p>
                      Corporate sites, e-commerce stores, school portals and
                      blogs.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="75">
                    <h3>Stay running</h3>
                    <p>
                      Repairs, office networking, CCTV, server setup and remote
                      IT support.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="150">
                    <h3>Stay protected</h3>
                    <p>
                      SSL, website security, backups, email protection and hack
                      prevention.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="225">
                    <h3>Look the part</h3>
                    <p>
                      Logos, brand identity, flyers, packaging and everything we
                      print.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
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
                <div className="section-head" data-aos="fade-up">
                  <h2>What you can expect</h2>
                </div>
                <div className="values">
                  {values.map(({ title, text }) => (
                    <div className="val" key={title} data-aos="fade-up">
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section alt">
              <div className="wrap">
                <div className="section-head" data-aos="fade-up">
                  <h2>Who we work with</h2>
                </div>
                <ul className="chips" data-aos="fade-up">
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
            <section className="page-head navy">
              <div className="wrap" data-aos="fade-down">
                <h1>Our services</h1>
                <p>
                  Six core services, plus hardware sales, online registrations
                  and IT consultancy.
                </p>
              </div>
            </section>

            <section className="section">
              <div className="wrap">
                <div className="service-grid">
                  {serviceOfferings.map((offering, index) => (
                    <article
                      className="service-card"
                      key={offering.id}
                      id={offering.id}
                      data-aos="fade-up"
                      data-aos-delay={(index % 3) * 100}
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
                        <h2>{offering.label}</h2>
                        <p>{offering.description}</p>
                        <Link
                          className="service-card-link"
                          href={`/contact?service=${encodeURIComponent(offering.label)}`}
                        >
                          Request this service{" "}
                          <FaArrowRight
                            className="service-card-arrow"
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
                <div className="section-head" data-aos="fade-up">
                  <h2>Also available at DGCC Tech</h2>
                  <p>
                    Need the hardware, the registration or just some good advice
                    first? We can help with that too.
                  </p>
                </div>
                <div className="service-grid">
                  {additionalOfferings.map((offering, index) => (
                    <article
                      className="service-card"
                      key={offering.service}
                      data-aos="fade-up"
                      data-aos-delay={(index % 3) * 100}
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
                        <h3>{offering.title}</h3>
                        <p>{offering.description}</p>
                        <Link
                          className="service-card-link"
                          href={`/contact?service=${encodeURIComponent(offering.service)}`}
                        >
                          {offering.cta}{" "}
                          <FaArrowRight
                            className="service-card-arrow"
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
          </div>
        )}

        {page === "contact" && (
          <div className="page">
            <section className="contact navy">
              <div className="wrap">
                <div className="contact-grid">
                  <div data-aos="fade-right">
                    <h1>Get in touch</h1>
                    <p className="contact-lede">
                      Call, message or visit. Tell us what you need and we will
                      tell you how we can help.
                    </p>

                    <div className="group">
                      <span className="label">
                        <FaPhone aria-hidden="true" focusable="false" />
                        Phone and WhatsApp
                      </span>
                      <a className="big-link" href="tel:+2347082523166">
                        +234 708 252 3166
                      </a>
                      <a className="big-link" href="tel:+2347045371328">
                        +234 704 537 1328
                      </a>
                    </div>
                    <div className="group">
                      <span className="label">
                        <FaEnvelope aria-hidden="true" focusable="false" />
                        Email
                      </span>
                      <a className="mail" href="mailto:dgcctech@gmail.com">
                        dgcctech@gmail.com
                      </a>
                    </div>
                    <div className="group">
                      <span className="label">
                        <FaLocationDot aria-hidden="true" focusable="false" />
                        Visit us
                      </span>
                      <address>
                        3 Akinguroye Street, Toluwalase Estate ASB Bus Stop
                        <br />
                        8, Badiru Street, off Arolambo Road, Oke-aro Matogun,
                        Ogun State
                      </address>
                      <a
                        className="map-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/search/?api=1&query=Akinguroye+Street+Toluwalase+Estate+Oke-aro+Matogun+Ogun+State"
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
                    data-aos="fade-left"
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
                        <option>Website design and development</option>
                        <option>Computer engineering and IT support</option>
                        <option>Graphic designing and branding</option>
                        <option>Cyber security</option>
                        <option>General printing and merchandising</option>
                        <option>Tech training</option>
                        <option>Desktop and laptop sales</option>
                        <option>Computer accessories sales</option>
                        <option>Online registrations</option>
                        <option>IT consultancy</option>
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
                <div className="section-head" data-aos="fade-up">
                  <h2>Before you call</h2>
                </div>
                <div className="faq">
                  {faqs.map(({ question, answer }, index) => (
                    <details
                      key={question}
                      data-aos="fade-up"
                      data-aos-delay={(index % 3) * 75}
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
          <section className="cta-band navy" id="ctaBand" data-aos="fade-up">
            <div className="wrap cta-inner">
              <div>
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
                <a className="btn btn-ghost" href="tel:+2347082523166">
                  <FaPhone aria-hidden="true" focusable="false" />
                  Call +234 708 252 3166
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="wrap foot-grid">
          <div>
            <p className="foot-slogan">Connecting dots in tech.</p>
            <p>
              DGCC Tech Limited
              <br />
              Oke-aro Matogun, Ogun State
            </p>
          </div>
          <div>
            <h2>Pages</h2>
            <div className="foot-links">
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h2>Reach us</h2>
            <div className="foot-links">
              <a href="tel:+2347082523166">+234 708 252 3166</a>
              <a href="tel:+2347045371328">+234 704 537 1328</a>
              <a href="mailto:support@dgcctech.com">support@dgcctechltd.com</a>
            </div>
          </div>
        </div>
        <div className="wrap legal">
          &copy; 2026 DGCC Tech Limited. BN 3520720.
        </div>
      </footer>
    </>
  );
}
