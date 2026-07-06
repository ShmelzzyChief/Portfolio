import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { Footer } from "../components/Footer";

const FONT = " 'Inter', sans-serif";
const ACCENT = "#DBFD04";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6"
      style={{ fontFamily: FONT }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8"
      style={{
        fontFamily: FONT,
        fontSize: "clamp(28px, 3.5vw, 52px)",
        fontWeight: 500,
      }}
    >
      {children}
    </h2>
  );
}

export function CasePage() {
  return (
    <>
      <main>
        {/* ===== HERO ===== */}
        <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden pt-[64px]">
          <div className="absolute inset-0">
            <img
              src="/Portfolio/assets/cases/onix/onix-hero.png"
              alt="ONIX — крипто-платформа"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/75 to-[#151515]/40" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-8 md:px-12 w-full pb-20 md:pb-28 pt-28">
            <ScrollReveal className="mb-12">
              <Link
                className="inline-flex items-center gap-2 text-[#F8F8F6]/40 hover:text-[#F8F8F6]/80 text-sm tracking-wide transition-colors duration-300 group"
                to="/Portfolio/"
                style={{ fontFamily: FONT }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span>
                Назад к портфолио
              </Link>
            </ScrollReveal>
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                <ScrollReveal>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase mb-6"
                    style={{
                      fontFamily: FONT,
                      color: "rgb(219, 253, 4)",
                      backgroundColor: "rgba(219, 253, 4, 0.082)",
                      border: "1px solid rgba(219, 253, 4, 0.19)",
                    }}
                  >
                    Light app / crypto
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h1
                    className="text-[#F8F8F6] leading-[1.0] tracking-[-0.02em] mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: "clamp(44px, 7vw, 96px)",
                      fontWeight: 500,
                    }}
                  >
                    Крипто-платформа
                    <br />
                    <span className="italic" style={{ opacity: 0.55 }}>
                      для африканцев
                    </span>
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p
                    className="text-[#F8F8F6]/50 max-w-[560px]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 16,
                      fontWeight: 300,
                      lineHeight: 1.75,
                    }}
                  >
                    ONIX — это приложение для тех африканцев, которые больше не
                    хотят смотреть, как их сбережения превращаются в пыль из-за
                    бешеной девальвации местной валюты
                  </p>
                </ScrollReveal>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end lg:justify-end">
                <ScrollReveal delay={0.3}>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
                      <p
                        className="text-[#F8F8F6]/30"
                        style={{ fontFamily: FONT, fontSize: 10, letterSpacing: "0.1em" }}
                      >
                        Роль
                      </p>
                      <p
                        className="text-[#F8F8F6]"
                        style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500 }}
                      >
                        Лид дизайнер
                      </p>
                    </div>
                    <div className="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
                      <p
                        className="text-[#F8F8F6]/30"
                        style={{ fontFamily: FONT, fontSize: 10, letterSpacing: "0.1em" }}
                      >
                        Команда
                      </p>
                      <p
                        className="text-[#F8F8F6]"
                        style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500 }}
                      >
                        1 дизайнер · 4 разраб.
                      </p>
                    </div>
                    <div className="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
                      <p
                        className="text-[#F8F8F6]/30"
                        style={{ fontFamily: FONT, fontSize: 10, letterSpacing: "0.1em" }}
                      >
                        Срок
                      </p>
                      <p
                        className="text-[#F8F8F6]"
                        style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500 }}
                      >
                        12 месяцев
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WIDE HERO IMAGE ===== */}
        <section className="w-full overflow-hidden">
          <ScrollReveal>
            <div className="aspect-[21/9] w-full overflow-hidden bg-[#0a0a0a]">
              <img
                src="/Portfolio/assets/cases/onix/onix-hero.png"
                alt="ONIX — продажа криптовалюты"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "68%", label: "Люди 18–35 лет, которые раньше никогда не имели сбережений" },
                { value: "$ 285", label: "Средний пользователь хранит" },
                { value: "2 Млн", label: "Зарегистрированных пользователей" },
                { value: "12 мин", label: "Каждые 12 минут кто-то сохраняет в долларах" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.value} delay={i * 0.1}>
                  <div>
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: FONT,
                        fontSize: "clamp(32px, 4vw, 56px)",
                        fontWeight: 500,
                        lineHeight: 1,
                        color: ACCENT,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[#F8F8F6]/35"
                      style={{
                        fontFamily: FONT,
                        fontSize: 13,
                        fontWeight: 300,
                        lineHeight: 1.5,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GOAL ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 lg:col-span-5">
                <ScrollReveal>
                  <SectionLabel>Глобальная цель</SectionLabel>
                  <SectionHeading>
                    Crypto is as easy
                    <br />
                    <span className="italic" style={{ color: ACCENT }}>
                      as calling a taxi
                    </span>
                  </SectionHeading>
                </ScrollReveal>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <ScrollReveal delay={0.15}>
                  <p
                    className="text-[#F8F8F6]/50 leading-relaxed"
                    style={{
                      fontFamily: FONT,
                      fontSize: 16,
                      fontWeight: 300,
                      lineHeight: 1.8,
                    }}
                  >
                    Для многих криптовалюта до сих пор звучит как «скам» или
                    что-то очень сложное, непонятное. Мы должны сделать
                    криптовалюту простой — такой же, как вызов такси, превратив
                    Web-3 кошелёк в понятное банковское приложение, с ориентиром
                    на отечественные финтех приложения
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INTERFACE / MOCKUPS ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Интерфейс</SectionLabel>
              <SectionHeading>
                Мобильный опыт
                <br />
                <span className="italic">нового поколения</span>
              </SectionHeading>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/Portfolio/assets/cases/onix/onix-mockup-1.png", alt: "Экран входа в ONIX" },
                { src: "/Portfolio/assets/cases/onix/onix-mockup-2.png", alt: "Главный экран ONIX" },
                { src: "/Portfolio/assets/cases/onix/onix-mockup-3.png", alt: "Верификация в ONIX" },
                { src: "/Portfolio/assets/cases/onix/onix-mockup-4.png", alt: "Успешная регистрация в ONIX" },
              ].map((img, i) => (
                <ScrollReveal key={img.alt} delay={i * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="overflow-hidden rounded-2xl bg-[#111]"
                  >
                    <img src={img.src} alt={img.alt} className="w-full object-cover" />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROBLEMS ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Дизайн-процесс</SectionLabel>
              <SectionHeading>
                Проблемы
                <br />
                <span className="italic">и гипотезы</span>
              </SectionHeading>
            </ScrollReveal>

            {/* Problem 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal>
                <div>
                  <p
                    className="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: FONT }}
                  >
                    Проблема 1
                  </p>
                  <p
                    className="text-[#F8F8F6] mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: 1.7,
                    }}
                  >
                    Пользователи часто уходили сразу после регистрации, не
                    доходя до первого целевого действия, из-за чего конверсия в
                    активного пользователя была низкой.
                  </p>
                  <div className="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
                    <p
                      className="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Гипотеза
                    </p>
                    <p
                      className="text-[#F8F8F6]/70"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      Если добавить обучающие stories и демо-счёт, то получится
                      повысить доверие. А также пользователь смог бы понять
                      механику, увидеть комиссии и риски, попробовав продукт без
                      внесения личных сбережений
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: FONT }}
                    >
                      Тогда моя цель
                    </p>
                    <p
                      className="text-[#F8F8F6]"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      Увеличить конверсию в активного пользователя на 10–15%
                      <br />
                      Повысить возвращаемость на 10–15%
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="flex items-center justify-center">
                  <svg
                    width="100%"
                    height="320"
                    viewBox="0 0 400 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[400px]"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="399"
                      height="319"
                      rx="16"
                      stroke="#484848"
                      strokeWidth="1"
                      fill="none"
                    />
                    <rect
                      x="20.5"
                      y="20.5"
                      width="359"
                      height="279"
                      rx="12"
                      stroke="#484848"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </div>
              </ScrollReveal>
            </div>

            {/* Problem 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal className="order-2 md:order-1">
                <div className="flex items-center justify-center">
                  <svg
                    width="100%"
                    height="320"
                    viewBox="0 0 400 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[400px]"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="399"
                      height="319"
                      rx="16"
                      stroke="#484848"
                      strokeWidth="1"
                      fill="none"
                    />
                    <rect
                      x="20.5"
                      y="20.5"
                      width="359"
                      height="279"
                      rx="12"
                      stroke="#484848"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15} className="order-1 md:order-2">
                <div>
                  <p
                    className="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: FONT }}
                  >
                    Проблема 2
                  </p>
                  <p
                    className="text-[#F8F8F6] mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: 1.7,
                    }}
                  >
                    На экранах одновременно отображалось слишком много
                    информации, пользователи дольше принимали решения, чаще
                    ошибались или не понимали, какой шаг сделать дальше.
                  </p>
                  <div className="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
                    <p
                      className="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Гипотеза
                    </p>
                    <p
                      className="text-[#F8F8F6]/70"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      Если снизить когнитивную нагрузку на пользователя и
                      урезать некоторый функционал платформы, то пользователи
                      станут достигать ключевого действия быстрее. А также
                      количество ошибок и непонимания следующего действия
                      уменьшится
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: FONT }}
                    >
                      Тогда моя цель
                    </p>
                    <p
                      className="text-[#F8F8F6]"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      Разгрузить экраны примерно на 60%, убрав второстепенную
                      информацию, чтобы снизить когнитивную нагрузку
                      <br />
                      Повысить возвращаемость на 10–15%
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Problem 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div>
                  <p
                    className="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: FONT }}
                  >
                    Проблема 3
                  </p>
                  <p
                    className="text-[#F8F8F6] mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: 1.7,
                    }}
                  >
                    Пользователям сложно выбирать сделки, решение занимает много
                    времени, вызывает сомнения и приводит к дроп-оффам на этапе
                    выбора сделки.
                  </p>
                  <div className="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
                    <p
                      className="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Гипотеза
                    </p>
                    <p
                      className="text-[#F8F8F6]/70"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      Если при подборе сделки учитывать итоговую сумму «на
                      руки», показывать пользователю лучшие варианты и
                      объяснять, почему выбран именно этот вариант, то им будет
                      проще принимать решение и совершать операции
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: FONT }}
                    >
                      Тогда моя цель
                    </p>
                    <p
                      className="text-[#F8F8F6]"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      Понизить дроп-офф рейтинг до максимально возможного
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="flex items-center justify-center">
                  <svg
                    width="100%"
                    height="320"
                    viewBox="0 0 400 320"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-[400px]"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="399"
                      height="319"
                      rx="16"
                      stroke="#484848"
                      strokeWidth="1"
                      fill="none"
                    />
                    <rect
                      x="20.5"
                      y="20.5"
                      width="359"
                      height="279"
                      rx="12"
                      stroke="#484848"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== BRANDING ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Брендинг</SectionLabel>
              <SectionHeading>
                Визуальная
                <br />
                <span className="italic">идентичность</span>
              </SectionHeading>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ScrollReveal>
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111]">
                  <img
                    src="/Portfolio/assets/cases/onix/onix-branding-left.png"
                    alt="Нотификация ONIX"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111] flex items-center justify-center p-8">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="200" height="200" rx="24" fill="#04452E" />
                    <text
                      x="100"
                      y="115"
                      textAnchor="middle"
                      fill="#DBFD04"
                      style={{ fontFamily: FONT, fontSize: 72, fontWeight: 600 }}
                    >
                      O
                    </text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== DISCOVERY RESULTS ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Результаты дискавери</SectionLabel>
              <SectionHeading>
                Что мы
                <br />
                <span className="italic">обнаружили</span>
              </SectionHeading>
              <p
                className="text-[#F8F8F6]/50 max-w-[640px]"
                style={{
                  fontFamily: FONT,
                  fontSize: 15,
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                После исследования появились идеи, как улучшить интерфейс и от
                каких функций нужно отказаться в пользу работоспособности и
                удобства:
              </p>
              <ul
                className="mt-4 text-[#F8F8F6]/50"
                style={{
                  fontFamily: FONT,
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                <li>Убрать некоторые динамически меняющиеся части приложения</li>
                <li>Подбирать лучшие сделки автоматически</li>
                <li>Сделать сторис и демо-счёт</li>
                <li>Реализовать понятный онбординг</li>
                <li>Изменить флоу верификации с заменой на сторонний API</li>
              </ul>
            </ScrollReveal>

            {/* Main Page */}
            <div className="mb-16">
              <ScrollReveal>
                <h3
                  className="text-[#F8F8F6] mb-2"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 500,
                  }}
                >
                  Главная страница
                </h3>
                <p
                  className="text-[#F8F8F6]/40 mb-6"
                  style={{ fontFamily: FONT, fontSize: 14 }}
                >
                  Что улучшилось?
                </p>
                <div className="mb-6">
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    <span className="text-[#DBFD04]">
                      Time on Task уменьшился на 30%
                    </span>{" "}
                    за счёт уменьшения количества доступных действий
                  </p>
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    <span className="text-[#DBFD04]">
                      Drop-off Rate уменьшился на 12%
                    </span>
                    . Форма становится понятнее, на сигналы можно реагировать
                    быстрее
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="overflow-hidden rounded-2xl bg-[#111]">
                  <img
                    src="/Portfolio/assets/cases/onix/onix-discovery-main.png"
                    alt="Главная страница ONIX после дискавери"
                    className="w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Autofill */}
            <div className="mb-16">
              <ScrollReveal>
                <h3
                  className="text-[#F8F8F6] mb-2"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 500,
                  }}
                >
                  Автозаполнение и закладки
                </h3>
                <div className="mb-6">
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    Time on Task уменьшился на 30% за счёт уменьшения количества
                    доступных действий
                  </p>
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    <span className="text-[#DBFD04]">
                      Misclick rate уменьшился на 80%
                    </span>{" "}
                    за счёт уменьшения количества доступных действий
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="overflow-hidden rounded-2xl bg-[#111]">
                  <img
                    src="/Portfolio/assets/cases/onix/onix-discovery-auto.png"
                    alt="Автозаполнение в ONIX"
                    className="w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Counterparty Search */}
            <div>
              <ScrollReveal>
                <h3
                  className="text-[#F8F8F6] mb-2"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(20px, 2vw, 28px)",
                    fontWeight: 500,
                  }}
                >
                  Поиск лучших контрагентов
                </h3>
                <p
                  className="text-[#F8F8F6]/40 mb-2"
                  style={{ fontFamily: FONT, fontSize: 14 }}
                >
                  Что улучшилось?
                </p>
                <div className="mb-6">
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    Время до трейда уменьшилось на 37 секунд
                  </p>
                  <p
                    className="text-[#F8F8F6]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    <span className="text-[#DBFD04]">
                      NPS активных 650 пользователей увеличился на 18 пунктов
                    </span>{" "}
                    и выше показателя 48% после внедрения механизма
                    автоматического подбора контрагентов
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="overflow-hidden rounded-2xl bg-[#111]">
                  <img
                    src="/Portfolio/assets/cases/onix/onix-discovery-search.png"
                    alt="Поиск контрагентов в ONIX"
                    className="w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== UI KIT ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>UI Kit</SectionLabel>
              <SectionHeading>
                Дизайн-система,
                <br />
                <span className="italic">созданная надолго</span>
              </SectionHeading>
            </ScrollReveal>

            {/* Colors */}
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#DBFD04" }}>
                  <p className="text-[#151515] text-xs mb-1" style={{ fontFamily: FONT }}>
                    HEX: DBFD04
                  </p>
                  <p className="text-[#151515]/70 text-xs" style={{ fontFamily: FONT }}>
                    RGB: 219 253 4
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#04452E" }}>
                  <p className="text-[#F8F8F6] text-xs mb-1" style={{ fontFamily: FONT }}>
                    HEX: 04452E
                  </p>
                  <p className="text-[#F8F8F6]/70 text-xs" style={{ fontFamily: FONT }}>
                    RGB: 4 69 46
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#484848" }}>
                  <p className="text-[#F8F8F6] text-xs mb-1" style={{ fontFamily: FONT }}>
                    HEX: 484848
                  </p>
                  <p className="text-[#F8F8F6]/70 text-xs" style={{ fontFamily: FONT }}>
                    RGB: 72 72 72
                  </p>
                </div>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "#FAFAFA" }}>
                  <p className="text-[#151515] text-xs mb-1" style={{ fontFamily: FONT }}>
                    HEX: FAFAFA
                  </p>
                  <p className="text-[#151515]/70 text-xs" style={{ fontFamily: FONT }}>
                    RGB: 250 250 250
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Typography + Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <ScrollReveal>
                <div className="p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
                  <p
                    className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-6"
                    style={{ fontFamily: FONT }}
                  >
                    Typography
                  </p>
                  <p
                    className="text-[#DBFD04] mb-2"
                    style={{
                      fontFamily: "'SF Pro Display', Inter, sans-serif",
                      fontSize: 32,
                      fontWeight: 500,
                    }}
                  >
                    SF Pro Display
                  </p>
                  <p
                    className="text-[#F8F8F6]/70 mb-6"
                    style={{
                      fontFamily: "'SF Pro Text', Inter, sans-serif",
                      fontSize: 18,
                    }}
                  >
                    SF Pro Text
                  </p>
                  <p
                    className="text-[#F8F8F6]/40 text-sm"
                    style={{ fontFamily: "'SF Pro Text', Inter, sans-serif" }}
                  >
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss
                    Tt Uu Vv Ww Xx Yy Zz
                  </p>
                  <p
                    className="text-[#F8F8F6]/40 text-sm mt-2"
                    style={{ fontFamily: "'SF Pro Text', Inter, sans-serif" }}
                  >
                    0123456789
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl bg-[#111] p-1">
                  <img
                    src="/Portfolio/assets/cases/onix/onix-uikit-mockup.png"
                    alt="Мокап в UI-kit ONIX"
                    className="w-full object-cover rounded-xl"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Icons */}
            <ScrollReveal>
              <div className="p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
                <p
                  className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-6"
                  style={{ fontFamily: FONT }}
                >
                  Iconography
                </p>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6">
                  {/* Search */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="14" cy="14" r="9" />
                    <line x1="21" y1="21" x2="28" y2="28" />
                  </svg>
                  {/* Lock */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="14" width="20" height="16" rx="2" />
                    <path d="M10 14V10a6 6 0 0 1 12 0v4" />
                  </svg>
                  {/* Globe */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="16" cy="16" r="12" />
                    <ellipse cx="16" cy="16" rx="12" ry="5" />
                    <line x1="4" y1="16" x2="28" y2="16" />
                    <line x1="16" y1="4" x2="16" y2="28" />
                  </svg>
                  {/* Clock */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="12" />
                    <polyline points="16,8 16,16 22,16" />
                  </svg>
                  {/* Document */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 4H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10l-6-6z" />
                    <polyline points="20,4 20,10 26,10" />
                    <line x1="12" y1="18" x2="20" y2="18" />
                    <line x1="12" y1="22" x2="20" y2="22" />
                  </svg>
                  {/* Bitcoin */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M16 8v16M12 10h6M12 22h6M13 8v-2M19 8v-2M13 26v-2M19 26v-2" />
                  </svg>
                  {/* Ethereum */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="16,4 26,16 16,12 6,16" />
                    <polygon points="16,28 26,18 16,22 6,18" />
                  </svg>
                  {/* Tether */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="16" cy="16" r="12" />
                    <line x1="12" y1="10" x2="20" y2="10" />
                    <line x1="16" y1="10" x2="16" y2="22" />
                    <line x1="12" y1="16" x2="20" y2="16" />
                  </svg>
                  {/* Chart */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4,20 10,14 16,18 22,8 28,12" />
                    <circle cx="22" cy="8" r="2" />
                  </svg>
                  {/* Download */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4v16M10 14l6 6 6-6" />
                    <line x1="6" y1="26" x2="26" y2="26" />
                  </svg>
                  {/* Upload */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 28V12M10 18l6-6 6 6" />
                    <line x1="6" y1="6" x2="26" y2="6" />
                  </svg>
                  {/* Arrow swap */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12l4-4 4 4M20 20l-4 4-4-4" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== TESTING ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Проверка дизайна</SectionLabel>
              <SectionHeading>
                Выводы
                <br />
                <span className="italic">тестирования</span>
              </SectionHeading>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <div>
                  <p
                    className="text-[#F8F8F6]/70 mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    Были проведены модерируемые тесты с опер группой из 7
                    испытуемых, замер показал, что время выполнения, количество
                    ошибок, конверсии и NPS выросли по сравнению с замерами
                    таких же действий, но на платформе с полноценным
                    функционалом
                  </p>
                  <p
                    className="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ fontFamily: FONT }}
                  >
                    Методы:
                  </p>
                  <ul
                    className="text-[#F8F8F6]/50 mb-6"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.8,
                    }}
                  >
                    <li>
                      А/В-тест: light-app и полноценная версия приложения
                    </li>
                    <li>
                      Анализ поведения пользователей по пути к call to action
                    </li>
                    <li>
                      Опросы об удовлетворённости в работе автоматического
                      подбора
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <div>
                <ScrollReveal delay={0.1}>
                  <div className="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
                    <p
                      className="text-[#DBFD04] text-sm tracking-[0.15em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Вывод
                    </p>
                    <p
                      className="text-[#F8F8F6]/70"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      Сложности пользователей связаны не с высокой когнитивной
                      нагрузкой. Наиболее критичными оказалась необходимость
                      принимать множество решений во время сделки и
                      недостаточная прозрачность процессов. Анализ показал, что
                      наибольший потенциал для улучшения лежит в автоматизации
                      принятия решений
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
                    <p
                      className="text-[#DBFD04] text-sm tracking-[0.15em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Что получилось
                    </p>
                    <p
                      className="text-[#F8F8F6]/70"
                      style={{
                        fontFamily: FONT,
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.7,
                      }}
                    >
                      Снизили когнитивную нагрузку на пользователей за счёт
                      упрощения интерфейсов и сокращения количества решений,
                      принимаемых в процессе сделки, что в следствии понизило
                      количество ошибок и сделало опыт более предсказуемым,
                      снизился отток пользователей на этапе выбора параметров
                      сделки, снизился риск ошибочного выбора контрагента
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISUAL / BRANDING ===== */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-10">
              <SectionLabel>Visual</SectionLabel>
            </ScrollReveal>
            <div className="grid grid-cols-12 gap-5 md:gap-6 items-end mb-6">
              <div className="col-span-12 md:col-span-8 overflow-hidden rounded-2xl bg-[#111] relative">
                <ScrollReveal>
                  <img
                    src="/Portfolio/assets/cases/onix/onix-visual-1.png"
                    alt="Our ideology — ONIX"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                    <p
                      className="text-[#F8F8F6]/40 text-xs tracking-[0.3em] uppercase mb-3"
                      style={{ fontFamily: FONT }}
                    >
                      Our ideology
                    </p>
                    <p
                      className="text-[#F8F8F6] max-w-[380px]"
                      style={{
                        fontFamily: FONT,
                        fontSize: "clamp(20px, 2.5vw, 30px)",
                        fontWeight: 500,
                        lineHeight: 1.25,
                      }}
                    >
                      We believe in financial freedom of all
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
                <ScrollReveal delay={0.1}>
                  <div className="overflow-hidden rounded-2xl bg-[#111]">
                    <img
                      src="/Portfolio/assets/cases/onix/onix-visual-2.png"
                      alt="Пользователь ONIX"
                      className="w-full object-cover"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="overflow-hidden rounded-2xl bg-[#111]">
                    <img
                      src="/Portfolio/assets/cases/onix/onix-visual-3.png"
                      alt="Брендинг ONIX"
                      className="w-full object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal delay={0.15}>
              <div className="overflow-hidden rounded-2xl bg-[#111] mb-6">
                <img
                  src="/Portfolio/assets/cases/onix/onix-visual-4.png"
                  alt="Карта ONIX Member"
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="pt-10">
                <div
                  className="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                  style={{ backgroundColor: "rgb(219, 253, 4)" }}
                >
                  <p
                    className="text-[#151515] max-w-[500px]"
                    style={{
                      fontFamily: FONT,
                      fontSize: "clamp(24px, 3.5vw, 44px)",
                      fontWeight: 500,
                      lineHeight: 1.15,
                    }}
                  >
                    Crypto is as easy
                    <br />
                    as calling a taxi
                  </p>
                  <p
                    className="text-[#151515]/60 max-w-[260px]"
                    style={{
                      fontFamily: FONT,
                      fontSize: 14,
                      fontWeight: 300,
                      lineHeight: 1.65,
                    }}
                  >
                    ONIX превратил Web3-кошелёк в понятный банковский интерфейс
                    для 2М+ пользователей по всей Африке.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== CTA IMAGE ===== */}
        <section className="w-full overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl bg-[#111]">
                <img
                  src="/Portfolio/assets/cases/onix/onix-cta.png"
                  alt="ONIX — Crypto is as easy as calling a taxi"
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== NEXT ===== */}
        <section className="py-20 md:py-28 border-t border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 text-center">
            <ScrollReveal>
              <div>
                <p
                  className="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6"
                  style={{ fontFamily: FONT }}
                >
                  Далее
                </p>
                <Link
                  className="inline-flex items-center gap-3 text-[#F8F8F6]/55 hover:text-[#F8F8F6] transition-colors duration-300 group"
                  to="/Portfolio/"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(22px, 3vw, 40px)",
                    fontWeight: 500,
                  }}
                >
                  Все работы
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}