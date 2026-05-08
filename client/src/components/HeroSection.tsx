/*
 * ÓTICA VICTORY — Hero Section
 * Design: Bold Geometric Modernism
 * - Full viewport height with split black/yellow composition
 * - Dramatic typography with Poppins 900
 * - CTA buttons with fill animation
 */

import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/hero-banner-dKREBCEgHorEJy8PaNYZUt.webp)`,
        }}
      >
        {/* Gradient overlay — dark on left for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.75) 45%, rgba(17,17,17,0.25) 100%)",
          }}
        />
      </div>

      {/* Yellow geometric accent bar */}
      <div
        className="absolute top-0 right-0 w-2 h-full"
        style={{ backgroundColor: "#F5C800" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Eyebrow tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#F5C800" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
              >
                João Pessoa · PB
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6 text-white"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Enxergue a{" "}
              <span
                className="block"
                style={{ color: "#F5C800" }}
              >
                beleza em
              </span>
              cada detalhe.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-white/70 mb-10 leading-relaxed max-w-lg"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              As melhores marcas e o exame de vista que você precisa,
              no coração de João Pessoa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5583987002709?text=Olá! Quero renovar meus óculos na Ótica Victory!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-victory text-sm font-bold"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Quero Renovar Meus Óculos</span>
              </a>
              <button
                onClick={() => scrollToSection("#catalogo")}
                className="text-white border-2 border-white/30 hover:border-[#F5C800] hover:text-[#F5C800] transition-all duration-300 text-sm font-bold uppercase tracking-widest px-8 py-3.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Ver Catálogo
              </button>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10">
              {[
                { number: "500+", label: "Modelos" },
                { number: "15+", label: "Anos de Tradição" },
                { number: "100%", label: "Satisfação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-black"
                    style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs text-white/50 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#catalogo")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#F5C800] transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
