"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/portfolio";
import styles from "./Header.module.css";

const SECTION_IDS = ["trabalho", "trajetoria"];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  function isCurrent(href: string) {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeSection === href.replace("/#", "");
    }
    return pathname === href;
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label={`${site.name} — página inicial`}>
          <span className={styles.monogram} aria-hidden="true">
            {site.monogram}
          </span>
          <span className={styles.name}>{site.name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              aria-current={isCurrent(item.href) ? "true" : undefined}
            >
              {item.label}
            </Link>
          ))}
          {site.resumeHref && (
            <a className={styles.resume} href={site.resumeHref} download>
              Baixar currículo
            </a>
          )}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className={styles.mobileNav} aria-label="Navegação móvel">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          {site.resumeHref && (
            <a href={site.resumeHref} download onClick={() => setOpen(false)}>
              Baixar currículo
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
