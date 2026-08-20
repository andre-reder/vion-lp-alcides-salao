import { useEffect, useState } from "react";

export default function ConceptBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("concept-banner-dismissed");
    if (dismissed) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      style={{ backgroundColor: "#1A130E" }}
      className="fixed bottom-4 right-4 z-[60] max-w-[320px] bg-[#1A130E]/95 backdrop-blur-sm text-[#F4EFE6] text-[11px] leading-relaxed tracking-wide px-4 py-3 rounded-lg shadow-lg flex items-start gap-3"
    >
      <span className="opacity-90 flex-1">
        Proposta conceitual não oficial. Conteúdo e dados podem ser fictícios e devem ser confirmados antes da publicação.
      </span>
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem("concept-banner-dismissed", "1");
          setVisible(false);
        }}
        aria-label="Fechar aviso"
        className="shrink-0 w-5 h-5 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors mt-0.5"
      >
        <span className="sr-only">Fechar</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
