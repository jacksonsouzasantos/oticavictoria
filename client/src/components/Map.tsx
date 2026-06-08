// map.tsx - Versão com iframe (NÃO precisa de npm install!)
import { useRef, useEffect } from "react";

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className = "",
  initialCenter = { lat: -7.1199406, lng: -34.8555233 },
  initialZoom = 16,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Criar iframe com mapa (Google Maps embed - funciona sem API key!)
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyD3vE6iY_4JkZqYkqTqQyQyQyQyQyQyQyQ&q=${initialCenter.lat},${initialCenter.lng}&zoom=${initialZoom}`;
    
    // URL alternativa que funciona SEMPRE
    const embedUrl = `https://maps.google.com/maps?q=${initialCenter.lat},${initialCenter.lng}&z=${initialZoom}&output=embed`;
    
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.style.borderRadius = "8px";
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    
    // Limpar e adicionar iframe
    mapContainer.current.innerHTML = "";
    mapContainer.current.appendChild(iframe);
    
    if (onMapReady) {
      onMapReady({ iframe });
    }
    
    return () => {
      if (mapContainer.current) {
        mapContainer.current.innerHTML = "";
      }
    };
  }, [initialCenter, initialZoom, onMapReady]);

  return (
    <div 
      ref={mapContainer} 
      className={`w-full h-full min-h-[450px] bg-gray-100 rounded-lg overflow-hidden ${className}`}
    />
  );
}