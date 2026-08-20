import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  Briefcase,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const PHONE_DISPLAY = "(12) 99732-8214";
const PHONE_TEL = "+5512997328214";
const WHATSAPP_URL = `https://wa.me/5512997328214?text=${encodeURIComponent(
  "Olá! Gostaria de agendar um horário no Alcides Salão."
)}`;
const FACEBOOK_URL = "https://www.facebook.com/106317664620338";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", contato: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sem backend — encaminha para WhatsApp com a mensagem pré-preenchida
    const text = `Olá! Sou ${form.nome || "um cliente"}. ${
      form.mensagem || "Gostaria de agendar um horário."
    } (Contato: ${form.contato || "não informado"})`;
    const url = `https://wa.me/5512997328214?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const contactCards = [
    {
      icon: Phone,
      label: "Telefone",
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
      note: "Seg a Sáb, horário comercial",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chamar no WhatsApp",
      href: WHATSAPP_URL,
      note: "Resposta mais rápida",
    },
    {
      icon: Briefcase,
      label: "Facebook",
      value: "Alcides Salão",
      href: FACEBOOK_URL,
      note: "Página oficial",
    },
  ];

  return (
    <section
      id="contato"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#EDE5D6] overflow-hidden"
    >
      {/* Decoração de fundo */}
      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-[#B08247]/[0.06] pointer-events-none"
      />

      <div className="container-x relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
            Vamos conversar
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
            Agende sua visita
            <br className="hidden sm:block" /> ao{" "}
            <span className="italic text-[#B08247]">Alcides Salão</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#3A2D24] max-w-2xl mx-auto">
            Escolha o canal que preferir. Em poucos minutos combinamos o melhor horário e tiramos
            qualquer dúvida antes da sua visita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Coluna esquerda — contatos + info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-5"
          >
            {/* Cards de contato */}
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex items-center gap-5 bg-[#FBF7F0] border border-[#E2D6C4] rounded-[var(--radius-card)] p-5 sm:p-6 hover:border-[#D9B98A] hover:shadow-[var(--shadow-subtle)] transition-colors duration-300"
                >
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[#1F1712] text-[#D9B98A] group-hover:bg-[#B08247] group-hover:text-white transition-colors duration-300">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#8A6234] font-medium mb-1">
                      {card.label}
                    </p>
                    <p className="font-display text-xl text-[#1F1712] leading-tight truncate">
                      {card.value}
                    </p>
                    <p className="text-[12px] text-[#6B5A4E] mt-1">{card.note}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#C9B89E] group-hover:text-[#B08247] group-hover:translate-x-1 transition-all duration-300"
                  />
                </motion.a>
              );
            })}

            {/* Bloco de info local */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 bg-[#1A130E] text-[#F4EFE6] rounded-[var(--radius-card)] p-5">
                <MapPin size={18} strokeWidth={1.7} className="shrink-0 text-[#D9B98A] mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#D9B98A] font-medium mb-1">
                    Onde estamos
                  </p>
                  <p className="text-[14px] leading-relaxed text-[#EDE5D6]/90">
                    São José dos Campos
                    <br />
                    <span className="text-[12px] text-[#EDE5D6]/70">
                      Endereço confirmado no agendamento
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#1A130E] text-[#F4EFE6] rounded-[var(--radius-card)] p-5">
                <Clock size={18} strokeWidth={1.7} className="shrink-0 text-[#D9B98A] mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#D9B98A] font-medium mb-1">
                    Funcionamento
                  </p>
                  <p className="text-[14px] leading-relaxed text-[#EDE5D6]/90">
                    Segunda a sábado
                    <br />
                    <span className="text-[12px] text-[#EDE5D6]/70">
                      Com hora marcada
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna direita — formulário */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1A130E] text-[#F4EFE6] rounded-[var(--radius-stage)] p-7 sm:p-9 lg:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={20} strokeWidth={1.7} className="text-[#D9B98A]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D9B98A] font-medium">
                Pedido de agendamento
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl leading-tight mt-3 mb-6">
              Conte o que você procura
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <CheckCircle size={48} strokeWidth={1.4} className="text-[#D9B98A] mb-4" />
                <p className="font-display text-xl mb-2">Pedido encaminhado!</p>
                <p className="text-[14px] text-[#EDE5D6]/75 max-w-xs leading-relaxed">
                  Abrimos o WhatsApp com sua mensagem pronta. Se não abriu automaticamente, use o
                  botão abaixo.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#B08247] text-white font-medium text-[14px] px-6 py-3 rounded-full hover:bg-[#D9B98A] hover:text-[#1A130E] transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={1.8} />
                  Abrir WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-[12px] uppercase tracking-[0.18em] text-[#D9B98A] font-medium">
                    Seu nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Como podemos te chamar?"
                    className="bg-[#2A2018] border border-[#B08247]/25 rounded-xl px-4 py-3.5 text-[15px] text-[#F4EFE6] placeholder:text-[#EDE5D6]/40 focus:border-[#B08247] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="retorno" className="text-[12px] uppercase tracking-[0.18em] text-[#D9B98A] font-medium">
                    Como te retorno
                  </label>
                  <input
                    id="retorno"
                    type="text"
                    value={form.contato}
                    onChange={(e) => setForm({ ...form, contato: e.target.value })}
                    placeholder="Telefone ou WhatsApp"
                    className="bg-[#2A2018] border border-[#B08247]/25 rounded-xl px-4 py-3.5 text-[15px] text-[#F4EFE6] placeholder:text-[#EDE5D6]/40 focus:border-[#B08247] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="mensagem" className="text-[12px] uppercase tracking-[0.18em] text-[#D9B98A] font-medium">
                    O que você procura
                  </label>
                  <textarea
                    id="mensagem"
                    rows={3}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Ex: corte masculino + barba, preferência de dia/horário..."
                    className="bg-[#2A2018] border border-[#B08247]/25 rounded-xl px-4 py-3.5 text-[15px] text-[#F4EFE6] placeholder:text-[#EDE5D6]/40 focus:border-[#B08247] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2.5 bg-[#B08247] text-white font-medium text-[15px] px-6 py-4 rounded-full hover:bg-[#D9B98A] hover:text-[#1A130E] transition-colors duration-300 mt-2"
                >
                  <Send size={17} strokeWidth={1.8} />
                  Enviar pelo WhatsApp
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                <p className="text-[12px] text-[#EDE5D6]/70 leading-relaxed text-center">
                  Ao enviar, abriremos o WhatsApp com sua mensagem pronta. Nenhum dado fica
                  armazenado neste site.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
