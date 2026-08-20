import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Coffee, Clock, Music, Leaf } from "lucide-react";

const IMAGE_URL =
  "https://images.pexels.com/photos/27165069/pexels-photo-27165069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

const atmosphere = [
  {
    icon: Clock,
    title: "Sem pressa",
    text: "Atendimento com hora marcada e tempo reservado só para você. Ninguém espera sentado enquanto o cliente da cadeira ao lado é atendido às pressas.",
  },
  {
    icon: Coffee,
    title: "Recepção que acolhe",
    text: "Café, água e uma conversa leve antes de começar. O ritual começa na entrada, não na cadeira.",
  },
  {
    icon: Music,
    title: "Ambiente curado",
    text: "Trilha sonora pensada para o momento, iluminação acolhedora e um espaço que convida a desacelerar.",
  },
  {
    icon: Leaf,
    title: "Higiene e cuidado",
    text: "Materiais higienizados entre cada atendimento, produtos profissionais e atenção aos detalhes que você vê — e aos que você não vê.",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);
  const decorY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);

  return (
    <section
      ref={ref}
      id="experiencia"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#1A130E] text-[#F4EFE6] overflow-hidden px-4"
    >
      {/* Textura ambiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 90%, rgba(176,130,71,0.10) 0%, transparent 45%), radial-gradient(circle at 90% 10%, rgba(138,98,52,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem com parallax */}
          <motion.div
            style={{ y: reduce ? 0 : imageY }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-last"
          >
            <div className="relative aspect-[4/5] rounded-[var(--radius-stage)] overflow-hidden shadow-2xl">
              <img
                src={IMAGE_URL}
                alt="Interior do salão com mobiliário contemporâneo e decoração minimalista."
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/50 via-transparent to-transparent"
              />
            </div>

            {/* Elemento decorativo flutuante */}
            <motion.div
              style={{ y: reduce ? 0 : decorY }}
              aria-hidden="true"
              className="absolute -top-6 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 border border-[#B08247]/30 rounded-full pointer-events-none overflow-hidden"
            />
            <motion.div
              style={{ y: reduce ? 0 : decorY }}
              aria-hidden="true"
              className="absolute -bottom-8 -left-4 sm:-left-10 w-32 h-32 sm:w-44 sm:h-44 border border-[#B08247]/20 rounded-full pointer-events-none overflow-hidden"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#D9B98A] font-medium">
                A experiência
              </span>
            </motion.div>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.25rem] leading-[1.05] tracking-[-0.02em]"
            >
              Um espaço feito
              <br />
              para você <span className="italic text-[#D9B98A]">desacelerar</span>
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="mt-6 text-[15px] leading-relaxed text-[#EDE5D6]/80 max-w-md"
            >
              Mais do que um salão, é um lugar onde o tempo funciona diferente. Você chega, respira
              e deixa o cuidado acontecer — enquanto a equipe cuida de cada detalhe para que você
              saia renovado, não apenas cortado.
            </motion.p>

            {/* Lista de atmosfera */}
            <motion.ul
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-7"
            >
              {atmosphere.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[#B08247]/15 text-[#D9B98A]">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-[#F4EFE6] leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-[#EDE5D6]/70">
                        {item.text}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
