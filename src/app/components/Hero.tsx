import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgPortrait from "figma:asset/b2c8425364794ec88c37d3951c0b730958289738.png";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const F = "'SuisseIntl', 'Inter', sans-serif";

const BUTTONS = [
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1QfM8immOJUsMqSR5H2tugOH6BU6Q5jHx/view?usp=sharing",
  },
  { label: "TG", href: "https://t.me/Shmelzzychief" },
  {
    label: "Блог",
    href: "https://www.threads.com/@design.inmymind?igshid=NTc4MTIwNjQ2YQ%3D%3D",
  },
];

function HeroButton({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <MagneticButton>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          backgroundColor: "#F8F8F6",
          color: "#151515",
        }}
        transition={{ duration: 0.2 }}
        className="inline-flex items-center justify-center rounded-full cursor-pointer select-none border border-[rgba(248,248,246,0.25)] text-[#f8f8f6]"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "21px",
          letterSpacing: "1.4px",
          textTransform: "uppercase",
          padding: "16px 34px",
          height: 53,
          minWidth: 96,
        }}
      >
        {label}
      </motion.a>
    </MagneticButton>
  );
}

export function Hero() {
  return (
    <section className="relative flex flex-col items-center pt-[64px]">
      <div
        className="w-full flex flex-col items-center py-8 px-8 md:px-12"
        style={{ maxWidth: 865, margin: "0 auto" }}
      >
        {/* Portrait — 317 × 420 matching Figma */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mb-12 self-start md:self-center"
        >
          <div
            className="overflow-hidden rounded-[14px]"
            style={{ width: 317, height: 420 }}
          >
            <ImageWithFallback
              src={imgPortrait}
              alt="Зырянов Елисей"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Product Designer label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="text-center mb-14"
          style={{
            fontFamily: F,
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(248,248,246,0.5)",
            lineHeight: 1,
          }}
        >
          Product Designer
          <br />с опытом 4+ лет
        </motion.p>

        {/* Large name */}
        <div className="overflow-hidden text-center w-full mb-6">
          {["Зырянов", "Елисей"].map((word, i) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.55 + i * 0.14,
                ease,
              }}
              style={{
                fontFamily: F,
                fontSize: "clamp(64px, 11vw, 105.6px)",
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                color: "#f8f8f6",
                fontWeight: 400,
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease }}
          className="text-center mb-8"
          style={{
            fontFamily: F,
            fontSize: 15,
            lineHeight: 1.7,
            color: "#f8f8f6",
            maxWidth: 440,
          }}
        >
          Специализируюсь на Fintech, B2C, C2C.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease }}
          className="flex items-center gap-3 mb-8"
        >
          {BUTTONS.map((b) => (
            <HeroButton
              key={b.label}
              label={b.label}
              href={b.href}
            />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3, ease }}
          style={{ transformOrigin: "center" }}
          className="w-full h-px bg-[rgba(248,248,246,0.1)] mt-8"
        />
      </div>
    </section>
  );
}