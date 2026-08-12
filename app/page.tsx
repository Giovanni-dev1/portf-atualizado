import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Reveal from "@/components/Reveal";
import LocalClock from "@/components/LocalClock";
import {
  site,
  now,
  evidenceStrip,
  howHeWorks,
  caseStudies,
  experiences,
  labProjects,
} from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Giovanni Crescenzi Bogner — Cliente, Produto e Tecnologia",
  description:
    "Portfólio de Giovanni Crescenzi Bogner: Customer Success, suporte técnico, desenvolvimento, automação e projetos digitais construídos a partir de problemas reais.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container">
        <div className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>Cliente × Produto × Tecnologia</span>
            <h1 className={styles.h1}>
              Entre o problema do cliente e a solução técnica, eu construo a ponte.
            </h1>
            <p className={styles.heroText}>
              Sou {site.name}. Atuo com Customer Success, suporte técnico e desenvolvimento de
              soluções digitais — entendendo o contexto, organizando processos e transformando
              necessidades reais em entregas que funcionam.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="#trabalho">
                Conheça meu trabalho
              </a>
              <Link className={styles.ctaSecondary} href="/contato">
                Fale comigo
              </Link>
            </div>
          </div>

          <div className={styles.nowCard}>
            <p className={styles.nowRole}>{now.role}</p>
            <div className={styles.nowMeta}>
              <span>{now.mode}</span>
              <div className={styles.divider} />
              <span>{now.focus}</span>
              <div className={styles.divider} />
              <LocalClock />
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE STRIP */}
      <section className="container">
        <div className={styles.evidenceGrid}>
          {evidenceStrip.map((item) => (
            <p key={item} className={styles.evidenceItem}>
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* HOW HE WORKS */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Como Giovanni opera</h2>
          <span className="mono-label">Processo · 3 movimentos</span>
        </div>
        <div className={styles.howGrid}>
          {howHeWorks.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className={styles.howStep}>
                <span className={styles.howNum}>{item.step}</span>
                <h3 className={styles.howTitle}>{item.title}</h3>
                <p className={styles.howBody}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="trabalho" className={`container ${styles.section}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Trabalho selecionado</h2>
          <span className="mono-label">04 estudos de caso</span>
        </div>
        <ul className={styles.caseList}>
          {caseStudies.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 60}>
              <div className={styles.caseItem}>
                <div>
                  <span className={styles.caseNum}>{c.number}</span>
                  <br />
                  <span className={styles.caseStatus}>{c.status}</span>
                </div>
                <div>
                  <h3 className={styles.caseTitle}>{c.title}</h3>
                  <p className={styles.caseLine}>{c.oneLiner}</p>
                  <p className={styles.caseLine} style={{ marginTop: 8 }}>
                    <strong>Papel:</strong> {c.role}
                  </p>
                  <div className={styles.caseTags}>
                    {c.stack.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link className={styles.caseOpen} href={`/projetos/${c.slug}`}>
                    Abrir estudo de caso →
                  </Link>
                </div>
                <div className={styles.caseVisual} role="img" aria-label={`Evidência visual pendente para ${c.title}`}>
                  <span className={styles.caseVisualLabel}>
                    FIG. {c.number}
                    <br />
                    captura pendente
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* TRAJETÓRIA */}
      <section id="trajetoria" className={`container ${styles.section}`}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Trajetória resumida</h2>
          <span className="mono-label">Responsabilidade crescente</span>
        </div>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.org + exp.role} className={styles.timelineItem}>
              <span className={styles.timelinePeriod}>{exp.period}</span>
              <div>
                <p className={styles.timelineRole}>{exp.role}</p>
                <p className={styles.timelineOrg}>
                  {exp.org}
                  {exp.mode ? ` · ${exp.mode}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <Link href="/sobre" className={styles.caseOpen}>
            Ver trajetória completa em Sobre →
          </Link>
        </div>
      </section>

      {/* LAB */}
      <section className={`container ${styles.section}`} style={{ borderBottom: "none" }}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Laboratório</h2>
          <span className="mono-label">Experimentos e curiosidade</span>
        </div>
        <div className={styles.labGrid}>
          {labProjects.map((p) => (
            <div key={p.title} className={styles.labItem}>
              <span className={styles.labStatus}>{p.status}</span>
              <h3 className={styles.labTitle}>{p.title}</h3>
              <p className={styles.labDesc}>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
