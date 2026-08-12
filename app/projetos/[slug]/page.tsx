import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/portfolio";
import styles from "./case.module.css";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((item) => item.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/projetos/${c.slug}` },
    openGraph: {
      title: c.title,
      description: c.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((item) => item.slug === slug);
  if (!c) notFound();

  const index = caseStudies.findIndex((item) => item.slug === slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <header className={`container ${styles.head}`}>
        <Link href="/#trabalho" className={styles.back}>
          ← Trabalho selecionado
        </Link>
        <div className={styles.meta}>
          <span className={styles.num}>{c.number}</span>
          <span className={styles.status}>{c.status}</span>
          <span className={styles.type}>{c.type}</span>
        </div>
        <h1 className={styles.title}>{c.title}</h1>
        <p className={styles.summary}>{c.summary}</p>

        {!c.hasRealImage && (
          <div className={styles.visual} role="img" aria-label={`Evidência visual pendente para ${c.title}`}>
            <span className={styles.visualLabel}>
              FIG. {c.number} — captura real deste projeto ainda não fornecida
            </span>
          </div>
        )}
      </header>

      <div className={`container ${styles.body}`}>
        <aside className={styles.rail}>
          <div className={styles.railBlock}>
            <span className={styles.label}>Papel de Giovanni</span>
            <p className={styles.value}>{c.role}</p>
          </div>
          <div className={styles.railBlock}>
            <span className={styles.label}>Ferramentas e stack</span>
            <div className={styles.tags}>
              {c.stack.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          {c.links && c.links.length > 0 && (
            <div className={styles.railBlock}>
              <span className={styles.label}>Links</span>
              <div className={styles.linkRow} style={{ flexDirection: "column" }}>
                {c.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer noopener">
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>

        <div className={styles.content}>
          <section className={styles.block}>
            <span className={styles.blockLabel}>Contexto</span>
            <p>{c.context}</p>
          </section>

          <section className={styles.block}>
            <span className={styles.blockLabel}>Problema</span>
            <h2 className={styles.blockTitle}>{c.problem}</h2>
          </section>

          <section className={styles.block}>
            <span className={styles.blockLabel}>Processo</span>
            <ul className={styles.list}>
              {c.process.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          {c.decisions && (
            <section className={styles.block}>
              <span className={styles.blockLabel}>Decisões</span>
              <ul className={styles.list}>
                {c.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </section>
          )}

          {c.solutionPoints && (
            <section className={styles.block}>
              <span className={styles.blockLabel}>Solução</span>
              <ul className={styles.list}>
                {c.solutionPoints.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
          )}

          {c.roadmap && (
            <section className={styles.block}>
              <span className={styles.blockLabel}>Roadmap — ainda não construído</span>
              <ul className={styles.list}>
                {c.roadmap.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.block}>
            <span className={styles.blockLabel}>Resultado</span>
            <p>{c.result}</p>
          </section>

          {c.confidentialityNote && (
            <section className={styles.block}>
              <p className={styles.note}>{c.confidentialityNote}</p>
            </section>
          )}

          <section className={styles.block}>
            <span className={styles.blockLabel}>Aprendizados</span>
            <ul className={styles.list}>
              {c.learnings.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>

          {c.nextSteps && (
            <section className={styles.block}>
              <span className={styles.blockLabel}>Próximos passos</span>
              <p>{c.nextSteps}</p>
            </section>
          )}
        </div>
      </div>

      <nav className={`container ${styles.footNav}`} aria-label="Navegação entre estudos de caso">
        {prev ? (
          <Link href={`/projetos/${prev.slug}`}>← {prev.number} · {prev.title}</Link>
        ) : (
          <span />
        )}
        <Link href={`/projetos/${next.slug}`}>{next.number} · {next.title} →</Link>
      </nav>
    </article>
  );
}
