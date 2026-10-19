"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import { contactDetails } from "@/lib/contact";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header navy">
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="DGCC Tech Limited, home">
          <Image src="/images/logo.png" alt="" width={40} height={40} priority />
          <span className="brand-word">DGCC TECH LTD</span>
        </Link>

        <nav
          className={`nav ${menuOpen ? "open" : ""}`}
          id="nav"
          aria-label="Main"
        >
          {navigation.map(({ label, href }) => {
            const isActive =
              pathname === href ||
              (href === "/services" && pathname.startsWith("/services/"));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <a className="btn btn-gold btn-sm" href={contactDetails.phoneHref}>
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
  );
}
