import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

const FONT = "'SuisseIntl', 'Inter', sans-serif";

const BASE = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { label: "Обо мне", href: `${BASE}#about` },
  { label: "Работы", href: `${BASE}#work` },
  { label: "Контакты", href: `${BASE}#contact` },
];

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    
      <a href={href}
      className="relative text-[#F8F8F6]/50 hover:text-[#F8F8F6] text-sm tracking-widest uppercase transition-colors duration-300 group py-1"
      style={{ fontFamily: FONT }}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#F8F8F6] transition-all duration-400 group-hover:w-full" />
    </a>
  );
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      animate={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="relative text-[#F8F8F6]/50 hover:text-[#F8F8F6] text-sm tracking-widest uppercase transition-colors duration-300 group py-1 cursor-pointer"
      style={{ fontFamily: FONT }}
      aria-label="Наверх"
    >
      Наверх
      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#F8F8F6] transition-all duration-400 group-hover:w-full" />
    </motion.button>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#151515]/85 backdrop-blur-xl border-b border-[#F8F8F6]/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 h-[64px] flex items-center justify-between">
        <ScrollTopButton />

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <span
            className="text-[#F8F8F6]/40 text-xs tracking-widest uppercase"
            style={{ fontFamily: FONT }}
          >
            Портфолио
          </span>
        </div>
      </div>
    </motion.nav>
  );
}