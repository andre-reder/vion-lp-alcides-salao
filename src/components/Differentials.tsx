import { motion } from "framer-motion";
import {
  User,
  Eye,
  FlaskConical,
  Sparkles,
  BookOpen,
  Award,
  ArrowRight,
} from "lucide-react";

const differentials = [
  {
    n: "01",
    icon: User,
    title: "Atendimento dedicado",
    text: "Um profissional por vez, sem dividir a atenção entre duas cadeiras. O tempo da sua visita é só seu — do diagnóstico à finalização, ninguém sai no meio para atender outra pessoa.",
  },
  {
    n: "02",
    icon: Eye,
    title: "Leitura do seu formato",
    text: "Antes da tesoura, avaliamos formato do rosto, tipo de fio, densidade e estilo de vida. O corte nasce de uma leitura sua, não de um molde pronto — por isso combina com você mesmo crescendo.",
  },
  {
    n: "03",
    icon: FlaskConical,
    title: "Produtos profissionais",
    text: "Trabalhamos com linhas profissionais selecionadas e fazemos teste de mecha em qualquer química. Priorizamos produtos de baixa amônia e protocolos que preservam a saúde do fio.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Resultado que dura",
    text: "Cortes desenhados para crescer bem e finalizações que seguram o efeito por horas. O objetivo é que você continue gostando do resultado até a próxima visita — não só no dia em que sai daqui.",
  },
  {
    n: "05",
    icon: BookOpen,
    title: "Orientação para casa",
    text: "Você sai sabendo como manter: quais produtos usar, como secar e qual o intervalo ideal para o seu fio. O cuidado não termina na porta do salão — ele continua na sua rotina.",
  },
  {
    n: "06",
    icon: Award,
    title: "Padrão consistente",
    text: "Independentemente de quem te atende, o padrão de capricho, pontualidade e técnica se mantém. Você sabe exatamente o que esperar a cada visita, sem depender de um único profissional.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] paper-texture overflow-hidden"
    >
      {/* Marca d'água decorativa — espelhada à esquerda */}
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 text-[260px] sm:text-[380px] font-display text-[#B08247]/[0.04] leading-[0.75] select-none pointer-events-none overflow-hidden"
      >
        A
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          {/* Coluna esquerda — título sticky */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={18} strokeWidth={1.6} className="text-[#B08247]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
                Diferenciais
              </span>
            </div>
            <h2 className="font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
              O que nos torna
              <br />
              uma <span className="italic text-[#B08247]">referência</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-[#3A2D24] max-w-md">
              Mais do que executar um serviço, construímos uma forma de cuidar.
              Estes são os princípios que sustentam cada visita e que fazem a
              diferença entre um corte qualquer e um corte que vira sua
              assinatura.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[#8A6234] hover:text-[#B08247] transition-colors link-underline"
            >
              Quero experimentar
              <ArrowRight size={15} strokeWidth={1.8} />
            </motion.a>
          </motion.div>

          {/* Coluna direita — lista editorial */}
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="flex flex-col"
          >
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.n}
                  variants={itemVariants}
                  className="group relative flex gap-5 sm:gap-7 py-7 sm:py-8 border-b border-[#E2D6C4] first:pt-0"
                >
                  {/* Barra de accent que cresce no hover */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#B08247] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />

                  {/* Número + ícone */}
                  <div className="shrink-0 flex flex-col items-center gap-3 pl-1">
                    <span className="font-display text-[13px] tracking-[0.2em] text-[#B08247]">
                      {item.n}
                    </span>
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#1F1712] text-[#D9B98A] group-hover:bg-[#B08247] group-hover:text-white transition-colors duration-300">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                  </div>

                  {/* Texto */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-display text-xl sm:text-2xl text-[#1F1712] leading-tight mb-2 group-hover:text-[#8A6234] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#3A2D24]">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
