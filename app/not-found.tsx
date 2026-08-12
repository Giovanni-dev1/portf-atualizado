import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ paddingBlock: "96px", textAlign: "center" }}>
      <span className="mono-label">Erro 404</span>
      <h1 style={{ fontSize: "2.4rem", marginTop: 16 }}>Esta página não existe no dossiê.</h1>
      <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>
        O endereço pode ter mudado ou nunca ter existido.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 32,
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          border: "1px solid var(--ink)",
          padding: "12px 20px",
          textDecoration: "none",
        }}
      >
        Voltar à página inicial
      </Link>
    </div>
  );
}
