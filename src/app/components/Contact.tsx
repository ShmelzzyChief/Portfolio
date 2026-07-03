import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { MagneticButton } from "./MagneticButton";

interface ContactButtonProps {
  href: string;
  label: string;
  icon: string;
  filled?: boolean;
}

function ContactButton({ href, label, icon, filled }: ContactButtonProps) {
  return (
    <MagneticButton>
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        whileHover={
          filled
            ? { opacity: 0.88 }
            : { backgroundColor: "#F8F8F6", color: "#151515" }
        }
        transition={{ duration: 0.22 }}
        className={`inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm tracking-wide cursor-pointer select-none ${
          filled
            ? "bg-[#F8F8F6] text-[#151515]"
            : "border border-[#F8F8F6]/20 text-[#F8F8F6]"
        }`}
        style={{ fontFamily: "'SuisseIntl', 'Inter', sans-serif", fontWeight: 500 }}
      >
        
        {label}
      </motion.a>
    </MagneticButton>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-40 border-t border-[#F8F8F6]/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10">
            <ScrollReveal>
              <p
                className="text-[#F8F8F6]/30 text-xs tracking-[0.35em] uppercase mb-8"
                style={{ fontFamily: "'SuisseIntl', 'Inter', sans-serif" }}
              >
                Контакты
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="text-[#F8F8F6] leading-[1.05] tracking-[-0.02em] mb-6"
                style={{
                  fontFamily: "'SuisseIntl', 'Inter', sans-serif",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 500,
                }}
              >
                Создадим продукты,
                <br />
                <span className="italic text-[#F8F8F6]/50">
                  которые полюбят люди.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-[#F8F8F6]/45 mb-12 md:mb-16 max-w-[480px]"
                style={{
                  fontFamily: "'SuisseIntl', 'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                Открыт для full-time позиций, консультаций и интересных
                сайд-проектов. Если вы строите что-то значимое — давайте
                поговорим.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <ContactButton
                  href="https://t.me/Shmelzzychief"
                  label="Telegram"
                  icon="✈"
                  filled
                />
                <ContactButton
                  href="mailto:zeo6996@gmail.com"
                  label="Почта"
                  icon="@"
                />
              </div>
            </ScrollReveal>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ transformOrigin: "left" }}
              className="mt-20 md:mt-28 h-px bg-[#F8F8F6]/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
