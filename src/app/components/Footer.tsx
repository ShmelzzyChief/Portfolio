import { SOCIAL_LINKS } from "./socialLinks";

const F = "'SuisseIntl', 'Inter', sans-serif";

function FooterPill({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border text-[#F8F8F6] transition-colors duration-300 hover:bg-[#F8F8F6] hover:text-[#151515]"
      style={{
        borderColor: "rgba(248,248,246,0.25)",
        padding: "14px 32px",
        minWidth: 96,
        height: 50,
        fontFamily: F,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "1.4px",
        textTransform: "uppercase",
      }}
    >
      {label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-row justify-end items-center flex-wrap gap-4" style={{ padding: 48 }}>
      <p
        className="text-[#F8F8F6]/25 mr-auto"
        style={{ fontFamily: F, fontSize: 13, fontWeight: 300 }}
      >
        Зырянов Елисей · Продуктовый дизайнер · {new Date().getFullYear()}
      </p>

      <div className="flex flex-row items-center" style={{ gap: 12 }}>
        {SOCIAL_LINKS.map((link) => (
          <FooterPill key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </footer>
  );
}
