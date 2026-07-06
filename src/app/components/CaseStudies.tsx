import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

// Локальные картинки — положи их в src/app/assets/images/
import imgOnix from "../../assets/onix-cover.png";
import imgDriftKing from "../../assets/drift-king-cover.png";
import imgPalette from "../../assets/palette-cover.png";

const F = " 'Inter', sans-serif";

const METRICS = [
  { value: "+18", label: "NPS" },
  { value: "−12%", label: "Drop-off Rate" },
  { value: "−80%", label: "Misclick Rate" },
];

function OnixCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-[#1A1A1A] border border-[rgba(248,248,246,0.07)] rounded-[14px] overflow-hidden flex flex-col cursor-pointer h-full"
      style={{ transition: "box-shadow 0.4s" }}
    >
      <Link
        to="/case/crypto"
        className="flex flex-col flex-1 outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
        aria-label="Смотреть кейс: Web-3 кошелёк"
      >
        {/* Cover image */}
        <div className="relative overflow-hidden bg-[#111]" style={{ aspectRatio: "16/9" }}>
          <div className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]">
            <ImageWithFallback
              src={imgOnix}
              alt="Web-3 кошелёк — ONIX"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Industry badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase border rounded-full"
              style={{
                fontFamily: F,
                color: "#DBFD04",
                borderColor: "rgba(219,253,4,0.3)",
                backgroundColor: "rgba(219,253,4,0.1)",
              }}
            >
              Web3 · Fintech
            </span>
          </div>

          {/* Hover gradient */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "linear-gradient(to top, rgba(21,21,21,0.6) 0%, transparent 60%)" }}
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <h3
            className="text-[#f8f8f6] mb-3 leading-tight"
            style={{ fontFamily: F, fontSize: 20, fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Web-3 кошелёк
          </h3>

          <p
            className="mb-6 flex-1"
            style={{
              fontFamily: F,
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(248,248,246,0.45)",
            }}
          >
            ONIX — это приложение для тех африканцев, которые больше не хотят
            смотреть, как их сбережения превращаются в пыль из-за бешеной
            девальвации местной валюты.
          </p>

          {/* Role + period */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span style={{ fontFamily: F, fontSize: 11, color: "rgba(248,248,246,0.25)" }}>Роль</span>
              <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "rgba(248,248,246,0.6)" }}>
                Product designer
              </span>
            </div>
            <span style={{ color: "rgba(248,248,246,0.15)" }}>·</span>
            <div className="flex items-center gap-1.5">
              <span style={{ fontFamily: F, fontSize: 11, color: "rgba(248,248,246,0.25)" }}>Период</span>
              <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "rgba(248,248,246,0.6)" }}>
                2024–2026
              </span>
            </div>
          </div>

          {/* Metrics */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="px-3 py-2 rounded-[10px]"
                style={{
                  backgroundColor: "rgba(248,248,246,0.04)",
                  border: "1px solid rgba(248,248,246,0.07)",
                }}
              >
                <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, lineHeight: 1.2, color: "#f8f8f6" }}>
                  {m.value}
                </p>
                <p style={{ fontFamily: F, fontSize: 11, letterSpacing: "0.05em", color: "rgba(248,248,246,0.35)" }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span
              className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
              style={{ fontFamily: F, fontSize: 14, fontWeight: 500, color: "#f8f8f6", letterSpacing: "0.025em" }}
            >
              Смотреть кейс →
            </span>
            <span style={{ fontFamily: F, fontSize: 12, letterSpacing: "0.1em", color: "rgba(248,248,246,0.15)" }}>
              01
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// Coming-soon карточки: блюр и текст "Coming soon" уже отрисованы прямо в самой
// картинке (см. присланные файлы), поэтому здесь просто показываем изображение
// на всю карточку, без дополнительного оверлея.
function ComingSoonCard({ image, index }: { image: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative bg-[#1A1A1A] border border-[rgba(248,248,246,0.07)] rounded-[14px] overflow-hidden flex-1 min-h-[220px] md:min-h-0"
    >
      <ImageWithFallback src={image} alt="Скоро новый кейс" className="absolute inset-0 w-full h-full object-cover" />

      {/* Index */}
      <span
        className="absolute bottom-6 right-6"
        style={{ fontFamily: F, fontSize: 12, letterSpacing: "0.1em", color: "rgba(248,248,246,0.6)" }}
      >
        0{index + 2}
      </span>
    </motion.div>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <ScrollReveal>
            <p
              className="mb-0"
              style={{
                fontFamily: F,
                fontSize: 12,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(248,248,246,0.3)",
              }}
            >
              Мои работы
            </p>
          </ScrollReveal>
        </div>

        {/* Layout: 1 большая карточка слева + 2 карточки друг под другом справа */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:items-stretch">
          <div className="md:w-1/2">
            <OnixCard />
          </div>
          <div className="flex flex-col gap-5 md:gap-6 md:w-1/2">
            <ComingSoonCard index={0} image={imgDriftKing} />
            <ComingSoonCard index={1} image={imgPalette} />
          </div>
        </div>
      </div>
    </section>
  );
}