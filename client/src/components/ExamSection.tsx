/*
 * ÓTICA VICTORY — Eye Exam Section
 * Design: Bold Geometric Modernism
 * - Black background with yellow accents
 * - Split layout: image left, content right
 * - Feature list with yellow bullets
 */

import { Eye, CheckCircle2, Clock } from "lucide-react";

const features = [
  "Exame completo com equipamentos modernos",
  "Profissionais habilitados e experientes",
  "Resultado preciso para sua prescrição",
  "Atendimento personalizado e humanizado",
  "Lentes de alta qualidade disponíveis",
];

export default function ExamSection() {
  return (
    <section
      id="exame"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#111111" }}
    >
      {/* Yellow accent bar left */}
      <div
        className="absolute left-0 top-0 w-1.5 h-full"
        style={{ backgroundColor: "#F5C800" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden" style={{ borderRadius: 0 }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/eye-exam-i9ife6LsgDeVejpgR3YJvi.webp"
                alt="Exame de vista na Ótica Victory"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
              {/* Yellow corner accent */}
              <div
                className="absolute bottom-0 right-0 w-16 h-16"
                style={{ backgroundColor: "#F5C800" }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 p-6 shadow-2xl"
              style={{ backgroundColor: "#F5C800" }}
            >
              <div className="flex items-center gap-3">
                <Clock size={24} style={{ color: "#111111" }} />
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-wider"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Seg – Sáb
                  </div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    A partir das 09:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#F5C800" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
              >
                Serviços
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6 text-white"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Exame de Vista
              <br />
              <span style={{ color: "#F5C800" }}>Completo e Preciso</span>
            </h2>

            <p
              className="text-white/60 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Na Ótica Victory, cuidamos da sua visão com a seriedade que ela merece.
              Nosso exame de vista é realizado por profissionais qualificados, utilizando
              equipamentos modernos para garantir a prescrição mais precisa para você.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#F5C800" }}
                  />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5583987002709?text=Olá! Gostaria de agendar um exame de vista na Ótica Victory."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-victory inline-flex"
            >
              <Eye size={20} />
              <span>Agendar Exame de Vista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
