import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { useRef } from "react";

const IMAGE_URL =
  "https://images.pexels.com/photos/27165069/pexels-photo-27165069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax sutil — texto máximo 5%, imagem 10%
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "5%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="topo"
      className="relative min-h-[calc(100svh-3rem)] flex items-center bg-[#1A130E] overflow-hidden px-4 pt-4 pb-6 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-20"
    >
      {/* Textura ambiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(176,130,71,0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(138,98,52,0.10) 0%, transparent 50%)",
        }}
      />
      {/* Linha decorativa vertical */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#B08247]/20 to-transparent"
      />

      <div className="container-x relative z-10 w-full">
        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            style={{ y: reduce ? 0 : textY }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-[#F4EFE6] max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-10 bg-[#B08247]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#D9B98A]">
                São José dos Campos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-medium leading-[0.95] tracking-[-0.02em] text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              O cuidado
              <br />
              como um
              <span className="italic text-[#D9B98A]"> ofício</span>.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm sm:text-lg leading-relaxed text-[#EDE5D6] max-w-md"
            >
              No <span className="text-white font-medium">Alcides Salão</span>, cada visita é
              tratada como ritual: cortes autorais, barba esculpida e tratamentos pensados para o
              seu formato, seu estilo e o seu dia a dia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-row gap-2.5 sm:gap-3"
            >
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#B08247] text-white font-medium text-[14px] sm:text-[15px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#D9B98A] hover:text-[#1A130E] transition-colors duration-300"
              >
                <Calendar size={18} strokeWidth={1.8} />
                Agendar minha visita
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-medium text-[14px] sm:text-[15px] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full hover:bg-white/20 hover:border-white/70 transition-colors duration-300"
              >
                Ver serviços
              </motion.a>
            </motion.div>

            {/* Prova social rápida */}
            <motion.div
              variants={itemVariants}
              className="mt-6 hidden sm:flex items-center gap-5"
            >
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={15}
                    strokeWidth={1.5}
                    className="fill-[#D9B98A] text-[#D9B98A]"
                  />
                ))}
              </div>
              <p className="text-[13px] text-[#EDE5D6]/90 leading-snug">
                Avaliações de clientes reais
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> · </span>
                <span className="text-[#D9B98A]">experiência autoral</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Imagem emoldurada */}
          <motion.div
            style={{ y: reduce ? 0 : imageY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <div className="relative aspect-[5/4] max-h-[35vh] sm:aspect-[5/6] sm:max-h-none lg:aspect-[4/5] rounded-[var(--radius-stage)] overflow-hidden shadow-2xl">
              <motion.img
                src={IMAGE_URL}
                alt="Salão elegante com mobiliário contemporâneo e decoração minimalista."
                loading="eager"
                className="w-full h-full object-cover"
                style={{ scale: reduce ? 1 : 1.08 }}
              />
              {/* Overlay gradiente para profundidade */}
              <motion.div
                style={{ opacity: overlayOpacity }}
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1A130E]/70 via-transparent to-[#1A130E]/20"
              />
              {/* Borda interna sutil */}
              <div
                aria-hidden="true"
                className="absolute inset-3 sm:inset-4 border border-white/15 rounded-[20px] pointer-events-none"
              />
            </div>

            {/* Badge flutuante — assinatura */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="absolute -bottom-5 left-0 sm:-left-6 bg-[#F4EFE6] text-[#1F1712] px-5 py-3.5 rounded-2xl shadow-xl max-w-[220px] z-10"
            >
              <p className="font-display text-lg leading-tight">Alcides</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#6B5A4E] mt-0.5">
                Salão · Estilo autoral
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
