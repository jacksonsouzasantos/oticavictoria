/*
 * ÓTICA VICTORY — Catalog Section
 * Design: Bold Geometric Modernism
 * - Asymmetric grid with varied card sizes
 * - Yellow accent on hover
 * - Category filter tabs
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = ["Todos", "Solares", "Grau", "Infantil"];

const products = [
  {
    id: 1,
    name: "Aviador Clássico",
    category: "Solares",
    tag: "Mais Vendido",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/sunglasses-catalog-5mevDjtvFQ2UZbgzk32ZcX.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Armação Clássica",
    category: "Grau",
    tag: "Novo",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/prescription-glasses-R3mXpC4Rs3QYCUXkNuBZv4.webp",
    featured: false,
  },
  {
    id: 3,
    name: "Solar Redondo",
    category: "Solares",
    tag: "Tendência",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/sunglasses-catalog-5mevDjtvFQ2UZbgzk32ZcX.webp",
    featured: false,
  },
  {
    id: 4,
    name: "Grau Slim Metal",
    category: "Grau",
    tag: "Premium",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/prescription-glasses-R3mXpC4Rs3QYCUXkNuBZv4.webp",
    featured: false,
  },
  {
    id: 5,
    name: "Solar Retangular",
    category: "Solares",
    tag: "Exclusivo",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/sunglasses-catalog-5mevDjtvFQ2UZbgzk32ZcX.webp",
    featured: false,
  },
  {
    id: 6,
    name: "Armação Tartaruga",
    category: "Grau",
    tag: "Clássico",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663637720308/RqPVtQgVebg74k78yJ9Qz4/prescription-glasses-R3mXpC4Rs3QYCUXkNuBZv4.webp",
    featured: false,
  },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-24" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#F5C800" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
              >
                Coleção
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight"
              style={{ color: "#111111", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
            >
              Nossos Modelos
              <br />
              <span style={{ color: "#F5C800" }}>em Destaque</span>
            </h2>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mt-8 lg:mt-0 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "text-[#111111]"
                    : "bg-transparent text-[#666666] hover:text-[#111111] border border-[#E0E0E0] hover:border-[#111111]"
                }`}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  backgroundColor: activeCategory === cat ? "#F5C800" : undefined,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className={`product-card bg-white group ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: "#F5C800",
                    color: "#111111",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {product.tag}
                </div>
                {/* Category badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(17,17,17,0.85)",
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {product.category}
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: "#666666", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Consulte disponibilidade
                  </p>
                </div>
                <a
                  href={`https://wa.me/5583987002709?text=Olá! Tenho interesse no modelo ${product.name} da Ótica Victory.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 group-hover:bg-[#F5C800]"
                  style={{ backgroundColor: "#111111" }}
                  aria-label={`Consultar ${product.name}`}
                >
                  <ArrowRight size={18} className="text-white group-hover:text-[#111111] transition-colors duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/5583987002709?text=Olá! Gostaria de ver o catálogo completo da Ótica Victory."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-victory inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Ver Catálogo Completo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
