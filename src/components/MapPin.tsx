import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/pin.png", // tu icono si quieres uno personalizado
  iconSize: [38, 38],
});

interface Props {
  lat: number;
  lng: number;
}

const MapPin: React.FC<Props> = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={[lat, lng]}>
        <Popup>Mi empresa aquí</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapPin