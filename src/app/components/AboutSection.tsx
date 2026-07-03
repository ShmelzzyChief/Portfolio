import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Personal photos from PortfolioPage-1
import img1 from "figma:asset/8fbc57eab6145622fd5d7f6fc1422aea57a0f6c5.png";
import img2 from "figma:asset/faacb94587baa44180e381740482020a20b2e1e3.png";
import img3 from "figma:asset/fbea2ce180e539a3e321a05073139fca5c4ed8c4.png";
import img4 from "figma:asset/1e5236f42a30f883d86857e1c346b0163fb1e1d6.png";
import img5 from "figma:asset/d8ba3532565229d2faf6b8820ab95939bb2c7870.png";

export function AboutSection() {
  return (
    <section className="py-10 md:py-14 border-t border-[rgba(248,248,246,0.06)]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12">
        {/* Main mosaic grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Large image — left, spans 2 rows */}
          <ScrollReveal className="col-span-12 md:col-span-5 row-span-2 overflow-hidden rounded-[14px] bg-[#111]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full"
              style={{ minHeight: 420 }}
            >
              <ImageWithFallback
                src={img1}
                alt="Фото 1"
                className="w-full h-full object-cover"
                style={{ minHeight: 420 }}
              />
            </motion.div>
          </ScrollReveal>

          {/* Top-right: two images side by side */}
          <ScrollReveal delay={0.06} className="col-span-6 md:col-span-4 overflow-hidden rounded-[14px] bg-[#111]" style={{ aspectRatio: "4/3" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={img2}
                alt="Фото 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="col-span-6 md:col-span-3 overflow-hidden rounded-[14px] bg-[#111]" style={{ aspectRatio: "4/3" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={img3}
                alt="Фото 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>

          {/* Bottom-right: two more images */}
          <ScrollReveal delay={0.14} className="col-span-6 md:col-span-3 overflow-hidden rounded-[14px] bg-[#111]" style={{ aspectRatio: "4/3" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={img4}
                alt="Фото 4"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.18} className="col-span-6 md:col-span-4 overflow-hidden rounded-[14px] bg-[#111]" style={{ aspectRatio: "4/3" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={img5}
                alt="Фото 5"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
