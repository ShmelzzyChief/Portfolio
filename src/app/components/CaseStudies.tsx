import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

import imgOnix from "../../assets/onix-cover.png";
import imgDriftKing from "../../assets/drift-king-dprofile.png";
import imgK2B from "../../assets/k2b-cover.png";

const F = " 'Inter', sans-serif";

type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  details: { role: string; period?: string };
  metrics: { value: string; label: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "Web-3 кошелёк",
    description: "ONIX — это приложение для тех африканцев, которые больше не хотят смотреть, как их сбережения превращаются в пыль из-за бешеной девальвации местной валюты.",
    category: "Web3 · Fintech",
    image: imgOnix,
    url: "https://dprofile.ru/case/183617/onyx-product-design-case",
    details: { role: "Product designer", period: "2024–2026" },
    metrics: [
      { value: "+18", label: "NPS" },
      { value: "−12%", label: "Drop-off Rate" },
      { value: "−80%", label: "Misclick Rate" },
    ],
  },
  {
    title: "Drift King",
    description: "Концепт мобильного дрифт-симулятора с тюнингом, рейтингами и сезонными событиями. Проверил интерес к игре через лендинг и интервью с игроками.",
    category: "Game UI",
    image: imgDriftKing,
    url: "https://dprofile.ru/case/173525/drift-king-game-ui-keys",
    details: { role: "UX/UI-дизайнер" },
    metrics: [
      { value: "647", label: "Заинтересовались за 2 недели" },
      { value: "82%", label: "Аудитория на iOS" },
    ],
  },
  {
    title: "K2B E-Learning Platform",
    description: "Лендинг бизнес-школы K2B с анонсами мероприятий. Спроектировал страницу, где можно задать вопрос, записаться на мероприятие или подать заявку на выступление.",
    category: "EdTech",
    image: imgK2B,
    url: "https://dprofile.ru/case/137728/k2b-e-learning-platform",
    details: { role: "UX/UI-дизайнер", period: "2025" },
    metrics: [
      { value: "26+", label: "Финальных экранов" },
      { value: "2", label: "Версии сайта: десктоп и мобильная" },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-[#1A1A1A] border border-[rgba(248,248,246,0.07)] rounded-[14px] overflow-hidden flex flex-col h-full"
      style={{ transition: "box-shadow 0.4s" }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col flex-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3B82F6]"
        aria-label={`Смотреть кейс: ${project.title}`}
      >
        {/* Cover image */}
        <div
          className="relative overflow-hidden bg-[#111]"
          style={index === 0 ? { aspectRatio: "16/9" } : { height: 220 }}
        >
          <div className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]">
            <ImageWithFallback
              src={project.image}
              alt=""
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
              {project.category}
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
            {project.title}
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
            {project.description}
          </p>

          {/* Role + period */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span style={{ fontFamily: F, fontSize: 11, color: "rgba(248,248,246,0.25)" }}>Роль</span>
              <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "rgba(248,248,246,0.6)" }}>
                {project.details.role}
              </span>
            </div>
            {project.details.period && (
              <>
                <span style={{ color: "rgba(248,248,246,0.15)" }}>·</span>
                <div className="flex items-center gap-1.5">
                  <span style={{ fontFamily: F, fontSize: 11, color: "rgba(248,248,246,0.25)" }}>Период</span>
                  <span style={{ fontFamily: F, fontSize: 12, fontWeight: 500, color: "rgba(248,248,246,0.6)" }}>
                    {project.details.period}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Metrics */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {project.metrics.map((m) => (
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
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </a>
    </motion.article>
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

        <div className="grid items-start gap-5 md:grid-cols-2 md:gap-6">
          <ProjectCard project={PROJECTS[0]} index={0} />
          <div className="flex flex-col gap-5 md:gap-6">
            {PROJECTS.slice(1).map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
