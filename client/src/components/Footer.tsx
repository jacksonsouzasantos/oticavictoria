/*
 * ÓTICA VICTORY — Footer Component
 * Design: Bold Geometric Modernism
 * - Deep black background
 * - Yellow accents on links and social icons
 * - Social media links: Instagram, Facebook
 */

import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0A0A0A" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ÓTICA
              </span>
              <span
                className="text-2xl font-black"
                style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
              >
                VICTORY
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
            >
              Sofisticação e precisão em cada detalhe. Sua visão merece
              o melhor atendimento e as melhores marcas do mercado.
            </p>

            {/* Social media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/otica_victory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#F5C800" }}
                aria-label="Instagram da Ótica Victory"
              >
                <Instagram size={18} style={{ color: "#111111" }} />
              </a>
              <a
                href="https://www.facebook.com/oticavictory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#F5C800" }}
                aria-label="Facebook da Ótica Victory"
              >
                <Facebook size={18} style={{ color: "#111111" }} />
              </a>
              <a
                href="https://wa.me/5583987002709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#25D366" }}
                aria-label="WhatsApp da Ótica Victory"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-black uppercase tracking-[0.2em] mb-6"
              style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Catálogo", href: "#catalogo" },
                { label: "Exame de Vista", href: "#exame" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Localização", href: "#localizacao" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[#F5C800]"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-black uppercase tracking-[0.2em] mb-6"
              style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
            >
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5C800" }} />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
                >
                  Av. Pres. Epitácio Pessoa, 1634<br />
                  Loja B — Torre<br />
                  João Pessoa — PB
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" style={{ color: "#F5C800" }} />
                <a
                  href="tel:+558332254778"
                  className="text-sm hover:text-[#F5C800] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
                >
                  (83) 3225-4778
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href="https://wa.me/5583987002709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#F5C800] transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
                >
                  (83) 98700-2709
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5C800" }} />
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins', sans-serif" }}
                >
                  Seg – Sáb · 09:00 em diante
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', sans-serif" }}
          >
            © {currentYear} Ótica Victory. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/otica_victory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-[#F5C800] transition-colors duration-200 uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Poppins', sans-serif" }}
            >
              @otica_victory
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
