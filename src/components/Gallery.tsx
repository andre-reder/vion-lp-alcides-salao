import { motion } from "framer-motion";

const IMAGE_URL =
  "https://images.pexels.com/photos/27165069/pexels-photo-27165069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

// Tratamentos visuais distintos aplicados via CSS para variar a mesma imagem
const tiles = [
  {
    label: "O espaço",
    sub: "Ambiente contemporâneo",
    className: "sm:col-span-2 sm:row-span-2",
    filter: "none",
    overlay: "from-[#1A130E]/40 to-transparent",
  },
  {
    label: "Detalhe",
    sub: "Acabamento de precisão",
    className: "",
    filter: "sepia(0.25) saturate(1.1) brightness(0.95)",
    overlay: "from-[#1A130E]/50 to-transparent",
  },
  {
    label: "Luz natural",
    sub: "Atmosfera acolhedora",
    className: "",
    filter: "contrast(1.05) saturate(0.9) brightness(1.05)",
    overlay: "from-[#1A130E]/35 to-transparent",
  },
  {
    label: "Textura",
    sub: "Materiais curados",
    className: "sm:col-span-2",
    filter: "grayscale(0.4) sepia(0.15) brightness(0.92)",
    overlay: "from-[#1A130E]/45 to-transparent",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#EDE5D6] overflow-hidden"
    >
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
            Galeria
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-[#1F1712]">
            O ambiente que <span className="italic text-[#B08247]">vai te receber</span>
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#3A2D24] max-w-2xl mx-auto">
            Um espaço contemporâneo, com materiais curados e iluminação que valoriza cada detalhe.
            Veja um pouco do que você encontra ao cruzar a porta.
          </p>
        </motion.div>

        {/* Grid de galeria — irmão do crédito */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-6 sm:gap-8"
        >
          {tiles.map((tile, i) => (
            <motion.figure
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.94, y: 24 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative overflow-hidden rounded-[var(--radius-card)] shadow-lg ${tile.className}`}
            >
              <img
                src={IMAGE_URL}
                alt={`${tile.label} — ${tile.sub}.`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: tile.filter }}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-t ${tile.overlay}`}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-[#F4EFE6] overflow-hidden">
                <p className="font-display text-lg sm:text-xl leading-tight">{tile.label}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9B98A] mt-1">
                  {tile.sub}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      {/* Crédito da foto — irmão do grid, container separado */}
      <div className="container-x relative z-10 mt-16">
        <p className="max-w-2xl mx-auto px-4 text-center text-[12px] text-[#6B5A4E] leading-relaxed">
          Fotografia de{" "}
          <a
            href="https://www.pexels.com/@wilcle-nunes-38713774"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A6234] font-medium link-underline hover:text-[#B08247] transition-colors"
          >
            Wilcle Nunes
          </a>{" "}
          · Pexels. Imagem ilustrativa do ambiente; o espaço físico pode variar.
        </p>
      </div>
    </section>
  );
}
