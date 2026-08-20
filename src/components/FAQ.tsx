import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como faço para agendar um horário?",
    a: "O agendamento pode ser feito pelo telefone ou WhatsApp informados na seção de contato. Recomendamos marcar com antecedência, principalmente em vésperas de feriados e finais de semana, quando a demanda é maior.",
  },
  {
    q: "O atendimento é com hora marcada ou por ordem de chegada?",
    a: "Trabalhamos preferencialmente com hora marcada, para garantir que cada cliente tenha tempo reservado e atenção integral. Em alguns horários de menor movimento também aceitamos sem agendamento, mas o ideal é confirmar antes.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos as principais formas de pagamento comuns ao segmento: dinheiro, cartões de débito e crédito, e geralmente Pix. Recomendamos confirmar as opções no momento do agendamento.",
  },
  {
    q: "Atende homens e mulheres?",
    a: "Sim. O Alcides Salão atende todos os públicos, com serviços que vão de cortes masculinos e femininos a barba, coloração, tratamentos e penteados para ocasiões.",
  },
  {
    q: "Faz atendimento a domicílio ou para eventos?",
    a: "Para eventos especiais como casamentos e formaturas, é possível combinar atendimento fora do salão mediante agenda e condições específicas. Consulte com antecedência para verificar disponibilidade.",
  },
  {
    q: "Tem estacionamento próximo?",
    a: "Por estar em São José dos Campos, geralmente há opções de estacionamento público e vagas na rua nas proximidades. Recomendamos chegar com alguns minutos de antecedência para se acomodar com calma.",
  },
  {
    q: "Posso levar uma referência de corte?",
    a: "Com certeza — e incentivamos. Fotos de referência ajudam a alinhar expectativas. Durante a conversa inicial avaliamos juntos se a referência combina com seu formato facial e tipo de fio, e ajustamos se necessário.",
  },
  {
    q: "Quanto tempo leva um atendimento típico?",
    a: "Um corte simples costuma levar de 40 minutos a 1 hora. Serviços combinados (corte + barba) ou coloração podem levar de 1h30 a 3 horas. Informamos a estimativa no agendamento para você se programar.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] paper-texture overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          {/* Coluna esquerda — título */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle size={18} strokeWidth={1.6} className="text-[#B08247]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
                Dúvidas frequentes
              </span>
            </div>
            <h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
              Tudo o que você
              <br />
              pode <span className="italic text-[#B08247]">querer saber</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#3A2D24] max-w-md">
              Reunimos as perguntas mais comuns sobre o atendimento. Se a sua dúvida não está aqui,
              fale com a gente — respondemos com prazer.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#8A6234] hover:text-[#B08247] transition-colors link-underline"
            >
              Falar com o salão
            </a>
          </motion.div>

          {/* Coluna direita — accordion */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-col"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="border-b border-[#E2D6C4]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group bg-[#F4EFE6]"
                  >
                    <span className="font-display text-lg sm:text-xl text-[#1F1712] group-hover:text-[#B08247] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#C9B89E] text-[#1F1712] bg-[#FBF7F0] group-hover:border-[#B08247] group-hover:bg-[#B08247]/10 group-hover:text-[#B08247] transition-colors"
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-[14.5px] leading-relaxed text-[#3A2D24]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
