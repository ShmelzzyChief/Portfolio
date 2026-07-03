import { ScrollReveal } from "./ScrollReveal";
import { motion } from "motion/react";

const SKILL_GROUPS = [
  {
    category: "Продуктовый дизайн",
    items: [
      "Продуктовое мышление",
      "UX-архитектура",
      "Проектирование взаимодействий",
      "Визуальный дизайн",
      "Mobile & Web",
      "Моушн-дизайн",
    ],
  },
  {
    category: "Исследования и стратегия",
    items: [
      "Пользовательские интервью",
      "Юзабилити-тестирование",
      "A/B тестирование",
      "Количественная аналитика",
      "Конкурентный анализ",
      "Jobs-to-be-Done",
    ],
  },
  {
    category: "Системы и процессы",
    items: [
      "Дизайн-системы",
      "Компонентные библиотеки",
      "Документация",
      "Передача в разработку",
      "Design Ops",
      "Лидерство в команде",
    ],
  },
];

const TOOLS = [
  "Figma",
  "Framer",
  "Principle",
  "Amplitude",
  "Mixpanel",
  "Hotjar",
  "Notion",
  "Linear",
  "Jira",
  "Storybook",
  "Zeplin",
  "Loom",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 md:py-40 border-t border-[#F8F8F6]/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        <ScrollReveal className="mb-16 md:mb-20">
          <p
            className="text-[#F8F8F6]/30 text-xs tracking-[0.35em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Экспертиза
          </p>
          <h2
            className="text-[#F8F8F6] leading-[1.05] tracking-[-0.02em]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 500,
            }}
          >
            Навыки и{" "}
            <span className="italic">инструменты</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-20">
          {SKILL_GROUPS.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div>
                <p
                  className="text-[#F8F8F6]/30 text-xs tracking-[0.25em] uppercase mb-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {group.category}
                </p>
                <ul className="space-y-3">
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: gi * 0.05 + ii * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#F8F8F6]/20 shrink-0" />
                      <span
                        className="text-[#F8F8F6]/65"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 15,
                          fontWeight: 300,
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="pt-10 border-t border-[#F8F8F6]/[0.06]">
            <p
              className="text-[#F8F8F6]/25 text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Инструменты
            </p>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="px-3.5 py-1.5 border border-[#F8F8F6]/10 text-[#F8F8F6]/50 rounded-full hover:border-[#F8F8F6]/25 hover:text-[#F8F8F6]/80 transition-all duration-300 cursor-default"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 400,
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
