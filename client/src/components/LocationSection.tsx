/*
 * ÓTICA VICTORY — Location Section
 * Design: Bold Geometric Modernism
 * - Google Maps embedded
 * - Contact info with yellow accents
 * - Opening hours
 */

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { MapView } from "@/components/Map";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: "#F5C800" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#F5C800", fontFamily: "'Poppins', sans-serif" }}
            >
              Onde Estamos
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black leading-tight"
            style={{ color: "#111111", fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}
          >
            Venha nos
            <br />
            <span style={{ color: "#F5C800" }}>Visitar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className="lg:col-span-3 overflow-hidden shadow-lg" style={{ height: "450px" }}>
            <MapView
              onMapReady={(map) => {
                const position = { lat: -7.1195, lng: -34.8631 };
                map.setCenter(position);
                map.setZoom(16);

                const marker = new google.maps.Marker({
                  position,
                  map,
                  title: "Ótica Victory",
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 12,
                    fillColor: "#F5C800",
                    fillOpacity: 1,
                    strokeColor: "#111111",
                    strokeWeight: 3,
                  },
                });

                const infoWindow = new google.maps.InfoWindow({
                  content: `
                    <div style="font-family:'Poppins',sans-serif;padding:8px;max-width:220px;">
                      <strong style="font-size:14px;color:#111111;">Ótica Victory</strong>
                      <p style="font-size:12px;color:#555;margin:4px 0 0;">
                        Av. Pres. Epitácio Pessoa, 1634 - Loja B<br/>
                        Torre, João Pessoa - PB
                      </p>
                      <a href="https://wa.me/5583987002709" target="_blank"
                        style="display:inline-block;margin-top:8px;background:#F5C800;color:#111;padding:4px 10px;font-size:11px;font-weight:700;text-decoration:none;">
                        WhatsApp
                      </a>
                    </div>
                  `,
                });

                marker.addListener("click", () => {
                  infoWindow.open(map, marker);
                });

                infoWindow.open(map, marker);
              }}
            />
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div
              className="p-6"
              style={{ backgroundColor: "#F4F4F4", borderLeft: "4px solid #F5C800" }}
            >
              <div className="flex items-start gap-4">
                <MapPin size={24} className="mt-0.5 flex-shrink-0" style={{ color: "#F5C800" }} />
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-wider mb-1"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Endereço
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#555555", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Av. Pres. Epitácio Pessoa, 1634<br />
                    Loja B — Torre<br />
                    João Pessoa — PB, 58040-000
                  </p>
                  <a
                    href="https://maps.google.com/?q=Av.+Pres.+Epitácio+Pessoa,+1634+Loja+B,+Torre,+João+Pessoa+PB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-bold uppercase tracking-wider hover:underline"
                    style={{ color: "#F5C800" }}
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div
              className="p-6"
              style={{ backgroundColor: "#111111", borderLeft: "4px solid #F5C800" }}
            >
              <div className="flex items-start gap-4">
                <Phone size={24} className="mt-0.5 flex-shrink-0" style={{ color: "#F5C800" }} />
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-wider mb-1 text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Telefone
                  </div>
                  <a
                    href="tel:+558332254778"
                    className="text-white/80 hover:text-[#F5C800] text-sm transition-colors duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    (83) 3225-4778
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="p-6"
              style={{ backgroundColor: "#F4F4F4", borderLeft: "4px solid #25D366" }}
            >
              <div className="flex items-start gap-4">
                <MessageCircle size={24} className="mt-0.5 flex-shrink-0" style={{ color: "#25D366" }} />
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-wider mb-1"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    WhatsApp
                  </div>
                  <a
                    href="https://wa.me/5583987002709?text=Olá! Gostaria de saber mais sobre a Ótica Victory."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: "#25D366", fontFamily: "'Poppins', sans-serif" }}
                  >
                    (83) 98700-2709
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-6"
              style={{ backgroundColor: "#F5C800" }}
            >
              <div className="flex items-start gap-4">
                <Clock size={24} className="mt-0.5 flex-shrink-0" style={{ color: "#111111" }} />
                <div>
                  <div
                    className="text-sm font-black uppercase tracking-wider mb-1"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Horário de Funcionamento
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#111111", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Segunda a Sábado
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(17,17,17,0.7)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    A partir das 09:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
