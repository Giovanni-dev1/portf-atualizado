import type { Metadata } from "next";
import styles from "./contato.module.css";
import CopyEmailButton from "@/components/CopyEmailButton";
import { site } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Contato",
  description: "Maneiras simples de conversar com Giovanni Crescenzi Bogner.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <article>
      <header className={`container ${styles.head}`}>
        <span className="mono-label">Contato</span>
        <h1 className={styles.title} style={{ marginTop: 16 }}>
          Vamos conversar
        </h1>
        <p className={styles.intro}>
          O jeito mais direto de falar comigo é por e-mail ou LinkedIn. Respondo pessoalmente.
        </p>
      </header>

      <div className={`container ${styles.grid}`}>
        <div className={styles.card}>
          <span className={styles.cardLabel}>E-mail</span>
          <span className={styles.cardValue}>{site.email}</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className={styles.cardAction} href={`mailto:${site.email}`}>
              Enviar e-mail
            </a>
            <CopyEmailButton className={styles.cardAction} />
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardLabel}>LinkedIn</span>
          <span className={styles.cardValue}>Giovanni Crescenzi Bogner</span>
          <a
            className={styles.cardAction}
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            Abrir perfil →
          </a>
        </div>

        <div className={styles.card}>
          <span className={styles.cardLabel}>GitHub</span>
          <span className={styles.cardValue}>@Giovanni-dev1</span>
          <a
            className={styles.cardAction}
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver repositórios →
          </a>
        </div>
      </div>

      <div className={`container ${styles.note}`}>
        <p>
          Sem formulário nesta página: prefiro garantir uma resposta de verdade a simular um canal
          que não funciona.
        </p>
      </div>
    </article>
  );
}
