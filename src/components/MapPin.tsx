import { MapPin as MapPinIcon } from "lucide-react";

// Placeholder component - can be extended with actual map functionality later
const MapPin = () => {
  return (
    <div className="flex items-center justify-center">
      <MapPinIcon className="h-16 w-16 text-primary animate-float" />
    </div>
  );
};

export default MapPin;