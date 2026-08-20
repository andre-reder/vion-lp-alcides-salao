import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [30, 60],
    ["rgba(26, 19, 14, 0.82)", "rgba(244, 239, 230, 0.96)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [30, 60],
    ["rgba(226, 214, 196, 0)", "rgba(226, 214, 196, 1)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [30, 60],
    ["0 0 0 rgba(0,0,0,0)", "0 6px 30px rgba(31,23,18,0.08)"]
  );

  // Detectar viewport para renderização condicional (evita display:none invisíveis)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detectar seção ativa
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll quando menu abre
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("menu:toggle", { detail: { open: menuOpen } }));
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fechar menu com Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          boxShadow: headerShadow,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          backdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(6px)",
        }}
        className="sticky top-0 left-0 right-0 z-50"
      >
        <nav className="container-x flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#topo"
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="Alcides Salão — início"
          >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B08247]/50 text-[#B08247] font-display text-lg sm:text-xl leading-none transition-colors group-hover:bg-[#B08247] group-hover:text-white">
              A
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span
                className="font-display text-xl tracking-wide transition-colors"
                style={{ color: scrolled ? "#1F1712" : "#F4EFE6" }}
              >
                Alcides
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.25em] mt-0.5 transition-colors"
                style={{ color: scrolled ? "#6B5A4E" : "#D9B98A" }}
              >
                Salão
              </span>
            </span>
          </a>

          {/* Links desktop */}
          {isDesktop && (
            <ul className="flex items-center gap-5">
              {links.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`link-underline text-[13px] font-medium tracking-wide transition-colors ${
                        isActive
                          ? "text-[#B08247]"
                          : scrolled
                            ? "text-[#2A1F18] hover:text-[#B08247]"
                            : "text-[#F4EFE6] hover:text-[#D9B98A]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {/* CTA desktop */}
          {isDesktop && (
            <div className="flex items-center gap-3">
              <a
                href="tel:+5512997328214"
                className="flex items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#B08247]"
                style={{ color: scrolled ? "#2A1F18" : "#F4EFE6" }}
              >
                <Phone size={15} strokeWidth={1.8} />
                <span>(12) 99732-8214</span>
              </a>
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-[#1F1712] text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-[#B08247] transition-colors duration-300"
              >
                <Calendar size={15} strokeWidth={1.8} />
                Agendar
              </motion.a>
            </div>
          )}

          {/* Botão mobile */}
          {!isDesktop && (
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              className="flex items-center justify-center w-10 h-10 -mr-2 transition-colors"
              style={{ color: scrolled ? "#1F1712" : "#F4EFE6" }}
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>
          )}
        </nav>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55]"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#1A130E]/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            {/* Painel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-[#F4EFE6] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex items-center justify-between h-16 px-5 border-b border-[#E2D6C4]">
                <span className="font-display text-xl text-[#1F1712]">Alcides</span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="flex items-center justify-center w-10 h-10 -mr-2 text-[#1F1712] hover:text-[#B08247] transition-colors"
                >
                  <X size={22} strokeWidth={1.8} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-3.5 text-lg font-display text-[#1F1712] border-b border-[#E2D6C4]/60 hover:text-[#B08247] transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="px-5 pb-8 pt-4 border-t border-[#E2D6C4] flex flex-col gap-3">
                <a
                  href="tel:+5512997328214"
                  className="flex items-center justify-center gap-2 text-[#1F1712] font-medium py-3 rounded-full border border-[#C9B89E] hover:border-[#B08247] hover:text-[#B08247] transition-colors"
                >
                  <Phone size={16} strokeWidth={1.8} />
                  (12) 99732-8214
                </a>
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#1F1712] text-white font-medium py-3.5 rounded-full hover:bg-[#B08247] transition-colors"
                >
                  <Calendar size={16} strokeWidth={1.8} />
                  Agendar visita
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
