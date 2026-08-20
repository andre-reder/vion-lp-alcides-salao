import { motion } from "framer-motion";
import { Phone, MessageCircle, Briefcase, MapPin, ArrowUp } from "lucide-react";

const PHONE_DISPLAY = "(12) 99732-8214";
const PHONE_TEL = "+5512997328214";
const WHATSAPP_URL = `https://wa.me/5512997328214?text=${encodeURIComponent(
  "Olá! Gostaria de agendar um horário no Alcides Salão."
)}`;
const FACEBOOK_URL = "https://www.facebook.com/106317664620338";

const navLinks = [
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

export default function Footer() {
  return (
    <footer className="relative bg-[#1A130E] text-[#F4EFE6] overflow-hidden">
      {/* Textura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(176,130,71,0.10) 0%, transparent 45%)",
        }}
      />

      <div className="container-x relative z-10 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[#B08247]/50 text-[#D9B98A] font-display text-xl leading-none">
                A
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-wide">Alcides</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9B98A]/70 mt-0.5">
                  Salão
                </span>
              </div>
            </div>
            <p className="text-[13.5px] leading-relaxed text-[#EDE5D6]/70 max-w-xs">
              Ofício de cuidado em São José dos Campos. Cortes autorais, barba, coloração e
              tratamentos com tempo e atenção para cada cliente.
            </p>
          </motion.div>

          {/* Navegação */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            aria-label="Navegação do rodapé"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D9B98A] font-medium mb-5">
              Navegação
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#EDE5D6]/75 hover:text-[#D9B98A] transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D9B98A] font-medium mb-5">
              Contato
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-[14px] text-[#EDE5D6]/80 hover:text-[#D9B98A] transition-colors"
                >
                  <Phone size={16} strokeWidth={1.7} className="text-[#D9B98A]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-[#EDE5D6]/80 hover:text-[#D9B98A] transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.7} className="text-[#D9B98A]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-[#EDE5D6]/80 hover:text-[#D9B98A] transition-colors"
                >
                  <Briefcase size={16} strokeWidth={1.7} className="text-[#D9B98A]" />
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#EDE5D6]/80">
                <MapPin size={16} strokeWidth={1.7} className="text-[#D9B98A]" />
                São José dos Campos
              </li>
            </ul>
          </motion.div>

          {/* CTA voltar ao topo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#D9B98A] font-medium mb-1">
              Pronto para começar?
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-[#B08247] text-white font-medium text-[14px] px-6 py-3.5 rounded-full hover:bg-[#D9B98A] hover:text-[#1A130E] transition-colors duration-300"
            >
              Agendar visita
            </motion.a>
            <a
              href="#topo"
              className="inline-flex items-center gap-2 text-[13px] text-[#EDE5D6]/70 hover:text-[#D9B98A] transition-colors link-underline self-start"
            >
              <ArrowUp size={14} strokeWidth={1.8} />
              Voltar ao topo
            </a>
          </motion.div>
        </div>

        {/* Rodapé legal */}
        <div className="mt-14 pt-8 border-t border-[#B08247]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#EDE5D6]/65 text-center sm:text-left">
            © {new Date().getFullYear()} Alcides Salão · São José dos Campos. Proposta conceitual
            não oficial.
          </p>
          <p className="text-[12px] text-[#EDE5D6]/65">
            Conteúdo e dados podem ser fictícios e devem ser confirmados antes da publicação.
          </p>
        </div>
      </div>
    </footer>
  );
}
