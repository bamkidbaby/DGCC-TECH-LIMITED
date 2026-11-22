import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa6";
import { aosProps } from "@/lib/aos";
import { createWhatsAppHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "DGCC Tech Academy",
  description: "Explore practical technology training from DGCC Tech Academy.",
};

export default function AcademyPage() {
  const enquiryHref = createWhatsAppHref("Hello DGCC TECH, I am interested in technology training. Please share your available courses and enrolment information.");
  return (
    <main className="page">
      <section className="hero navy"><div className="wrap"><div className="hero-grid"><div className="hero-image" {...aosProps("fade-right")}><Image src="/images/services/tech-training.jpg" alt="Technology learning environment" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-photo" /></div><div className="hero-copy" {...aosProps("fade-left", { delay: 80 })}><p className="hero-eyebrow">DGCC Tech Academy</p><h1>Practical learning for the technology in front of you.</h1><p className="lede">The Academy creates a route for people who want to build useful technology and creative skills through practical learning opportunities.</p><div className="cta"><a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href={enquiryHref}>Enrol Now <FaGraduationCap aria-hidden="true" /></a><Link className="btn btn-ghost" href="/contact">Ask a question</Link></div></div></div></div></section>
      <section className="section"><div className="wrap split"><div {...aosProps("fade-right")}><p className="service-eyebrow">Learn with purpose</p><h2>Skills make technology more useful.</h2></div><div className="prose" {...aosProps("fade-left", { delay: 80 })}><p>Technology changes most lives when people can use it with confidence. DGCC Tech Academy focuses on practical areas that connect to real digital, technical and creative work.</p><p>Before enrolling, contact the team to discuss the learning area you are interested in and to receive current information about available courses and enrolment.</p></div></div></section>
      <section className="section alt"><div className="wrap"><div className="section-head" {...aosProps("fade-down")}><p className="service-eyebrow">Learning areas</p><h2>Topics you can enquire about.</h2><p>Training is offered in person and online. Availability and course arrangements should be confirmed directly with the team.</p></div><div className="capability-grid">{[
        ["Web development", "Learn the foundations and practical work involved in creating modern websites."],
        ["Computer engineering", "Build practical understanding around computer systems, setup and technical support."],
        ["Graphic design", "Develop design skills for visual communication, branding and print materials."],
        ["Cybersecurity", "Explore practical cybersecurity learning for the digital environments people use every day."],
      ].map(([title, text], index) => <article className="capability-card" key={title} {...aosProps("fade-up", { delay: index * 65 })}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section"><div className="wrap process-grid academy-process">{[["Ask about a learning area", "Tell the team what you want to learn and any experience you already have."],["Confirm current options", "Discuss available courses, enrolment information and the format that is suitable for you."],["Prepare to learn", "Receive the relevant information you need before getting started."],["Keep building", "Apply what you learn through practical technology and creative work."]].map(([title, text], index) => <article key={title} {...aosProps("fade-up", { delay: index * 65 })}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="cta-band navy"><div className="wrap cta-inner"><div><h2>Ready to explore a learning path?</h2><p>Send an enquiry to receive current information about the training areas available.</p></div><a className="btn btn-gold" target="_blank" rel="noopener noreferrer" href={enquiryHref}>Enrol Now <FaArrowRight aria-hidden="true" /></a></div></section>
    </main>
  );
}
