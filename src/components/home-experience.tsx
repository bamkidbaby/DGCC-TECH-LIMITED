import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { aosProps } from "@/lib/aos";
import { createWhatsAppHref } from "@/lib/contact";
import { services } from "@/lib/services";
import HomeStatistics from "@/components/home-statistics";

const primaryServices = services.slice(0, 6);
const [featuredService, ...supportingServices] = primaryServices;
const [serviceSecurity, serviceSupport, ...serviceLedger] = supportingServices;

const divisions = [
  {
    index: "01", label: "Digital & IT solutions", title: "Build, protect and support the systems that keep work moving.",
    copy: "From a clear online presence to practical cyber security and technical support, DGCC TECH helps turn everyday technology into dependable infrastructure.",
    image: "/images/services/cyber-security.jpg", alt: "Illustrative digital security technology", href: "/services",
  },
  {
    index: "02", label: "Creative & production", title: "Make every customer-facing detail feel considered.",
    copy: "Brand identity, graphic design and print production are brought into the same conversation, so ideas travel consistently from screen to physical materials.",
    image: "/images/services/printing.jpg", alt: "Illustrative commercial printing equipment", href: "/services/branding-graphic-design",
  },
  {
    index: "03", label: "Technology products", title: "Choose equipment around the work it needs to do.",
    copy: "Discuss laptops, desktop computers, accessories and peripherals with a team that also understands setup, support and how devices are actually used.",
    image: "/images/services/computer-sales.jpg", alt: "Illustrative laptop and desktop computer equipment", href: "/services/desktop-laptop-sales",
  },
  {
    index: "04", label: "Technology education", title: "Develop practical skills for what comes next.",
    copy: "DGCC TECH Academy offers in-person and online technology training in the areas people need to build with confidence.",
    image: "/images/services/tech-training.jpg", alt: "Illustrative technology training environment", href: "/academy",
  },
] as const;

export default function HomeExperience() {
  return (
    <div className="home-experience">
      <section className="home-manifesto section">
        <div className="wrap home-manifesto-grid">
          <p className="home-kicker" {...aosProps("fade-right")}>DGCC TECH LIMITED / ESTABLISHED FOR THE WHOLE PICTURE</p>
          <div {...aosProps("fade-up", { delay: 80 })}>
            <h2>One technology partner.<br /><em>Multiple possibilities.</em></h2>
          </div>
          <div className="home-manifesto-copy" {...aosProps("fade-left", { delay: 130 })}>
            <p>DGCC TECH connects digital solutions, technical support, creative production, technology products and practical learning under one roof. Start with the need in front of you; we help make the next step clearer.</p>
            <Link href="/about" className="home-arrow-link">Meet DGCC TECH <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-compass" aria-labelledby="capabilities-title">
        <div className="wrap">
          <div className="home-section-intro" {...aosProps("fade-down")}>
            <p className="home-kicker">THE DGCC TECH COMPASS</p>
            <h2 id="capabilities-title">Everything connects to a better way of working.</h2>
          </div>
          <div className="home-compass-layout">
            <div className="home-compass-statement" {...aosProps("fade-right", { delay: 80 })}>
              <span aria-hidden="true">DGCC</span>
              <p>Technology is more useful when the digital, physical and human parts of the work can inform one another.</p>
            </div>
            <div className="home-division-list">
              {divisions.map((division, index) => (
                <article className="home-division-row" key={division.label} {...aosProps("fade-up", { delay: index * 75 })}>
                  <div className="home-division-number">{division.index}</div>
                  <div><p>{division.label}</p><h3>{division.title}</h3><span>{division.copy}</span></div>
                  <Link href={division.href} aria-label={`Explore ${division.label}`}><FaArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeStatistics />

      <section className="home-services-atelier section" aria-labelledby="services-title">
        <div className="wrap">
          <div className="home-section-intro home-section-intro--split" {...aosProps("fade-down")}>
            <div><p className="home-kicker">SPECIALIST SERVICES</p><h2 id="services-title">Practical expertise for work that needs to move.</h2></div>
            <p>From a first website to a repaired computer or a print run ready for collection, each service is scoped around the work you need completed.</p>
          </div>
          <div className="home-service-showcase">
            <article className="home-service-feature" {...aosProps("fade-up")}>
              <Link href={`/services/${featuredService.slug}`} className="home-service-feature-image" aria-label={`Explore ${featuredService.cardTitle}`}>
                <Image src={featuredService.image} alt={featuredService.imageAlt} fill sizes="(max-width: 760px) 100vw, 62vw" />
              </Link>
              <div className="home-service-feature-copy">
                <p>01 / {featuredService.category}</p>
                <h3>{featuredService.cardTitle}</h3>
                <span>{featuredService.overview}</span>
                <Link href={`/services/${featuredService.slug}`}>View website development <FaArrowRight aria-hidden="true" /></Link>
              </div>
            </article>

            <div className="home-service-pair">
              {[serviceSecurity, serviceSupport].map((service, index) => (
                <article key={service.id} {...aosProps("fade-up", { delay: (index + 1) * 65 })}>
                  <Link href={`/services/${service.slug}`} className="home-service-pair-image" aria-label={`Explore ${service.cardTitle}`}>
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 48vw" />
                  </Link>
                  <div><p>{String(index + 2).padStart(2, "0")} / {service.category}</p><h3>{service.cardTitle}</h3><span>{service.description}</span><Link href={`/services/${service.slug}`}>View service</Link></div>
                </article>
              ))}
            </div>

            <div className="home-service-ledger">
              {serviceLedger.map((service, index) => (
                <article key={service.id} {...aosProps("fade-up", { delay: (index + 3) * 65 })}>
                  <Link href={`/services/${service.slug}`} className="home-service-ledger-image" aria-label={`Explore ${service.cardTitle}`}>
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 36vw, 18vw" />
                  </Link>
                  <div><p>{String(index + 4).padStart(2, "0")}</p><h3>{service.cardTitle}</h3><span>{service.description}</span></div>
                  <Link href={`/services/${service.slug}`} className="home-service-ledger-link">View service <FaArrowRight aria-hidden="true" /></Link>
                </article>
              ))}
            </div>
          </div>
          <Link className="home-arrow-link home-arrow-link--dark" href="/services">See all services <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-engineering" aria-labelledby="engineering-title">
        <div className="wrap home-engineering-grid">
          <figure className="home-engineering-image" {...aosProps("fade-right")}>
            <Image src="/images/services/it-support.jpg" alt="Illustrative computer technical support workspace" fill sizes="(max-width: 820px) 100vw, 52vw" />
          </figure>
          <div className="home-engineering-copy" {...aosProps("fade-left", { delay: 80 })}>
            <p className="home-kicker">COMPUTER ENGINEERING &amp; IT SUPPORT</p>
            <h2 id="engineering-title">Practical support for the technology you rely on.</h2>
            <p>When a computer needs attention, the next step should be clear. DGCC TECH provides hands-on computer repairs and setup for homes and offices, alongside remote IT support for clients outside the local area.</p>
            <p>Bring the issue, the device or the setup requirement to the conversation. The team can discuss the work needed and provide a quotation for the agreed support.</p>
            <Link href="/services/computer-engineering-it-support" className="home-arrow-link home-arrow-link--dark">Explore computer engineering support <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-showroom" aria-labelledby="showroom-title">
        <div className="wrap home-showroom-grid">
          <div className="home-showroom-copy" {...aosProps("fade-right")}>
            <p className="home-kicker">DGCC TECH SHOWROOM</p>
            <h2 id="showroom-title">Technology products without the guesswork.</h2>
            <p>Looking for a computer, an upgrade or the right peripheral? We discuss current options around your work, study or everyday needs. Availability, specifications and prices are confirmed directly with the team.</p>
            <a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href={createWhatsAppHref("Hello DGCC TECH, I would like to enquire about available computers or accessories.")}>Enquire about products <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </div>
          <div className="home-showroom-photos" {...aosProps("fade-left", { delay: 80 })}>
            <figure className="home-showroom-primary"><Image src="/images/services/computer-sales.jpg" alt="Illustrative laptop and desktop equipment" fill sizes="(max-width: 820px) 100vw, 45vw" /></figure>
            <figure className="home-showroom-secondary"><Image src="/images/services/computer-accessories.jpg" alt="Illustrative computer accessories" fill sizes="(max-width: 820px) 52vw, 22vw" /></figure>
          </div>
        </div>
      </section>

      <section className="home-printing section" aria-labelledby="printing-title">
        <div className="wrap home-printing-grid">
          <div className="home-printing-copy" {...aosProps("fade-right")}>
            <p className="home-kicker">PRINTING &amp; PRINT PRODUCTION</p>
            <h2 id="printing-title">From the artwork to materials people can hold.</h2>
            <p>DGCC TECH provides general printing and merchandising for business and everyday needs. Discuss business cards, flyers, banners, receipts, ID cards, calendars, T-shirts, mugs and other agreed printed materials with the same team that can support the design.</p>
            <Link href="/services/general-printing" className="home-arrow-link home-arrow-link--dark">Explore printing services <FaArrowRight aria-hidden="true" /></Link>
          </div>
          <figure className="home-printing-image" {...aosProps("fade-left", { delay: 80 })}>
            <Image src="/images/services/printing.jpg" alt="Illustrative professional printing equipment" fill sizes="(max-width: 820px) 100vw, 48vw" />
          </figure>
        </div>
      </section>

      <section className="home-choice" aria-labelledby="choice-title">
        <div className="wrap">
          <div className="home-choice-heading" {...aosProps("fade-down")}>
            <p className="home-kicker">WHY BUSINESSES CHOOSE DGCC TECH</p>
            <h2 id="choice-title">A useful conversation can cover more than one need.</h2>
          </div>
          <div className="home-choice-list">
            {[
              ["Practical technical expertise", "Discuss repairs, setup, IT support and digital work with people focused on the task in front of you."],
              ["Connected capabilities", "Bring technology, creative production, equipment and learning into one company conversation."],
              ["Business-focused support", "Plan around what your organisation, team, customers or learners need to do next."],
              ["Skills that can be put to work", "Explore practical technology and creative training through DGCC TECH Academy."],
            ].map(([title, copy], index) => <article key={title} {...aosProps("fade-up", { delay: index * 55 })}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <Link href="/about" className="home-arrow-link home-arrow-link--dark">Learn more about DGCC TECH <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-audiences section" aria-labelledby="audiences-title">
        <div className="wrap home-audiences-grid">
          <div {...aosProps("fade-right")}><p className="home-kicker">WHO WE WORK WITH</p><h2 id="audiences-title">Technology support for the people and organisations moving work forward.</h2></div>
          <div className="home-audience-list" {...aosProps("fade-left", { delay: 80 })}>
            <span>Businesses</span><span>Schools</span><span>Online sellers</span><span>Individuals</span><span>Clients abroad</span>
          </div>
          <Link href="/about" className="home-arrow-link home-arrow-link--dark">Meet the people we serve <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-proof section" aria-labelledby="portfolio-title">
        <div className="wrap home-proof-grid">
          <div className="home-proof-images" {...aosProps("fade-right")}><figure><Image src="/images/services/web-development.jpg" alt="Illustrative website development workspace" fill sizes="(max-width: 820px) 100vw, 45vw" /></figure><figure><Image src="/images/services/branding.jpg" alt="Illustrative graphic design workspace" fill sizes="(max-width: 820px) 55vw, 24vw" /></figure></div>
          <div {...aosProps("fade-left", { delay: 80 })}><p className="home-kicker">PORTFOLIO APPROACH</p><h2 id="portfolio-title">Show the work responsibly, then let it speak.</h2><p>We share work only when it can be shown responsibly and with the right permission. Explore the types of website, design and print-production thinking DGCC TECH can bring to your next project, without overstating work that cannot be publicly shared.</p><Link href="/portfolio" className="home-arrow-link home-arrow-link--dark">Explore our portfolio approach <FaArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="home-academy-feature">
        <div className="wrap home-academy-feature-grid">
          <div className="home-academy-image" {...aosProps("fade-right")}><Image src="/images/services/tech-training.jpg" alt="Illustrative technology training session" fill sizes="(max-width: 820px) 100vw, 50vw" /></div>
          <div {...aosProps("fade-left", { delay: 80 })}><p className="home-kicker">DGCC TECH ACADEMY</p><h2>Learn skills you can put to work.</h2><p>Practical training is available in web development, graphic design, computer engineering and cyber security, with options for in-person and online learning.</p><Link className="btn btn-outline" href="/academy">Explore the Academy <FaArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="home-conversation" aria-labelledby="conversation-title">
        <div className="wrap home-conversation-grid" {...aosProps("fade-up")}>
          <div><p className="home-kicker">MAKE THE NEXT MOVE</p><h2 id="conversation-title">Bring us the question. We&apos;ll help connect the dots.</h2><p>Talk to DGCC TECH about a project, service quotation, technology product or training opportunity.</p></div>
          <div className="home-conversation-actions"><Link className="btn btn-gold" href="/contact">Start a conversation <FaArrowRight aria-hidden="true" /></Link><a href={createWhatsAppHref("Hello DGCC TECH, I would like to discuss a project, request a quotation or enquire about training.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <FaArrowUpRightFromSquare aria-hidden="true" /></a></div>
        </div>
      </section>
    </div>
  );
}
