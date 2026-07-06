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
  <!-- ===== HERO ===== -->
  <section class="relative min-h-[85vh] flex flex-col justify-end overflow-hidden pt-[64px]">
    <div class="absolute inset-0">
      <img src="/Portfolio/assets/cases/onix/onix-hero.png" alt="ONIX — крипто-платформа" class="w-full h-full object-cover opacity-20">
      <div class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/75 to-[#151515]/40"></div>
    </div>
    <div class="relative max-w-[1280px] mx-auto px-8 md:px-12 w-full pb-20 md:pb-28 pt-28">
      <div class="mb-12">
        <a class="inline-flex items-center gap-2 text-[#F8F8F6]/40 hover:text-[#F8F8F6]/80 text-sm tracking-wide transition-colors duration-300 group" href="/Portfolio/" style="font-family: Inter, sans-serif;">
          <span class="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span>Назад к портфолио
        </a>
      </div>
      <div class="grid grid-cols-12 gap-6 items-end">
        <div class="col-span-12 lg:col-span-8">
          <span class="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase mb-6" style="font-family: Inter, sans-serif; color: rgb(219, 253, 4); background-color: rgba(219, 253, 4, 0.082); border: 1px solid rgba(219, 253, 4, 0.19);">Light app / crypto</span>
          <h1 class="text-[#F8F8F6] leading-[1.0] tracking-[-0.02em] mb-6" style="font-family: Inter, sans-serif; font-size: clamp(44px, 7vw, 96px); font-weight: 500;">
            Крипто-платформа<br><span class="italic" style="opacity: 0.55;">для африканцев</span>
          </h1>
          <p class="text-[#F8F8F6]/50 max-w-[560px]" style="font-family: Inter, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.75;">
            ONIX — это приложение для тех африканцев, которые больше не хотят смотреть, как их сбережения превращаются в пыль из-за бешеной девальвации местной валюты
          </p>
        </div>
        <div class="col-span-12 lg:col-span-4 lg:flex lg:items-end lg:justify-end">
          <div class="flex flex-wrap gap-3">
            <div class="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
              <p class="text-[#F8F8F6]/30" style="font-family: Inter, sans-serif; font-size: 10px; letter-spacing: 0.1em;">Роль</p>
              <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 500;">Лид дизайнер</p>
            </div>
            <div class="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
              <p class="text-[#F8F8F6]/30" style="font-family: Inter, sans-serif; font-size: 10px; letter-spacing: 0.1em;">Команда</p>
              <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 500;">1 дизайнер · 4 разраб.</p>
            </div>
            <div class="px-3 py-2 bg-[#F8F8F6]/[0.04] border border-[#F8F8F6]/[0.08] rounded-xl">
              <p class="text-[#F8F8F6]/30" style="font-family: Inter, sans-serif; font-size: 10px; letter-spacing: 0.1em;">Срок</p>
              <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 500;">12 месяцев</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== WIDE HERO IMAGE ===== -->
  <section class="w-full overflow-hidden">
    <div class="aspect-[21/9] w-full overflow-hidden bg-[#0a0a0a]">
      <img src="/Portfolio/assets/cases/onix/onix-hero.png" alt="ONIX — продажа криптовалюты" class="w-full h-full object-cover">
    </div>
  </section>

  <!-- ===== STATS ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div>
          <p class="mb-2" style="font-family: Inter, sans-serif; font-size: clamp(32px, 4vw, 56px); font-weight: 500; line-height: 1; color: rgb(219, 253, 4);">68%</p>
          <p class="text-[#F8F8F6]/35" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 300; line-height: 1.5;">Люди 18–35 лет, которые раньше никогда не имели сбережений</p>
        </div>
        <div>
          <p class="mb-2" style="font-family: Inter, sans-serif; font-size: clamp(32px, 4vw, 56px); font-weight: 500; line-height: 1; color: rgb(219, 253, 4);">$ 285</p>
          <p class="text-[#F8F8F6]/35" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 300; line-height: 1.5;">Средний пользователь хранит</p>
        </div>
        <div>
          <p class="mb-2" style="font-family: Inter, sans-serif; font-size: clamp(32px, 4vw, 56px); font-weight: 500; line-height: 1; color: rgb(219, 253, 4);">2 Млн</p>
          <p class="text-[#F8F8F6]/35" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 300; line-height: 1.5;">Зарегистрированных пользователей</p>
        </div>
        <div>
          <p class="mb-2" style="font-family: Inter, sans-serif; font-size: clamp(32px, 4vw, 56px); font-weight: 500; line-height: 1; color: rgb(219, 253, 4);">12 мин</p>
          <p class="text-[#F8F8F6]/35" style="font-family: Inter, sans-serif; font-size: 13px; font-weight: 300; line-height: 1.5;">Каждые 12 минут кто-то сохраняет в долларах</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== GOAL ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="grid grid-cols-12 gap-6 items-center">
        <div class="col-span-12 lg:col-span-5">
          <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Глобальная цель</p>
          <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
            Crypto is as easy<br><span class="italic" style="color: rgb(219, 253, 4);">as calling a taxi</span>
          </h2>
        </div>
        <div class="col-span-12 lg:col-span-6 lg:col-start-7">
          <p class="text-[#F8F8F6]/50 leading-relaxed" style="font-family: Inter, sans-serif; font-size: 16px; font-weight: 300; line-height: 1.8;">
            Для многих криптовалюта до сих пор звучит как «скам» или что-то очень сложное, непонятное. Мы должны сделать криптовалюту простой — такой же, как вызов такси, превратив Web-3 кошелёк в понятное банковское приложение, с ориентиром на отечественные финтех приложения
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== INTERFACE / MOCKUPS ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06] overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Интерфейс</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Мобильный опыт<br><span class="italic">нового поколения</span>
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-mockup-1.png" alt="Экран входа в ONIX" class="w-full object-cover">
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-mockup-2.png" alt="Главный экран ONIX" class="w-full object-cover">
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-mockup-3.png" alt="Верификация в ONIX" class="w-full object-cover">
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-mockup-4.png" alt="Успешная регистрация в ONIX" class="w-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PROBLEMS ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Дизайн-процесс</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Проблемы<br><span class="italic">и гипотезы</span>
        </h2>
      </div>

      <!-- Problem 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <p class="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4" style="font-family: Inter, sans-serif;">Проблема 1</p>
          <p class="text-[#F8F8F6] mb-6" style="font-family: Inter, sans-serif; font-size: 15px; font-weight: 400; line-height: 1.7;">
            Пользователи часто уходили сразу после регистрации, не доходя до первого целевого действия, из-за чего конверсия в активного пользователя была низкой.
          </p>
          <div class="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
            <p class="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3" style="font-family: Inter, sans-serif;">Гипотеза</p>
            <p class="text-[#F8F8F6]/70" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
              Если добавить обучающие stories и демо-счёт, то получится повысить доверие. А также пользователь смог бы понять механику, увидеть комиссии и риски, попробовав продукт без внесения личных сбережений
            </p>
          </div>
          <div>
            <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2" style="font-family: Inter, sans-serif;">Тогда моя цель</p>
            <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.6;">
              Увеличить конверсию в активного пользователя на 10–15%<br>
              Повысить возвращаемость на 10–15%
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <!-- SVG Frame -->
          <svg width="100%" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-w-[400px]">
            <rect x="0.5" y="0.5" width="399" height="319" rx="16" stroke="#484848" stroke-width="1" fill="none"/>
            <rect x="20.5" y="20.5" width="359" height="279" rx="12" stroke="#484848" stroke-width="1" stroke-dasharray="4 4" fill="none"/>
          </svg>
        </div>
      </div>

      <!-- Problem 2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="flex items-center justify-center order-2 md:order-1">
          <svg width="100%" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-w-[400px]">
            <rect x="0.5" y="0.5" width="399" height="319" rx="16" stroke="#484848" stroke-width="1" fill="none"/>
            <rect x="20.5" y="20.5" width="359" height="279" rx="12" stroke="#484848" stroke-width="1" stroke-dasharray="4 4" fill="none"/>
          </svg>
        </div>
        <div class="order-1 md:order-2">
          <p class="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4" style="font-family: Inter, sans-serif;">Проблема 2</p>
          <p class="text-[#F8F8F6] mb-6" style="font-family: Inter, sans-serif; font-size: 15px; font-weight: 400; line-height: 1.7;">
            На экранах одновременно отображалось слишком много информации, пользователи дольше принимали решения, чаще ошибались или не понимали, какой шаг сделать дальше.
          </p>
          <div class="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
            <p class="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3" style="font-family: Inter, sans-serif;">Гипотеза</p>
            <p class="text-[#F8F8F6]/70" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
              Если снизить когнитивную нагрузку на пользователя и урезать некоторый функционал платформы, то пользователи станут достигать ключевого действия быстрее. А также количество ошибок и непонимания следующего действия уменьшится
            </p>
          </div>
          <div>
            <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2" style="font-family: Inter, sans-serif;">Тогда моя цель</p>
            <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.6;">
              Разгрузить экраны примерно на 60%, убрав второстепенную информацию, чтобы снизить когнитивную нагрузку<br>
              Повысить возвращаемость на 10–15%
            </p>
          </div>
        </div>
      </div>

      <!-- Problem 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-[#DBFD04] text-sm tracking-[0.2em] uppercase mb-4" style="font-family: Inter, sans-serif;">Проблема 3</p>
          <p class="text-[#F8F8F6] mb-6" style="font-family: Inter, sans-serif; font-size: 15px; font-weight: 400; line-height: 1.7;">
            Пользователям сложно выбирать сделки, решение занимает много времени, вызывает сомнения и приводит к дроп-оффам на этапе выбора сделки.
          </p>
          <div class="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
            <p class="text-[#DBFD04]/60 text-xs tracking-[0.2em] uppercase mb-3" style="font-family: Inter, sans-serif;">Гипотеза</p>
            <p class="text-[#F8F8F6]/70" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
              Если при подборе сделки учитывать итоговую сумму «на руки», показывать пользователю лучшие варианты и объяснять, почему выбран именно этот вариант, то им будет проще принимать решение и совершать операции
            </p>
          </div>
          <div>
            <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-2" style="font-family: Inter, sans-serif;">Тогда моя цель</p>
            <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.6;">
              Понизить дроп-офф рейтинг до максимально возможного
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <svg width="100%" height="320" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-w-[400px]">
            <rect x="0.5" y="0.5" width="399" height="319" rx="16" stroke="#484848" stroke-width="1" fill="none"/>
            <rect x="20.5" y="20.5" width="359" height="279" rx="12" stroke="#484848" stroke-width="1" stroke-dasharray="4 4" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== BRANDING ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Брендинг</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Визуальная<br><span class="italic">идентичность</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-branding-left.png" alt="Нотификация ONIX" class="w-full h-full object-cover">
        </div>
        <div class="overflow-hidden rounded-2xl aspect-[4/3] bg-[#111] flex items-center justify-center p-8">
          <!-- SVG Logo Frame -->
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" rx="24" fill="#04452E"/>
            <text x="100" y="115" text-anchor="middle" fill="#DBFD04" font-family="Inter, sans-serif" font-size="72" font-weight="600">O</text>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== DISCOVERY RESULTS ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Результаты дискавери</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Что мы<br><span class="italic">обнаружили</span>
        </h2>
        <p class="text-[#F8F8F6]/50 max-w-[640px]" style="font-family: Inter, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7;">
          После исследования появились идеи, как улучшить интерфейс и от каких функций нужно отказаться в пользу работоспособности и удобства:
        </p>
        <ul class="mt-4 text-[#F8F8F6]/50" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.8;">
          <li>Убрать некоторые динамически меняющиеся части приложения</li>
          <li>Подбирать лучшие сделки автоматически</li>
          <li>Сделать сторис и демо-счёт</li>
          <li>Реализовать понятный онбординг</li>
          <li>Изменить флоу верификации с заменой на сторонний API</li>
        </ul>
      </div>

      <!-- Main Page -->
      <div class="mb-16">
        <h3 class="text-[#F8F8F6] mb-2" style="font-family: Inter, sans-serif; font-size: clamp(20px, 2vw, 28px); font-weight: 500;">Главная страница</h3>
        <p class="text-[#F8F8F6]/40 mb-6" style="font-family: Inter, sans-serif; font-size: 14px;">Что улучшилось?</p>
        <div class="mb-6">
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            <span class="text-[#DBFD04]">Time on Task уменьшился на 30%</span> за счёт уменьшения количества доступных действий
          </p>
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            <span class="text-[#DBFD04]">Drop-off Rate уменьшился на 12%</span>. Форма становится понятнее, на сигналы можно реагировать быстрее
          </p>
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-discovery-main.png" alt="Главная страница ONIX после дискавери" class="w-full object-cover">
        </div>
      </div>

      <!-- Autofill -->
      <div class="mb-16">
        <h3 class="text-[#F8F8F6] mb-2" style="font-family: Inter, sans-serif; font-size: clamp(20px, 2vw, 28px); font-weight: 500;">Автозаполнение и закладки</h3>
        <div class="mb-6">
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            Time on Task уменьшился на 30% за счёт уменьшения количества доступных действий
          </p>
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            <span class="text-[#DBFD04]">Misclick rate уменьшился на 80%</span> за счёт уменьшения количества доступных действий
          </p>
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-discovery-auto.png" alt="Автозаполнение в ONIX" class="w-full object-cover">
        </div>
      </div>

      <!-- Counterparty Search -->
      <div>
        <h3 class="text-[#F8F8F6] mb-2" style="font-family: Inter, sans-serif; font-size: clamp(20px, 2vw, 28px); font-weight: 500;">Поиск лучших контрагентов</h3>
        <p class="text-[#F8F8F6]/40 mb-2" style="font-family: Inter, sans-serif; font-size: 14px;">Что улучшилось?</p>
        <div class="mb-6">
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            Время до трейда уменьшилось на 37 секунд
          </p>
          <p class="text-[#F8F8F6]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
            <span class="text-[#DBFD04]">NPS активных 650 пользователей увеличился на 18 пунктов</span> и выше показателя 48% после внедрения механизма автоматического подбора контрагентов
          </p>
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111]">
          <img src="/Portfolio/assets/cases/onix/onix-discovery-search.png" alt="Поиск контрагентов в ONIX" class="w-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- ===== UI KIT ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">UI Kit</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Дизайн-система,<br><span class="italic">созданная надолго</span>
        </h2>
      </div>

      <!-- Colors -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div class="p-6 rounded-2xl" style="background-color: #DBFD04;">
          <p class="text-[#151515] text-xs mb-1" style="font-family: Inter, sans-serif;">HEX: DBFD04</p>
          <p class="text-[#151515]/70 text-xs" style="font-family: Inter, sans-serif;">RGB: 219 253 4</p>
        </div>
        <div class="p-6 rounded-2xl" style="background-color: #04452E;">
          <p class="text-[#F8F8F6] text-xs mb-1" style="font-family: Inter, sans-serif;">HEX: 04452E</p>
          <p class="text-[#F8F8F6]/70 text-xs" style="font-family: Inter, sans-serif;">RGB: 4 69 46</p>
        </div>
        <div class="p-6 rounded-2xl" style="background-color: #484848;">
          <p class="text-[#F8F8F6] text-xs mb-1" style="font-family: Inter, sans-serif;">HEX: 484848</p>
          <p class="text-[#F8F8F6]/70 text-xs" style="font-family: Inter, sans-serif;">RGB: 72 72 72</p>
        </div>
        <div class="p-6 rounded-2xl" style="background-color: #FAFAFA;">
          <p class="text-[#151515] text-xs mb-1" style="font-family: Inter, sans-serif;">HEX: FAFAFA</p>
          <p class="text-[#151515]/70 text-xs" style="font-family: Inter, sans-serif;">RGB: 250 250 250</p>
        </div>
      </div>

      <!-- Typography + Icons + Mockup -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div class="p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
          <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-6" style="font-family: Inter, sans-serif;">Typography</p>
          <p class="text-[#DBFD04] mb-2" style="font-family: 'SF Pro Display', Inter, sans-serif; font-size: 32px; font-weight: 500;">SF Pro Display</p>
          <p class="text-[#F8F8F6]/70 mb-6" style="font-family: 'SF Pro Text', Inter, sans-serif; font-size: 18px;">SF Pro Text</p>
          <p class="text-[#F8F8F6]/40 text-sm" style="font-family: 'SF Pro Text', Inter, sans-serif;">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          <p class="text-[#F8F8F6]/40 text-sm mt-2" style="font-family: 'SF Pro Text', Inter, sans-serif;">0123456789</p>
        </div>
        <div class="overflow-hidden rounded-2xl bg-[#111] p-1">
          <img src="/Portfolio/assets/cases/onix/onix-uikit-mockup.png" alt="Мокап в UI-kit ONIX" class="w-full object-cover rounded-xl">
        </div>
      </div>

      <!-- Icons -->
      <div class="p-8 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
        <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-6" style="font-family: Inter, sans-serif;">Iconography</p>
        <div class="grid grid-cols-6 md:grid-cols-12 gap-6">
          <!-- Search -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round"><circle cx="14" cy="14" r="9"/><line x1="21" y1="21" x2="28" y2="28"/></svg>
          <!-- Lock -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="20" height="16" rx="2"/><path d="M10 14V10a6 6 0 0 1 12 0v4"/></svg>
          <!-- Globe -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round"><circle cx="16" cy="16" r="12"/><ellipse cx="16" cy="16" rx="12" ry="5"/><line x1="4" y1="16" x2="28" y2="16"/><line x1="16" y1="4" x2="16" y2="28"/></svg>
          <!-- Clock -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><polyline points="16,8 16,16 22,16"/></svg>
          <!-- Document -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10l-6-6z"/><polyline points="20,4 20,10 26,10"/><line x1="12" y1="18" x2="20" y2="18"/><line x1="12" y1="22" x2="20" y2="22"/></svg>
          <!-- Bitcoin -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><path d="M16 8v16M12 10h6M12 22h6M13 8v-2M19 8v-2M13 26v-2M19 26v-2"/></svg>
          <!-- Ethereum -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16,4 26,16 16,12 6,16"/><polygon points="16,28 26,18 16,22 6,18"/></svg>
          <!-- Tether -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="12"/><line x1="12" y1="10" x2="20" y2="10"/><line x1="16" y1="10" x2="16" y2="22"/><line x1="12" y1="16" x2="20" y2="16"/></svg>
          <!-- Chart -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,20 10,14 16,18 22,8 28,12"/><circle cx="22" cy="8" r="2"/></svg>
          <!-- Download -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4v16M10 14l6 6 6-6"/><line x1="6" y1="26" x2="26" y2="26"/></svg>
          <!-- Upload -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 28V12M10 18l6-6 6 6"/><line x1="6" y1="6" x2="26" y2="6"/></svg>
          <!-- Arrow swap -->
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#DBFD04" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12l4-4 4 4M20 20l-4 4-4-4"/></svg>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TESTING ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-14">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Проверка дизайна</p>
        <h2 class="text-[#F8F8F6] leading-[1.08] tracking-[-0.02em] mb-8" style="font-family: Inter, sans-serif; font-size: clamp(28px, 3.5vw, 52px); font-weight: 500;">
          Выводы<br><span class="italic">тестирования</span>
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-[#F8F8F6]/70 mb-6" style="font-family: Inter, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7;">
            Были проведены модерируемые тесты с опер группой из 7 испытуемых, замер показал, что время выполнения, количество ошибок, конверсии и NPS выросли по сравнению с замерами таких же действий, но на платформе с полноценным функционалом
          </p>
          <p class="text-[#F8F8F6]/40 text-xs tracking-[0.2em] uppercase mb-3" style="font-family: Inter, sans-serif;">Методы:</p>
          <ul class="text-[#F8F8F6]/50 mb-6" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.8;">
            <li>А/В-тест: light-app и полноценная версия приложения</li>
            <li>Анализ поведения пользователей по пути к call to action</li>
            <li>Опросы об удовлетворённости в работе автоматического подбора</li>
          </ul>
        </div>
        <div>
          <div class="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl mb-6">
            <p class="text-[#DBFD04] text-sm tracking-[0.15em] uppercase mb-3" style="font-family: Inter, sans-serif;">Вывод</p>
            <p class="text-[#F8F8F6]/70" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
              Сложности пользователей связаны не с высокой когнитивной нагрузкой. Наиболее критичными оказалась необходимость принимать множество решений во время сделки и недостаточная прозрачность процессов. Анализ показал, что наибольший потенциал для улучшения лежит в автоматизации принятия решений
            </p>
          </div>
          <div class="p-6 bg-[#1A1A1A] border border-[#F8F8F6]/[0.07] rounded-2xl">
            <p class="text-[#DBFD04] text-sm tracking-[0.15em] uppercase mb-3" style="font-family: Inter, sans-serif;">Что получилось</p>
            <p class="text-[#F8F8F6]/70" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7;">
              Снизили когнитивную нагрузку на пользователей за счёт упрощения интерфейсов и сокращения количества решений, принимаемых в процессе сделки, что в следствии понизило количество ошибок и сделало опыт более предсказуемым, снизился отток пользователей на этапе выбора параметров сделки, снизился риск ошибочного выбора контрагента
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== VISUAL / BRANDING ===== -->
  <section class="py-20 md:py-28 border-b border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12">
      <div class="mb-10">
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Visual</p>
      </div>
      <div class="grid grid-cols-12 gap-5 md:gap-6 items-end mb-6">
        <div class="col-span-12 md:col-span-8 overflow-hidden rounded-2xl bg-[#111] relative">
          <img src="/Portfolio/assets/cases/onix/onix-visual-1.png" alt="Our ideology — ONIX" class="w-full h-full object-cover">
          <div class="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <p class="text-[#F8F8F6]/40 text-xs tracking-[0.3em] uppercase mb-3" style="font-family: Inter, sans-serif;">Our ideology</p>
            <p class="text-[#F8F8F6] max-w-[380px]" style="font-family: Inter, sans-serif; font-size: clamp(20px, 2.5vw, 30px); font-weight: 500; line-height: 1.25;">We believe in financial freedom of all</p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 flex flex-col gap-5">
          <div class="overflow-hidden rounded-2xl bg-[#111]">
            <img src="/Portfolio/assets/cases/onix/onix-visual-2.png" alt="Пользователь ONIX" class="w-full object-cover">
          </div>
          <div class="overflow-hidden rounded-2xl bg-[#111]">
            <img src="/Portfolio/assets/cases/onix/onix-visual-3.png" alt="Брендинг ONIX" class="w-full object-cover">
          </div>
        </div>
      </div>
      <div class="overflow-hidden rounded-2xl bg-[#111] mb-6">
        <img src="/Portfolio/assets/cases/onix/onix-visual-4.png" alt="Карта ONIX Member" class="w-full object-cover">
      </div>
      <div class="pt-10">
        <div class="rounded-2xl p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8" style="background-color: rgb(219, 253, 4);">
          <p class="text-[#151515] max-w-[500px]" style="font-family: Inter, sans-serif; font-size: clamp(24px, 3.5vw, 44px); font-weight: 500; line-height: 1.15;">Crypto is as easy<br>as calling a taxi</p>
          <p class="text-[#151515]/60 max-w-[260px]" style="font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.65;">ONIX превратил Web3-кошелёк в понятный банковский интерфейс для 2М+ пользователей по всей Африке.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CTA IMAGE ===== -->
  <section class="w-full overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12 pb-20 md:pb-28">
      <div class="overflow-hidden rounded-2xl bg-[#111]">
        <img src="/Portfolio/assets/cases/onix/onix-cta.png" alt="ONIX — Crypto is as easy as calling a taxi" class="w-full object-cover">
      </div>
    </div>
  </section>

  <!-- ===== NEXT ===== -->
  <section class="py-20 md:py-28 border-t border-[#F8F8F6]/[0.06]">
    <div class="max-w-[1280px] mx-auto px-8 md:px-12 text-center">
      <div>
        <p class="text-[#F8F8F6]/25 text-xs tracking-[0.35em] uppercase mb-6" style="font-family: Inter, sans-serif;">Далее</p>
        <a class="inline-flex items-center gap-3 text-[#F8F8F6]/55 hover:text-[#F8F8F6] transition-colors duration-300 group" href="/Portfolio/" style="font-family: Inter, sans-serif; font-size: clamp(22px, 3vw, 40px); font-weight: 500;">
          Все работы<span class="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
        </a>
      </div>
    </div>
  </section>
</main>