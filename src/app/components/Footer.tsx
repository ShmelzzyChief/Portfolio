export function Footer() {
  return (
    <footer className="py-10 md:py-12">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-[#F8F8F6]/25"
          style={{ fontFamily: "'SuisseIntl', 'Inter', sans-serif", fontSize: 13, fontWeight: 300 }}
        >
          Зырянов Елисей
        </p>

        <p
          className="text-[#F8F8F6]/15"
          style={{ fontFamily: "'SuisseIntl', 'Inter', sans-serif", fontSize: 12, fontWeight: 300 }}
        >
          Продуктовый дизайнер · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          {[
            { label: "TG", href: "https://t.me/" },
            { label: "Почта", href: "mailto:elisey@example.com" },
            { label: "Резюме", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#F8F8F6]/25 hover:text-[#F8F8F6]/70 transition-colors duration-300 group relative"
              style={{ fontFamily: "'SuisseIntl', 'Inter', sans-serif", fontSize: 12, letterSpacing: "0.12em" }}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#F8F8F6]/50 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
