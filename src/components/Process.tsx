import { motion } from "framer-motion";
import { Phone, MessageSquare, Scissors, Smile } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Agende seu horário",
    text: "Entre em contato pelo telefone ou WhatsApp. Escolhemos juntos o melhor dia e horário, e você já pode adiantar o que está buscando — corte, barba, coloração ou tratamento.",
  },
  {
    n: "02",
    icon: MessageSquare,
    title: "Conversa e diagnóstico",
    text: "Antes de qualquer tesoura, conversamos. Entendemos seu estilo, sua rotina, o que funcionou e o que não funcionou nas últimas visitas. O diagnóstico guia toda a execução.",
  },
  {
    n: "03",
    icon: Scissors,
    title: "Execução com tempo",
    text: "O serviço é feito sem pressa, com pausas para você acompanhar o resultado no espelho. Usamos produtos profissionais e técnicas adequadas ao seu tipo de fio e formato.",
  },
  {
    n: "04",
    icon: Smile,
    title: "Finalização e orientação",
    text: "Você sai com o resultado pronto — e com dicas práticas de como manter em casa: produtos, secagem e intervalo para o próximo retorno. O cuidado continua depois daqui.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#F4EFE6] paper-texture overflow-hidden"
    >
      <div className="container-x relative z-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6234] font-medium">
            Como funciona
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
            Do primeiro contato
            <br className="hidden sm:block" /> ao{" "}
            <span className="italic text-[#B08247]">resultado final</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#3A2D24] max-w-2xl mx-auto">
            Um processo simples e transparente, pensado para que você saiba exatamente o que
            esperar em cada etapa — sem surpresas, sem pressa.
          </p>
        </motion.div>

        {/* Etapas */}
        <div className="relative">
          {/* Linha conectora vertical (mobile) / horizontal (desktop) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-[44px] left-0 right-0 h-px bg-gradient-to-r from-[#B08247]/0 via-[#B08247]/40 to-[#B08247]/0 origin-left"
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.n}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="relative flex flex-col items-start"
                >
                  {/* Círculo numerado */}
                  <div className="relative z-10 flex items-center justify-center w-[88px] h-[88px] rounded-full bg-[#1F1712] text-[#D9B98A] mb-6 shadow-lg">
                    <Icon size={26} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-[#B08247] text-white text-[11px] font-semibold font-body">
                      {step.n}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-[#1F1712] mb-2.5 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#3A2D24]">
                    {step.text}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
