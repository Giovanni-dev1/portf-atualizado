import type { Metadata } from "next";
import styles from "./sobre.module.css";
import {
  aboutCopy,
  education,
  experiences,
  skillGroups,
  languages,
  studentLeadership,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Trajetória, princípios, experiência, formação e competências de Giovanni Crescenzi Bogner.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <article>
      <header className={`container ${styles.head}`}>
        <span className="mono-label">Sobre</span>
        <h1 className={styles.title} style={{ marginTop: 16 }}>
          Trajetória, princípios e formação
        </h1>
      </header>

      <div className={`container ${styles.grid}`}>
        <div className={styles.paragraphs}>
          {aboutCopy.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <aside className={styles.rail}>
          <div className={styles.railBlock}>
            <h2>Princípios</h2>
            <ul className={styles.principles}>
              {aboutCopy.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className={styles.railBlock}>
            <h2>Formação</h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>
              {education.course}
            </p>
            <p style={{ color: "var(--ink-soft)", marginTop: 4 }}>
              {education.institution} · {education.status}
            </p>
          </div>

          <div className={styles.railBlock}>
            <h2>{studentLeadership.title}</h2>
            <ul className={styles.principles}>
              {studentLeadership.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Experiência</h2>
        <div className={styles.expList}>
          {experiences.map((exp) => (
            <div key={exp.org + exp.role} className={styles.expItem}>
              <span className={styles.expPeriod}>{exp.period}</span>
              <div>
                <p className={styles.expRole}>{exp.role}</p>
                <p className={styles.expOrg}>
                  {exp.org}
                  {exp.mode ? ` · ${exp.mode}` : ""}
                </p>
                <ul className={styles.expBullets}>
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Competências</h2>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.skillGroup}>
              <h3>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`} style={{ borderBottom: "none" }}>
        <h2 className={styles.sectionTitle}>Idiomas</h2>
        <div className={styles.langRow}>
          {languages.map((l) => (
            <div key={l.name} className={styles.langItem}>
              <strong>{l.name}</strong>
              <span style={{ color: "var(--ink-soft)" }}>{l.level}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
