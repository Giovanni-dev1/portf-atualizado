"use client";

import { useState } from "react";
import { site } from "@/content/portfolio";

export default function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Sem permissão de clipboard: o e-mail continua visível e clicável via mailto.
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? "E-mail copiado" : "Copiar e-mail"}
      <span role="status" aria-live="polite" className="visually-hidden">
        {copied ? "E-mail copiado para a área de transferência" : ""}
      </span>
    </button>
  );
}
