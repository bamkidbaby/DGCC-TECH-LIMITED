import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaChalkboardUser,
  FaCircleCheck,
  FaCode,
  FaDesktop,
  FaFileLines,
  FaKeyboard,
  FaLightbulb,
  FaPenRuler,
  FaPrint,
  FaScrewdriverWrench,
  FaShieldHalved,
} from "react-icons/fa6";
import { aosProps } from "@/lib/aos";
import { contactDetails, createWhatsAppHref } from "@/lib/contact";
import { getService, services } from "@/lib/services";

const serviceIcons: Record<string, IconType> = {
  "website-design-development": FaCode,
  "cyber-security": FaShieldHalved,
  "computer-engineering-it-support": FaScrewdriverWrench,
  "branding-graphic-design": FaPenRuler,
  "general-printing": FaPrint,
  "tech-training": FaChalkboardUser,
  "desktop-laptop-sales": FaDesktop,
  "computer-accessories": FaKeyboard,
  "it-consultancy": FaLightbulb,
  "online-registrations": FaFileLines,
};

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = serviceIcons[service.slug];
  const enquiryMessage = `Hello DGCC Tech, I am interested in ${service.title}. Please let me know how to get a quotation.`;
  const contactHref = `/contact?service=${encodeURIComponent(service.cardTitle)}`;

  return (
    <main className="service-detail page">
      <section className="service-detail-hero navy">
        <div className="wrap">
          <nav
            aria-label="Breadcrumb"
            className="breadcrumbs"
            {...aosProps("fade-down", { duration: 650 })}
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <div className="service-detail-grid">
            <div
              className="service-detail-copy"
              {...aosProps("fade-right", { duration: 700 })}
            >
              <p className="hero-eyebrow">{service.category}</p>
              <h1>{service.title}</h1>
              <p className="lede">{service.description}</p>
              <div className="cta">
                <a
                  className="btn btn-gold"
                  href={createWhatsAppHref(enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
                <Link className="btn btn-ghost" href={contactHref}>
                  Request a quotation
                </Link>
              </div>
            </div>
            <figure
              className="service-detail-image"
              {...aosProps("fade-left", { duration: 700 })}
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
                className="hero-photo"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap service-overview">
          <div
            className="service-overview-copy"
            {...aosProps("fade-right", { duration: 650 })}
          >
            <p className="service-eyebrow">Service overview</p>
            <h2>Practical support, shaped around your needs.</h2>
            <p>{service.overview}</p>
          </div>
          <aside
            className="service-overview-panel"
            {...aosProps("fade-left", { delay: 80, duration: 650 })}
          >
            <span className="service-icon" aria-hidden="true">
              <ServiceIcon />
            </span>
            <h3>Who this service is for</h3>
            <p>{service.audience}</p>
            <Link className="textlink" href={contactHref}>
              Discuss your requirements
              <FaArrowRight aria-hidden="true" focusable="false" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head" {...aosProps("fade-down")}>
            <p className="service-eyebrow">Service options</p>
            <h2>What we can help with</h2>
            <p>{service.description}</p>
          </div>
          <div className="service-offering-grid">
            {service.examples.map((example, index) => (
              <article
                className="service-offering-card"
                key={example}
                {...aosProps(index % 2 === 0 ? "fade-up" : "fade-left", {
                  delay: Math.min(index * 60, 240),
                  duration: 600,
                })}
              >
                <span className="service-icon" aria-hidden="true">
                  <ServiceIcon />
                </span>
                <h3>{example}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" {...aosProps("fade-down")}>
            <p className="service-eyebrow">Why DGCC Tech</p>
            <h2>Benefits for your work</h2>
          </div>
          <div className="service-benefit-grid">
            {service.benefits.map((benefit, index) => (
              <article
                className="service-benefit-card"
                key={benefit}
                {...aosProps(index % 2 === 0 ? "fade-up" : "fade-right", {
                  delay: Math.min(index * 70, 210),
                  duration: 600,
                })}
              >
                <FaCircleCheck aria-hidden="true" focusable="false" />
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div
            className="service-deliverables"
            {...aosProps("zoom-in-up", { duration: 650 })}
          >
            <div>
              <p className="service-eyebrow">Agreed scope</p>
              <h2>What to expect</h2>
            </div>
            <div>
              <ul className="service-deliverables-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>
                    <FaCircleCheck aria-hidden="true" focusable="false" />
                    {deliverable}
                  </li>
                ))}
              </ul>
              <p className="service-detail-note">
                Pricing is provided by quotation for the requested work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head" {...aosProps("fade-down")}>
            <p className="service-eyebrow">Helpful information</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq">
            {service.faqs.map(({ question, answer }, index) => (
              <details
                key={question}
                {...aosProps(index % 2 === 0 ? "fade-up" : "fade-left", {
                  delay: index * 70,
                  duration: 600,
                })}
              >
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band navy">
        <div className="wrap cta-inner">
          <div {...aosProps("fade-right", { duration: 650 })}>
            <h2>
              {service.slug === "computer-engineering-it-support"
                ? "Ask about computer engineering and IT support"
                : `Ask about ${service.title.toLowerCase()}`}
            </h2>
            <p>
              Contact the team with your requirements to discuss the service
              and request a quotation.
            </p>
            <p className="service-contact-phone">
              Or call <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            </p>
          </div>
          <div
            className="cta"
            {...aosProps("fade-left", { delay: 80, duration: 650 })}
          >
            <Link className="btn btn-gold" href={contactHref}>
              Request a quotation
              <FaArrowRight aria-hidden="true" focusable="false" />
            </Link>
            <a
              className="btn btn-ghost"
              href={createWhatsAppHref(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
