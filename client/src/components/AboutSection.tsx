/*
 * ÓTICA VICTORY — About Section
 * Design: Bold Geometric Modernism
 * - White background with yellow/black accents
 * - Large number decorations
 * - Store photo with geometric overlay
 */

import { Award, Users, MapPin } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Trabalhamos apenas com marcas reconhecidas e lentes de alta tecnologia.",
  },
  {
    icon: Users,
    title: "Atendimento Humano",
    description: "Cada cliente recebe atenção personalizada para encontrar o óculos ideal.",
  },
  {
    icon: MapPin,
    title: "Tradição em JP",
    description: "Localizada na Av. Epitácio Pessoa, referência em ótica em João Pessoa.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#F5C800" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
              >
                Nossa História
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ color: "#111111", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Ótica Victory:
              <br />
              <span style={{ color: "#F5C800" }}>Sua visão,</span>
              <br />
              nosso compromisso.
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#555555", fontFamily: "'Poppins', sans-serif" }}
            >
              A Ótica Victory nasceu com um propósito claro: oferecer sofisticação e
              precisão em cada detalhe. Localizada na Avenida Presidente Epitácio Pessoa,
              no coração de João Pessoa, somos referência em atendimento personalizado
              e qualidade óptica.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#555555", fontFamily: "'Poppins', sans-serif" }}
            >
              Nossa equipe de especialistas está pronta para ajudá-lo a encontrar
              a armação perfeita — seja para o dia a dia, para trabalho ou para
              ocasiões especiais. Combinamos moda, conforto e saúde visual em
              cada atendimento.
            </p>

            {/* Opening hours highlight */}
            <div
              className="flex items-center gap-4 p-5"
              style={{ backgroundColor: "#F4F4F4", borderLeft: "4px solid #F5C800" }}
            >
              <div>
                <div
                  className="text-sm font-black uppercase tracking-wider mb-1"
                  style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                >
                  Horário de Funcionamento
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#555555", fontFamily: "'Poppins', sans-serif" }}
                >
                  Segunda a Sábado · A partir das <strong>09:00</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Store image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/store-interior-9sY9tTvHxS3h8Yv3LteQpz.webp"
                alt="Interior da Ótica Victory"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "4/3" }}
                loading="lazy"
              />
            </div>
            {/* Yellow accent block */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 flex items-center justify-center"
              style={{ backgroundColor: "#F5C800" }}
            >
              <span
                className="text-3xl font-black"
                style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
              >
                JP
              </span>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="p-8 group hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: index % 2 === 1 ? "#111111" : "#F4F4F4",
                borderTop: `3px solid ${index % 2 === 1 ? "#F5C800" : "#111111"}`,
              }}
            >
              <value.icon
                size={32}
                className="mb-4"
                style={{ color: index % 2 === 1 ? "#F5C800" : "#111111" }}
              />
              <h3
                className="text-lg font-black mb-3"
                style={{
                  color: index % 2 === 1 ? "#ffffff" : "#111111",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: index % 2 === 1 ? "rgba(255,255,255,0.65)" : "#666666",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
