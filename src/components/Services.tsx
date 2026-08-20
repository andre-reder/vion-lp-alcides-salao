import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Palette,
  Wind,
  Droplet,
  Crown,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte autoral",
    description:
      "Cortes masculinos e femininos estudados a partir do seu formato facial, tipo de fio e estilo de vida. Cada linha é decidida com você, não por você — para que o resultado continue bom mesmo quando o cabelo cresce.",
    tag: "Mais procurado",
  },
  {
    icon: Sparkles,
    title: "Barba esculpida",
    description:
      "Toalha quente, navalha e acabamento de precisão. A barba é desenhada para harmonizar com o corte e o contorno do rosto, com finalização que mantém a forma e o brilho por mais tempo.",
    tag: "Ritual completo",
  },
  {
    icon: Palette,
    title: "Coloração e mechas",
    description:
      "Pigmentação, mechas e correção de cor com produtos de baixa amônia. Trabalhamos tons naturais, reflexos discretos ou transformações ousadas — sempre preservando a saúde do fio.",
    tag: "Sob consulta",
  },
  {
    icon: Droplet,
    title: "Tratamentos e hidratação",
    description:
      "Reconstrução, hidratação e cronograma capilar personalizado. Indicamos o protocolo certo para o seu fio (seco, quimicamente tratado ou com frizz) para devolver movimento, brilho e maciez.",
    tag: "Protocolo personalizado",
  },
  {
    icon: Wind,
    title: "Escova e finalização",
    description:
      "Escova modeladora, babyliss e finalização para ocasiões especiais ou para o dia a dia. Usamos técnicas de secagem que respeitam o fio e mantêm o penteado por horas, sem pesar.",
    tag: "Para eventos",
  },
  {
    icon: Crown,
    title: "Penteado para ocasiões",
    description:
      "Penteados para casamentos, formaturas e celebrações. Atendimento com hora marcada, prova prévia quando necessário e finalização que acompanha você do início ao fim da festa.",
    tag: "Agendar com antecedência",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#EDE5D6] overflow-hidden"
    >
      <div className="container-x relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
            O que oferecemos
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
            Serviços pensados para
            <br className="hidden sm:block" />{" "}
            <span className="italic text-[#B08247]">cada momento</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#3A2D24] max-w-2xl mx-auto">
            Do corte de rotina ao penteado de ocasião, cada serviço é executado com tempo,
            técnica e atenção. Veja o que fazemos — e como cada um pode se encaixar na sua rotina.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col h-full bg-[#FBF7F0] border border-[#E2D6C4] rounded-[var(--radius-card)] p-7 sm:p-8 hover:shadow-[var(--shadow-card-hover)] hover:border-[#D9B98A] transition-colors duration-300"
              >
                {/* Ícone */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#1F1712] text-[#D9B98A] group-hover:bg-[#B08247] group-hover:text-white transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#C9B89E] group-hover:text-[#B08247] group-hover:rotate-45 transition-all duration-300"
                  />
                </div>

                {/* Título */}
                <h3 className="font-display text-2xl text-[#1F1712] mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="flex-1 text-[14px] leading-relaxed text-[#3A2D24] mb-6">
                  {service.description}
                </p>

                {/* Tag */}
                <span className="self-start inline-flex items-center text-[11px] uppercase tracking-[0.18em] font-medium text-[#8A6234] bg-[#B08247]/10 px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 max-w-2xl mx-auto px-4 text-center text-[13px] text-[#6B5A4E] leading-relaxed relative z-10"
        >
          Não encontrou o que procura? Temos serviços complementares como sobrancelha, depilação e
          cuidados específicos.{" "}
          <a
            href="#contato"
            className="text-[#8A6234] font-medium link-underline hover:text-[#B08247] transition-colors"
          >
            Fale conosco
          </a>{" "}
          para conferir a disponibilidade.
        </motion.p>
      </div>
    </section>
  );
}
