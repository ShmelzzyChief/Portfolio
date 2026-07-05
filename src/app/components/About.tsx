import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, staggerItem } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgSea from "figma:asset/faacb94587baa44180e381740482020a20b2e1e3.png";
import imgCat from "figma:asset/fbea2ce180e539a3e321a05073139fca5c4ed8c4.png";
import imgFriends from "figma:asset/1e5236f42a30f883d86857e1c346b0163fb1e1d6.png";

const F = "'SuisseIntl', 'Inter', sans-serif";

const SKILLS = [
  "Продуктовый дизайн",
  "UX-исследования",
  "UI-дизайн",
  "Дизайн-системы",
  "Прототипирование",
  "Аналитика",
  "Пользовательское тестирование",
  "Продуктовая стратегия",
];

const STATS = [
  { value: "4+", label: "Лет в продуктовом дизайне" },
  { value: "12+", label: "Запущенных продуктов" },
  { value: "2М+", label: "Пользователей у продуктов" },
];

const TIMELINE = [
  {
    dates: "01.2026–05.2026 (5 месяцев)",
    role: "Продуктовый дизайнер, AI-creator",
    company: "AI start-up chat bot",
    desc: "Запускал платформу совместно с фаундером и фулл-стек разработчиком. Создавал цифровых личностей.",
    current: true,
  },
  {
    dates: "11.2024–01.2026 (1.3 года)",
    role: "Продуктовый дизайнер",
    company: "Fintech, crypto",
    desc: "Отвечал за ключевые продуктовые области: онбординг, платёжный флоу и мобильный опыт.",
    current: false,
  },
  {
    dates: "02.2022–11.2024 (2.10 лет)",
    role: "Продуктовый дизайнер",
    company: "Агентство",
    desc: "Вёл дизайн-проекты от дискавери до запуска. Учился тестированию, коммуникации с командой и заказчиком. Проектировал интерфейсы, формулировал гипотезы для тестов.",
    current: false,
  },
  {
    dates: "2020",
    role: "Обучение в Disatro и в Бюро Горбунова",
    company: "UX/UI дизайн",
    desc: "Учился дизайну самостоятельно и на курсах, читал книги, смотрел YouTube, пробовал себя во фрилансе.",
    current: false,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[rgba(248,248,246,0.06)]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">

        {/* ── About block ── */}
        <ScrollReveal>
          <p
            className="mb-0"
            style={{
              fontFamily: F,
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(248,248,246,0.3)",
              marginBottom: 32,
            }}
          >
            Обо мне
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mb-16">
          {/* Left: heading + bio */}
          <div className="col-span-12 lg:col-span-6">
            <ScrollReveal delay={0.08}>
              <h2
                className="mb-8"
                style={{
                  fontFamily: F,
                  fontSize: "clamp(28px, 4vw, 36px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#f8f8f6",
                  paddingTop: 32,
                }}
              >
                Делаю красиво,
                <br />
                думая системно
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p
                className="mb-0"
                style={{
                  fontFamily: F,
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "rgba(248,248,246,0.55)",
                }}
              >
                В дизайне с 2020 года. У меня нет вышки, но есть горящие глаза
                от дизайна и я верю, что лучшие продукты рождаются там, где
                бизнес-цели встречаются с потребностями людей. Работал с
                fintech-стартапами, крипто-платформами. B2B, B2C, C2C, SaaS.
                Мне важно не просто делать красиво — мне важно делать правильно.
                Это значит: понять пользователя, разобраться в бизнес-контексте,
                найти решение, которое работает сразу для обоих. Вне работы —
                изучаю новые паттерны взаимодействия, слежу за тем, как меняются
                digital-продукты, и периодически пишу об этом в блоге.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: photo collage — big photo on top, two small below */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col" style={{ gap: 10 }}>
                <div
                  className="w-full overflow-hidden"
                  style={{ borderRadius: 16, aspectRatio: "4/3" }}
                >
                  <ImageWithFallback
                    src={imgSea}
                    alt="Личное фото"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex" style={{ gap: 10 }}>
                  <div
                    className="flex-1 overflow-hidden"
                    style={{ borderRadius: 16, aspectRatio: "1/1" }}
                  >
                    <ImageWithFallback
                      src={imgCat}
                      alt="Личное фото с котом"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="flex-1 overflow-hidden"
                    style={{ borderRadius: 16, aspectRatio: "1/1" }}
                  >
                    <ImageWithFallback
                      src={imgFriends}
                      alt="Личное фото с друзьями"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p
                style={{
                  fontFamily: F,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#f8f8f6",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: F,
                  fontSize: 13,
                  fontWeight: 300,
                  color: "rgba(248,248,246,0.4)",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skill tags */}
        <ScrollReveal className="mb-20">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((tag) => (
              <span
                key={tag}
                className="rounded-full"
                style={{
                  fontFamily: F,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  color: "rgba(248,248,246,0.5)",
                  border: "1px solid rgba(248,248,246,0.12)",
                  padding: "7px 13px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Career timeline ── */}
        <ScrollReveal>
          <p
            style={{
              fontFamily: F,
              fontSize: 12,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(248,248,246,0.3)",
              marginBottom: 32,
            }}
          >
            Карьера
          </p>
        </ScrollReveal>

        <StaggerContainer stagger={0.1} delayStart={0.1}>
          <div className="relative">
            <div className="absolute left-0 top-1 bottom-0 w-px bg-[rgba(248,248,246,0.08)]" />
            {TIMELINE.map((item) => (
              <motion.div
                key={item.dates}
                variants={staggerItem}
                className="relative pl-8 pb-10 last:pb-0"
              >
                {/* dot */}
                <div className="absolute left-0 top-[5px] -translate-x-1/2 w-[7px] h-[7px] rounded-full border border-[rgba(248,248,246,0.2)] bg-[#151515] flex items-center justify-center">
                  <div
                    className="w-[3px] h-[3px] rounded-full"
                    style={{ backgroundColor: item.current ? "#3B82F6" : "rgba(248,248,246,0.3)" }}
                  />
                </div>

                <p
                  className="mb-1"
                  style={{
                    fontFamily: F,
                    fontSize: 12,
                    color: "rgba(248,248,246,0.25)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.dates}
                </p>
                <p
                  className="mb-0.5"
                  style={{ fontFamily: F, fontSize: 15, color: "#f8f8f6", fontWeight: 400 }}
                >
                  {item.role}
                </p>
                <p
                  className="mb-2"
                  style={{ fontFamily: F, fontSize: 13, color: "#3B82F6" }}
                >
                  {item.company}
                </p>
                <p
                  style={{
                    fontFamily: F,
                    fontSize: 14,
                    fontWeight: 300,
                    color: "rgba(248,248,246,0.4)",
                    lineHeight: 1.65,
                    maxWidth: 737,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
