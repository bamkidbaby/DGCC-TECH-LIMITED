import Link from "next/link";
import { aosProps } from "@/lib/aos";
import { contactDetails } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div {...aosProps("fade-up", { duration: 600 })}>
          <p className="foot-slogan">Connecting dots in tech.</p>
          <p>
            DGCC Tech Limited
            <br />
            {contactDetails.address}
          </p>
        </div>
        <div {...aosProps("fade-up", { delay: 70, duration: 600 })}>
          <h2>Pages</h2>
          <div className="foot-links">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div {...aosProps("fade-up", { delay: 130, duration: 600 })}>
          <h2>Reach us</h2>
          <div className="foot-links">
            <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
        </div>
      </div>
      <div className="wrap legal">
        &copy; {new Date().getFullYear()} DGCC Tech Limited.
      </div>
    </footer>
  );
}
