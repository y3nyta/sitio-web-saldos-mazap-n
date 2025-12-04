import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet's default icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface StoreMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  popupText?: string;
}

const StoreMap = ({ lat, lng, zoom = 16, popupText = "Saldos Mazapán" }: StoreMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialize map
    mapInstance.current = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: zoom,
      scrollWheelZoom: false,
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance.current);

    // Add marker
    const marker = L.marker([lat, lng]).addTo(mapInstance.current);
    
    // Add popup
    marker.bindPopup(`
      <div style="text-align: center; padding: 8px;">
        <strong style="font-size: 14px; color: #E91E63;">${popupText}</strong>
        <br/>
        <span style="font-size: 12px; color: #666;">Av. Balbino Obeso López 186</span>
        <br/>
        <span style="font-size: 12px; color: #666;">Lucio Blanco</span>
      </div>
    `).openPopup();

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [lat, lng, zoom, popupText]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-64 md:h-96 rounded-lg z-0"
      style={{ minHeight: "300px" }}
    />
  );
};

export default StoreMap;