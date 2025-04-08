import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const position = [-34.622335, -68.350650];

  return (
    <div className="p-6 h-75">
      <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Aquí está la dirección</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;