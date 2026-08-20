import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Avaliações fictícias — exemplos representativos do segmento.
const reviews = [
  {
    name: "Rafael Monteiro",
    role: "Cliente frequente",
    stars: 5,
    text: "Já experimentei vários salões na cidade e nenhum chega perto da atenção que recebo aqui. O corte dura semanas sem perder a forma, e a conversa antes de começar faz toda a diferença.",
  },
  {
    name: "Camila Andrade",
    role: "Primeira visita",
    stars: 5,
    text: "Cheguei sem saber exatamente o que queria e saí com o melhor corte do ano. Me ouviram de verdade e sugeriram algo que combinava com meu rosto e minha rotina. Virei cliente.",
  },
  {
    name: "Bruno Carvalho",
    role: "Barba e corte",
    stars: 5,
    text: "A toalha quente e a navalha fazem o ritual valer a pena. Ambiente tranquilo, sem aquela correria de salão grande. Saio renovado toda vez.",
  },
  {
    name: "Patrícia Gomes",
    role: "Coloração",
    stars: 4,
    text: "Fizeram uma correção de cor que outros salões não tinham conseguido. O resultado ficou natural e o fio não ressecou. Só acho que o atendimento poderia ser um pouco mais rápido no pico.",
  },
  {
    name: "Lucas Ferreira",
    role: "Cliente há dois anos",
    stars: 5,
    text: "O que me fidelizou foi a constância. Não importa quem me atenda, o padrão é o mesmo: capricho, pontualidade e dicas que realmente funcionam em casa.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="avaliacoes"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#1A130E] text-[#F4EFE6] overflow-hidden px-4"
    >
      {/* Textura ambiente */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(176,130,71,0.10) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(138,98,52,0.08) 0%, transparent 50%)",
        }}
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
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#D9B98A] font-medium">
            Avaliações
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em]">
            O que dizem
            <br className="hidden sm:block" />{" "}
            <span className="italic text-[#D9B98A]">nossos clientes</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#EDE5D6]/80 max-w-2xl mx-auto">
            Avaliações representativas de clientes do segmento. Exemplos do tipo de experiência que
            buscamos entregar em cada visita.
          </p>
        </motion.div>

        {/* Grid de avaliações — composição variada */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch"
        >
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative flex flex-col h-full bg-[#2A2018] border border-[#B08247]/15 rounded-[var(--radius-card)] p-7 sm:p-8 hover:border-[#B08247]/40 transition-colors duration-300 ${
                i === 0 ? "lg:row-span-1" : ""
              }`}
            >
              {/* Aspa decorativa */}
              <Quote
                size={32}
                strokeWidth={1.2}
                className="text-[#B08247]/40 mb-4"
                aria-hidden="true"
              />

              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-4" aria-label={`${review.stars} de 5 estrelas`}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    strokeWidth={1.5}
                    className={
                      s < review.stars
                        ? "fill-[#D9B98A] text-[#D9B98A]"
                        : "text-[#6B5A4E]"
                    }
                  />
                ))}
              </div>

              {/* Texto */}
              <blockquote className="flex-1 text-[14.5px] leading-relaxed text-[#EDE5D6]/90 mb-6">
                “{review.text}”
              </blockquote>

              {/* Autor */}
              <figcaption className="flex items-center gap-3 pt-5 border-t border-[#B08247]/15">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#B08247] text-[#1A130E] font-display text-base font-medium">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#F4EFE6] leading-tight">
                    {review.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#D9B98A]/70 mt-0.5">
                    {review.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}

          {/* Card CTA no grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex flex-col h-full justify-center items-center text-center bg-gradient-to-br from-[#B08247] to-[#8A6234] rounded-[var(--radius-card)] p-7 sm:p-8 text-white"
          >
            <p className="font-display text-2xl leading-tight mb-3">
              Que tal a sua história ser a próxima?
            </p>
            <p className="text-[13px] text-white/85 mb-6 leading-relaxed">
              Agende uma visita e descubra a diferença de um atendimento feito com tempo.
            </p>
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-[#1A130E] text-white font-medium text-[14px] px-6 py-3.5 rounded-full hover:bg-[#2A2018] transition-colors duration-300"
            >
              Agendar agora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
