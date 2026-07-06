import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";

// КриптоКейс-2 assets
import imgBanner from "figma:asset/a0dda637b64977f7755958c86d55484732aa596f.png";
import imgBg from "figma:asset/07b27cc93e8625bce2a24368a981aaae054b95e4.png";
import imgBgCity from "figma:asset/4248d881d3a3ed04c512a643d91d98c973f9704d.png";
import imgMan from "figma:asset/753271b721db8c028221d9b4c1f26005492148f0.png";
import imgScreenChangeMe1 from "figma:asset/0b4eee2f50d0f01b727a92e815b2670acb614ec4.png";
import imgFrame1000003271 from "figma:asset/3b5daa803f9582352a2dcc6036ba6d89a1b807c6.png";
import imgImage585 from "figma:asset/edba9068eb93957563cafbaa87856ad4a0d52be9.png";
import imgImage586 from "figma:asset/177c9d680cf2e163dcc61a8395ec389d82f62dc2.png";
import imgImage588 from "figma:asset/dbe3e39981135b3cdd8fade08657f98a59ef7488.png";
import imgFrame1000004759 from "figma:asset/2441be19b27f79529cab76968b7ed7506e691a68.png";
import imgImage4 from "figma:asset/f0a7ed643df777e96b81de97aed95da0dedf27c5.png";
import imgFrame1000004760 from "figma:asset/fbaabdf47a8370008c53b21df47bbaba9e892501.png";
import imgImage5 from "figma:asset/b70347a5184a0265d7361574d41180374c4e48f7.png";
import imgImage579 from "figma:asset/d83d0071dd87b591f9ab1d20f821eac134571a75.png";
import imgImage580 from "figma:asset/4dbac5c3df9e291ec9662c331d48c49c0b08449d.png";
import imgTypography from "figma:asset/42fbc45db3ea294d123091ebfbc2c94942c8f9ed.png";
import imgTypography1 from "figma:asset/a450e7ab7f7c1fa42ac1e710e45e5c6f336ffcf2.png";
import imgBanner1 from "figma:asset/0660b08a5e7f62f516f4a67f179d616300e5fa85.png";
import imgImage562 from "figma:asset/9806b3d62038678f131c99fef38f8cb600281d40.png";
import imgImage563 from "figma:asset/6f98c3c31625483bebb39a8c046326d80e95c0fc.png";
import imgFrame2085661477 from "figma:asset/28df4a45d8ceb9d14146ee88a43205593cf3c1ee.png";
import imgImage561 from "figma:asset/f4c50151d85f2a05c52a1a1d63e51732a2b145e6.png";
import imgImage589 from "figma:asset/e1d56cfbe57e49ba08305a71246250a21eac95b8.png";
import imgImageCard from "figma:asset/1064616d2604c5a4a7aa15dcce1ee2a9d2417117.png";
import imgContainer from "figma:asset/e850f94e777f7ae4b50f1b6303e4d316d1e12a45.png";
import imgBg1 from "figma:asset/1eb93b729c45a573b3bcd3c37c96bf902d6a09a3.png";

const FONT = " 'Inter', sans-serif";
const ACCENT = "#DBFD04";

function SectionLabel({ children }: { children: string }) {
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

function Divider() {
  return <div className="h-px bg-[#F8F8F6]/[0.06] my-0" />;
}

const problems = [
  {
    title: "Проблема 1",
    body: "Новые пользователи не понимали, что происходит с их деньгами внутри крипто-кошелька — переводы, комиссии и курс выглядели как «чёрный ящик».",
    hypothesis: "Если показать баланс и операции в привычном банковском формате, доверие и повторные заходы вырастут.",
    goal: "Свести первый вход в приложение к тем же трём шагам, что и в любом финтех-приложении: узнать баланс, положить деньги, снять деньги.",
  },
  {
    title: "Проблема 2",
    body: "Пополнение требовало выбора сети, токена и подтверждения транзакции — три экрана, которые пугали людей без опыта в крипте.",
    hypothesis: "Скрыв технические детали за одной кнопкой «Пополнить» с автоподбором сети, мы уберём точки отказа.",
    goal: "Сократить путь между «хочу положить деньги» и «деньги на счету» до одного экрана.",
  },
  {
    title: "Проблема 3",
    body: "Курс местной валюты падал быстрее, чем люди успевали среагировать, а перевод в доллары ощущался рискованным и непонятным.",
    hypothesis: "Явный, live-обновляемый курс и объяснение «почему доллары стабильнее» снизят тревожность при первом переводе.",
    goal: "Дать пользователю понять в первые 12 минут использования, что его сбережения перестали обесцениваться.",
  },
];

function ProblemsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        <ScrollReveal className="mb-14">
          <SectionLabel>Проблемы</SectionLabel>
          <SectionHeading>
            Что мешало
            <br />
            <span className="italic">пользователям доверять</span>
          </SectionHeading>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-wrap gap-3 mb-10">
          {problems.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className="px-4 py-2.5 rounded-full text-sm transition-colors duration-300"
              style={{
                fontFamily: FONT,
                fontWeight: 500,
                color: active === i ? ACCENT : "rgba(248,248,246,0.45)",
                backgroundColor: active === i ? `${ACCENT}15` : "rgba(248,248,246,0.04)",
                border: `1px solid ${active === i ? `${ACCENT}30` : "rgba(248,248,246,0.08)"}`,
              }}
            >
              {p.title}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Что происходило", text: problems[active].body },
            { label: "Гипотеза", text: problems[active].hypothesis },
            { label: "Тогда моя цель", text: problems[active].goal },
          ].map((block) => (
            <motion.div
              key={block.label + active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl h-full"
            >
              <p
                className="text-[#F8F8F6]/25 text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: FONT }}
              >
                {block.label}
              </p>
              <p
                className="text-[#F8F8F6]/70"
                style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.7 }}
              >
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CasePage() {
  return (
    <>
      <main>
        {/* ─── HERO ─── */}
        <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden pt-[64px]">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={imgBgCity}
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/75 to-[#151515]/40" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-8 md:px-12 w-full pb-20 md:pb-28 pt-28">
            {/* Back */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#F8F8F6]/40 hover:text-[#F8F8F6]/80 text-sm tracking-wide transition-colors duration-300 group"
                style={{ fontFamily: FONT }}
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span>
                Назад к портфолио
              </Link>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 lg:col-span-8">
                {/* Tag */}
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase mb-6"
                  style={{
                    fontFamily: FONT,
                    color: ACCENT,
                    backgroundColor: `${ACCENT}15`,
                    border: `1px solid ${ACCENT}30`,
                  }}
                >
                  Light app / crypto
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-[#F8F8F6] leading-[1.0] tracking-[-0.02em] mb-6"
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(44px, 7vw, 96px)",
                    fontWeight: 500,
                  }}
                >
                  Крипто-платформа
                  <br />
                  <span className="italic" style={{ opacity: 0.55 }}>для африканцев</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="text-[#F8F8F6]/50 max-w-[560px]"
                  style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, lineHeight: 1.75 }}
                >
                  ONIX — приложение для тех, кто больше не хочет смотреть, как
                  их сбережения превращаются в пыль из-за девальвации местной валюты.
                </motion.p>
              </div>

              <div className="col-span-12 lg:col-span-4 lg:flex lg:items-end lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.75 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { k: "Роль", v: "Лид дизайнер" },
                    { k: "Команда", v: "1 дизайнер · 4 разраб." },
                    { k: "Срок", v: "12 месяцев" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl"
                    >
                      <p className="text-[#F8F8F6]/30" style={{ fontFamily: FONT, fontSize: 10, letterSpacing: "0.1em" }}>
                        {item.k}
                      </p>
                      <p className="text-[#F8F8F6]" style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500 }}>
                        {item.v}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BANNER ─── */}
        <section className="w-full overflow-hidden">
          <ScrollReveal y={0} duration={1.2}>
            <div className="aspect-[21/9] w-full overflow-hidden bg-[#0a0a0a]">
              <ImageWithFallback
                src={imgBanner}
                alt="Экран продажи криптовалюты в ONIX"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* ─── KEY METRICS ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "68%", label: "Молодёжь 18–35, впервые имеющая сбережения" },
                { value: "$285", label: "Средний пользователь хранит" },
                { value: "2 Млн", label: "Зарегистрированных пользователей" },
                { value: "12 мин", label: "Каждые 12 минут кто-то сохраняет в долларах" },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
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
                    {m.value}
                  </p>
                  <p className="text-[#F8F8F6]/35" style={{ fontFamily: FONT, fontSize: 13, fontWeight: 300, lineHeight: 1.5 }}>
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GLOBAL GOAL ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 lg:col-span-5">
                <ScrollReveal>
                  <SectionLabel>Глобальная цель</SectionLabel>
                  <SectionHeading>
                    Crypto is as easy
                    <br />
                    <span className="italic" style={{ color: ACCENT }}>as calling a taxi</span>
                  </SectionHeading>
                </ScrollReveal>
              </div>
              <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                <ScrollReveal delay={0.15}>
                  <p className="text-[#F8F8F6]/50 leading-relaxed" style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, lineHeight: 1.8 }}>
                    Для многих криптовалюта до сих пор звучит как «скам» или
                    что-то очень сложное. Мы должны сделать её простой — такой
                    же, как вызов такси, превратив Web3-кошелёк в понятное
                    банковское приложение с ориентиром на отечественные
                    финтех-продукты.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PHONE MOCKUPS ─── */}
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
              {[imgScreenChangeMe1, imgFrame1000003271, imgImage562, imgImage563].map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.07} className="overflow-hidden rounded-2xl bg-[#111]">
                  <ImageWithFallback
                    src={img}
                    alt={`Экран приложения ${i + 1}`}
                    className="w-full object-cover"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEMS ─── */}
        <ProblemsSection />

        {/* ─── DESIGN PROCESS ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Дизайн-процесс</SectionLabel>
              <SectionHeading>
                Системное мышление,
                <br />
                <span className="italic">человеческий результат</span>
              </SectionHeading>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {[
                {
                  num: "01",
                  title: "Исследование и дискавери",
                  desc: "24 пользовательских интервью, анализ воронки, конкурентный ресёрч. Выявлено: пользователи не доверяли интерфейсу и боялись сложности крипты.",
                },
                {
                  num: "02",
                  title: "Предположения дискавери",
                  desc: "Сформулировали гипотезы: упрощение онбординга, банковский язык UI, фокус на доверии через визуальные сигналы безопасности.",
                },
                {
                  num: "03",
                  title: "Дизайн и итерации",
                  desc: "8 дизайн-спринтов, 3 принципиальных разворота, 120+ экранов. Каждый флоу тестировался с реальными пользователями до выхода в релиз.",
                },
                {
                  num: "04",
                  title: "Запуск и результат",
                  desc: "Запустили за 6 месяцев. Мониторинг через Mixpanel и Hotjar. Конверсия выросла на 68% в первом квартале после запуска.",
                },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.07}>
                  <div className="p-6 md:p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl h-full">
                    <p
                      className="mb-5"
                      style={{ fontFamily: FONT, fontSize: 28, fontWeight: 500, color: `${ACCENT}30`, lineHeight: 1 }}
                    >
                      {step.num}
                    </p>
                    <p className="text-[#F8F8F6] mb-3" style={{ fontFamily: FONT, fontSize: 15, fontWeight: 600 }}>
                      {step.title}
                    </p>
                    <p className="text-[#F8F8F6]/45" style={{ fontFamily: FONT, fontSize: 14, fontWeight: 300, lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Process screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ScrollReveal className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111]">
                <ImageWithFallback src={imgImage585} alt="Процесс дизайна" className="w-full h-full object-cover" />
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111]">
                <ImageWithFallback src={imgImage586} alt="Итерации дизайна" className="w-full h-full object-cover" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── DISCOVERY RESULTS ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Результаты дискавери</SectionLabel>
              <SectionHeading>
                Что мы
                <br />
                <span className="italic">обнаружили</span>
              </SectionHeading>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[imgImage588, imgImage4, imgImage5, imgImage579, imgImage580, imgImage589].map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.06} className="overflow-hidden rounded-xl bg-[#111]">
                  <ImageWithFallback
                    src={img}
                    alt={`Результат дискавери ${i + 1}`}
                    className="w-full object-cover"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── KEY SCREENS FULL ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Ключевые экраны</SectionLabel>
              <SectionHeading>
                Спроектировано
                <br />
                <span className="italic">для ясности</span>
              </SectionHeading>
            </ScrollReveal>

            <ScrollReveal className="overflow-hidden rounded-2xl mb-5 bg-[#111]">
              <ImageWithFallback src={imgBg} alt="Ключевые экраны ONIX" className="w-full object-cover" />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[imgFrame1000004759, imgFrame1000004760, imgFrame2085661477].map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.08} className="overflow-hidden rounded-2xl bg-[#111]">
                  <ImageWithFallback src={img} alt={`Экран ${i + 1}`} className="w-full object-cover" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESULTS ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Результат</SectionLabel>
              <SectionHeading>
                Измеримый
                <br />
                <span className="italic">эффект</span>
              </SectionHeading>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-6 md:gap-12 mb-16">
              {[
                { value: "12%", label: "Рост удержания в первый месяц" },
                { value: "50%", label: "Снижение drop-off на онбординге" },
                { value: "99%", label: "Uptime платформы" },
              ].map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.08}>
                  <div>
                    <p
                      className="mb-2"
                      style={{ fontFamily: FONT, fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 500, lineHeight: 1, color: "#F8F8F6" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-[#F8F8F6]/35" style={{ fontFamily: FONT, fontSize: 13, fontWeight: 300, lineHeight: 1.5 }}>
                      {m.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* NPS */}
            <ScrollReveal>
              <div className="p-8 md:p-10 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
                <p className="text-[#F8F8F6]/30 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: FONT }}>
                  Проверка дизайна
                </p>
                <p className="text-[#F8F8F6] mb-3" style={{ fontFamily: FONT, fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 500, lineHeight: 1.2 }}>
                  NPS вырос на 18 пунктов
                </p>
                <p className="text-[#F8F8F6]/45" style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.7 }}>
                  По итогам тестирования на 10 проектах. Пользователи отметили,
                  что крипто-интерфейс ощущается «понятным и безопасным»
                  — как обычное банковское приложение.
                </p>

                <div className="mt-6 pt-6 border-t border-[#F8F8F6]/[0.06]">
                  <p className="text-[#F8F8F6]/30 text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: FONT }}>
                    Методы
                  </p>
                  <ul className="space-y-2">
                    {[
                      "A/B-тест: light-версия онбординга vs. полноценная версия приложения",
                      "Анализ поведения пользователей по пути к первому пополнению",
                      "Модерируемые интервью с группой из 7 испытуемых",
                    ].map((m) => (
                      <li
                        key={m}
                        className="text-[#F8F8F6]/45 flex items-start gap-2"
                        style={{ fontFamily: FONT, fontSize: 14, fontWeight: 300, lineHeight: 1.6 }}
                      >
                        <span style={{ color: ACCENT }}>—</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── CONCLUSIONS ─── */}
        <section className="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-14">
              <SectionLabel>Выводы</SectionLabel>
              <SectionHeading>
                Что мы поняли
                <br />
                <span className="italic">в итоге</span>
              </SectionHeading>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ScrollReveal className="p-6 md:p-10 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl h-full">
                <p className="text-[#F8F8F6]/25 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: FONT }}>
                  Вывод
                </p>
                <p className="text-[#F8F8F6]/70" style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, lineHeight: 1.75 }}>
                  Сложности пользователей были связаны не с высокой когнитивной
                  нагрузкой, а с необходимостью принимать много решений во время
                  сделки и с недостаточной прозрачностью процессов. Наибольший
                  потенциал для улучшения — в автоматизации решений.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="p-6 md:p-10 rounded-2xl h-full" style={{ backgroundColor: `${ACCENT}12`, border: `1px solid ${ACCENT}30` }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: FONT, color: ACCENT }}>
                  Что получилось
                </p>
                <p className="text-[#F8F8F6]/85" style={{ fontFamily: FONT, fontSize: 16, fontWeight: 300, lineHeight: 1.75 }}>
                  Снизили когнитивную нагрузку за счёт упрощения интерфейсов и
                  сокращения числа решений в процессе сделки — это уменьшило
                  количество ошибок, сделало опыт предсказуемее и снизило отток
                  пользователей на этапе настройки.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ─── UI KIT ─── */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <ScrollReveal className="overflow-hidden rounded-2xl bg-[#111] p-1">
                <ImageWithFallback src={imgTypography} alt="Типографика" className="w-full object-cover rounded-xl" />
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="overflow-hidden rounded-2xl bg-[#111] p-1">
                <ImageWithFallback src={imgTypography1} alt="Типографика 2" className="w-full object-cover rounded-xl" />
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[imgImageCard, imgContainer, imgImage561, imgImage562].map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.06} className="overflow-hidden rounded-xl bg-[#111]">
                  <ImageWithFallback src={img} alt={`UI-kit ${i + 1}`} className="w-full object-cover" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VISUAL / CLOSING ─── */}
        <section className="py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12">
            <ScrollReveal className="mb-10">
              <SectionLabel>Visual</SectionLabel>
            </ScrollReveal>

            <div className="grid grid-cols-12 gap-5 md:gap-6 items-end mb-6">
              <ScrollReveal className="col-span-12 md:col-span-8 overflow-hidden rounded-2xl bg-[#111] relative" style={{ aspectRatio: "4/3" }}>
                <ImageWithFallback src={imgBanner1} alt="Our ideology — ONIX" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
                  <p className="text-[#F8F8F6]/40 text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: FONT }}>
                    Our ideology
                  </p>
                  <p
                    className="text-[#F8F8F6] max-w-[380px]"
                    style={{ fontFamily: FONT, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 500, lineHeight: 1.25 }}
                  >
                    We believe in financial freedom of all
                  </p>
                </div>
              </ScrollReveal>
              <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
                <ScrollReveal delay={0.08} className="overflow-hidden rounded-2xl bg-[#111]">
                  <ImageWithFallback src={imgMan} alt="Пользователь" className="w-full object-cover" />
                </ScrollReveal>
                <ScrollReveal delay={0.14} className="overflow-hidden rounded-2xl bg-[#111]">
                  <ImageWithFallback src={imgBg1} alt="Брендинг ONIX" className="w-full object-cover" />
                </ScrollReveal>
              </div>
            </div>

            {/* Closing statement */}
            <ScrollReveal className="pt-10">
              <div
                className="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                style={{ backgroundColor: ACCENT }}
              >
                <p
                  className="text-[#151515] max-w-[500px]"
                  style={{ fontFamily: FONT, fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: 500, lineHeight: 1.15 }}
                >
                  Crypto is as easy<br />as calling a taxi
                </p>
                <p
                  className="text-[#151515]/60 max-w-[260px]"
                  style={{ fontFamily: FONT, fontSize: 14, fontWeight: 300, lineHeight: 1.65 }}
                >
                  ONIX превратил Web3-кошелёк в понятный банковский интерфейс
                  для 2М+ пользователей по всей Африке.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── NEXT ─── */}
        <section className="py-20 md:py-28 border-t border-[#F8F8F6]/[0.06]">
          <div className="max-w-[1280px] mx-auto px-8 md:px-12 text-center">
            <ScrollReveal>
              <p className="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: FONT }}>
                Далее
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-[#F8F8F6]/55 hover:text-[#F8F8F6] transition-colors duration-300 group"
                style={{ fontFamily: FONT, fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 500 }}
              >
                Все работы
                <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}