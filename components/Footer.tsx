import Link from "next/link";
import { site } from "@/content/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <h2>Dossiê</h2>
          <p style={{ maxWidth: 320, color: "var(--ink-soft)" }}>
            Customer Success, produto, suporte técnico e desenvolvimento aplicados a soluções que
            precisam funcionar no mundo real.
          </p>
        </div>
        <div className={styles.col}>
          <h2>Navegar</h2>
          <ul className={styles.links}>
            <li>
              <Link href="/#trabalho">Trabalho</Link>
            </li>
            <li>
              <Link href="/#trajetoria">Trajetória</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Contato</h2>
          <ul className={styles.links}>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {year} {site.name}</span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
