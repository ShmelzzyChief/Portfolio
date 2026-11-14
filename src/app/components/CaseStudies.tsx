import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollReveal } from "./ScrollReveal";

import imgOnix from "../../assets/onix-cover.png";
import imgDriftKing from "../../assets/drift-king-dprofile.png";
import imgK2B from "../../assets/k2b-cover.png";

const F = " 'Inter', sans-serif";

function ResultBadge({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="min-w-0 px-3 py-2 rounded-[10px]"
      style={{
        backgroundColor: "rgba(248,248,246,0.04)",
        border: "1px solid rgba(248,248,246,0.07)",
      }}
    >
      <p style={{ fontFamily: F, fontSize: 16, fontWeight: 600, lineHeight: 1.2, color: "#f8f8f6" }}>
        {value}
      </p>
      <p style={{ fontFamily: F, fontSize: 11, letterSpacing: "0.05em", color: "rgba(248,248,246,0.35)" }}>
        {label}
      </p>
    </div>
  );
}

const PROJECTS: {
  title: string;
  description: string;
  role: string;
  period?: string;
  results: { value: string; label: string }[];
  image: string;
  url: string;
}[] = [
  {
    title: "Web-3 кошелёк",
    description: "ONIX — это приложение для тех африканцев, которые больше не хотят смотреть, как их сбережения превращаются в пыль из-за бешеной девальвации местной валюты.",
    role: "Product designer",
    period: "2024–2026",
    results: [
      { value: "+18", label: "NPS" },
      { value: "−12%", label: "Drop-off Rate" },
      { value: "−80%", label: "Misclick Rate" },
    ],
    image: imgOnix,
    url: "https://dprofile.ru/case/183617/onyx-product-design-case",
  },
  {
    title: "Drift King",
    description: "Концепт мобильного дрифт-симулятора с тюнингом, рейтингами и сезонными событиями. Проверил интерес к игре через лендинг и интервью с игроками.",
    role: "Product designer",
    results: [
      { value: "647", label: "Заинтересовались за 2 недели" },
      { value: "82%", label: "Аудитория на iOS" },
    ],
    image: imgDriftKing,
    url: "https://dprofile.ru/case/173525/drift-king-game-ui-keys",
  },
  {
    title: "K2B E-Learning Platform",
    description: "Лендинг бизнес-школы K2B с анонсами мероприятий. Спроектировал страницу, где можно задать вопрос, записаться на мероприятие или подать заявку на выступление.",
    role: "UX/UI-дизайнер",
    results: [
      { value: "26+", label: "Экранов" },
      { value: "2", label: "Версии сайта" },
    ],
    image: imgK2B,
    url: "https://dprofile.ru/case/137728/k2b-e-learning-platform",
  },
];

function ProjectCard({
  project,
  index,
  landscape = false,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  landscape?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`group relative flex min-w-0 overflow-hidden rounded-[14px] border border-[rgba(248,248,246,0.07)] bg-[#1A1A1A] ${landscape ? "lg:aspect-video" : "lg:h-full"}`}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Смотреть кейс: ${project.title}`}
        className="relative isolate flex min-w-0 flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#3B82F6]"
      >
        <div
          className={`relative h-[126px] shrink-0 overflow-hidden ${landscape ? "lg:h-auto lg:flex-1" : "lg:h-auto lg:aspect-video"}`}
        >
          <ImageWithFallback
            src={project.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-45" />
        </div>
        <div className={`flex flex-1 flex-col p-4 ${landscape ? "lg:flex-none" : "lg:p-8"}`}>
          <h3 className="text-[20px] leading-tight text-[#f8f8f6]">{project.title}</h3>
          <p
            className={`mt-1 line-clamp-2 text-sm leading-5 text-[#f8f8f6]/80 ${landscape ? "" : "lg:mt-3 lg:line-clamp-none lg:leading-relaxed"}`}
            title={project.description}
          >
            {project.description}
          </p>
          <p className={`mt-1 text-xs text-[#f8f8f6]/90 ${landscape ? "" : "lg:mt-5"}`}>
            <span className="text-[#f8f8f6]/65">Роль</span> {project.role} {project.period && <span className="text-[#f8f8f6]/65">· {project.period}</span>}
          </p>
          <div className={`mt-2 flex flex-wrap gap-2 ${landscape ? "lg:flex-nowrap" : "lg:mt-5"}`}>
            {project.results.map(({ value, label }) => (
              <ResultBadge key={label} value={value} label={label} />
            ))}
          </div>
          <span
            className="mt-auto block pt-3 text-sm font-medium text-[#f8f8f6]"
            style={{ fontFamily: F, letterSpacing: "0.025em" }}
          >
            Смотреть кейс →
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export function CaseStudies() {
  const [wallet, ...otherProjects] = PROJECTS;

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

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <ProjectCard project={wallet} index={0} />
          <div className="grid min-w-0 gap-5 lg:gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index + 1} landscape />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
