"use client";

import { useEffect, useState } from "react";

export default function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    function update() {
      const formatted = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      }).format(new Date());
      setTime(formatted);
    }
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <span className="mono-label" suppressHydrationWarning>
      {time} em Sorocaba
    </span>
  );
}
