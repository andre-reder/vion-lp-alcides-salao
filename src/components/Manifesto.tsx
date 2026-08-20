import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export default function Manifesto() {
  const variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="manifesto"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] paper-texture overflow-hidden"
    >
      {/* Marca d'água decorativa */}
      <div
        aria-hidden="true"
        className="absolute -right-20 top-10 text-[280px] sm:text-[420px] font-display text-[#B08247]/[0.05] leading-[0.75] select-none pointer-events-none overflow-hidden"
      >
        A
      </div>

      <div className="container-x relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          className="max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div variants={variants} className="flex items-center gap-3 mb-8">
            <Scissors size={18} strokeWidth={1.6} className="text-[#B08247]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
              Manifesto
            </span>
          </motion.div>

          {/* Texto principal editorial */}
          <motion.blockquote
            variants={variants}
            className="font-display text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.15] tracking-[-0.01em] text-[#1F1712]"
          >
            Um corte não é só uma forma.
            <br />
            É a maneira como você se{" "}
            <span className="italic text-[#B08247]">apresenta</span> ao mundo antes mesmo de
            falar uma palavra.
          </motion.blockquote>

          {/* Parágrafos de apoio */}
          <motion.div
            variants={variants}
            className="mt-12 grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-3xl mx-auto"
          >
            <p className="text-[15px] leading-relaxed text-[#3A2D24]">
              Acreditamos que cuidado pessoal não é vaidade — é presença. É chegar em uma reunião,
              em um encontro, em um espelho e reconhecer a melhor versão de si. Por isso tratamos
              cada cliente como alguém com história, formato e estilo próprios.
            </p>
            <p className="text-[15px] leading-relaxed text-[#3A2D24]">
              Nosso ofício é traduzir o que você quer transmitir em linhas, texturas e detalhes.
              Sem pressa, sem padrão de fábrica. Apenas a atenção que cada pessoa merece — e o
              resultado que faz diferença no dia seguinte, e no mês seguinte.
            </p>
          </motion.div>

          {/* Assinatura */}
          <motion.div
            variants={variants}
            className="mt-14 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#B08247]" />
            <p className="font-display text-xl italic text-[#1F1712]">Alcides</p>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B5A4E]">
              Salão · São José dos Campos
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
