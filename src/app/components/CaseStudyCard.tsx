import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface CaseStudy {
  slug: string;
  coverSrc: string;
  title: string;
  description: string;
  industry: string;
  role: string;
  timeline: string;
  metrics: { label: string; value: string }[];
  accentColor?: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const accent = study.accentColor ?? "#3B82F6";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-xl overflow-hidden flex flex-col cursor-pointer"
    >
      <Link
        to={study.slug === "crypto" ? "/case/crypto" : "/case/" + study.slug}
        className="flex flex-col flex-1 outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
        tabIndex={0}
        aria-label={`View case study: ${study.title}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-[#111]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={study.coverSrc}
              alt={study.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>

          <div className="absolute top-4 left-4">
            <span
              className="px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase border rounded-full"
              style={{
                fontFamily: " 'Inter', sans-serif",
                color: accent,
                borderColor: `${accent}30`,
                backgroundColor: `${accent}10`,
              }}
            >
              {study.industry}
            </span>
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{
              background: `linear-gradient(to top, rgba(21,21,21,0.6) 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="flex flex-col flex-1 p-6 md:p-8">
          <h3
            className="text-[#F8F8F6] mb-3 leading-tight tracking-[-0.01em]"
            style={{
              fontFamily: " 'Inter', sans-serif",
              fontSize: "clamp(20px, 2vw, 26px)",
              fontWeight: 500,
            }}
          >
            {study.title}
          </h3>

          <p
            className="text-[#F8F8F6]/45 mb-6 leading-relaxed flex-1"
            style={{
              fontFamily: " 'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {study.description}
          </p>

          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span
                className="text-[#F8F8F6]/25"
                style={{ fontFamily: " 'Inter', sans-serif", fontSize: 11 }}
              >
                Роль
              </span>
              <span
                className="text-[#F8F8F6]/60"
                style={{
                  fontFamily: " 'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {study.role}
              </span>
            </div>
            <span className="text-[#F8F8F6]/15">·</span>
            <div className="flex items-center gap-1.5">
              <span
                className="text-[#F8F8F6]/25"
                style={{ fontFamily: " 'Inter', sans-serif", fontSize: 11 }}
              >
                Период
              </span>
              <span
                className="text-[#F8F8F6]/60"
                style={{
                  fontFamily: " 'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {study.timeline}
              </span>
            </div>
          </div>

          <div className="flex gap-3 mb-8 flex-wrap">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.07] rounded-lg"
              >
                <p
                  className="text-[#F8F8F6]"
                  style={{
                    fontFamily: " 'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {m.value}
                </p>
                <p
                  className="text-[#F8F8F6]/35 mt-0.5"
                  style={{
                    fontFamily: " 'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <motion.span
              className="flex items-center gap-2 text-[#F8F8F6] text-sm tracking-wide group-hover:gap-3 transition-all duration-300"
              style={{ fontFamily: " 'Inter', sans-serif", fontWeight: 500 }}
            >
              Смотреть кейс
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.span>

            <span
              className="text-[#F8F8F6]/15 text-xs"
              style={{
                fontFamily: " 'Inter', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              0{(index + 1).toString()}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
