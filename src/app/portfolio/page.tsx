import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaShieldHalved } from "react-icons/fa6";
import { aosProps } from "@/lib/aos";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore DGCC TECH's approach to technology, creative and business projects.",
};

export default function PortfolioPage() {
  return (
    <main className="page">
      <section className="hero navy">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-image" {...aosProps("fade-right")}>
              <Image src="/images/services/web-development.jpg" alt="Workspace representing digital project work" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-photo" />
            </div>
            <div className="hero-copy" {...aosProps("fade-left", { delay: 80 })}>
              <p className="hero-eyebrow">Portfolio</p>
              <h1>Work presented with care and context.</h1>
              <p className="lede">DGCC TECH approaches digital, technical and creative work as a response to a real need. We share project work only when it can be shown responsibly and with the right permission.</p>
              <div className="cta"><Link className="btn btn-gold" href="/contact">Discuss your project <FaArrowRight aria-hidden="true" /></Link><Link className="btn btn-ghost" href="/services">Explore services</Link></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div {...aosProps("fade-right")}><p className="service-eyebrow">A responsible showcase</p><h2>Good work needs the right permission to be public.</h2></div>
          <div className="prose" {...aosProps("fade-left", { delay: 80 })}><p>Client names, systems, designs and performance information can be sensitive. Rather than create sample client stories or claim work we cannot verify publicly, this page explains the kinds of outcomes we help customers plan for.</p><p>When suitable approved examples are available, this space can grow into a detailed portfolio with project context, the challenge addressed, the work delivered and any results the client has approved for sharing.</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap"><div className="section-head" {...aosProps("fade-down")}><p className="service-eyebrow">Areas of work</p><h2>Projects can connect across several disciplines.</h2><p>A technology need may involve more than one kind of expertise. These are the areas DGCC TECH can discuss with you.</p></div><div className="capability-grid">{[
          ["Digital presence", "Website design and development for organisations that need a clear, usable online home."],
          ["Technology support", "Computer engineering, setup and IT support to help keep day-to-day work moving."],
          ["Security support", "Practical conversations about protecting websites, data and business email."],
          ["Brand and print", "Design and print work that gives communication materials a consistent direction."],
        ].map(([title, text], index) => <article className="capability-card" key={title} {...aosProps("fade-up", { delay: index * 65 })}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>
      <section className="section"><div className="wrap portfolio-note" {...aosProps("zoom-in")}><FaShieldHalved aria-hidden="true" /><div><h2>Have a project you would like to discuss?</h2><p>Share the outcome you need, the people it is for and any useful reference material. The team can help identify the appropriate service and next step.</p></div><Link className="btn btn-gold" href="/contact">Start a Project <FaArrowRight aria-hidden="true" /></Link></div></section>
    </main>
  );
}
