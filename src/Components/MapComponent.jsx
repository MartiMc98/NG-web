
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from '/img/Logo-companias/marker-icon.png';
import markerShadow from '/img/Logo-companias/marker-shadow.png';

const MapComponent = () => {
  return (
    <div className='p-6'>

      <iframe width="100%" height="300" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Ballofet%201074%20Local%201%2C%20San%20Rafael&t=&z=14&ie=UTF8&iwloc=B&output=embed">
      </iframe>
    </div>


  )
}

export default MapComponent;







/*import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 


const MapComponent = () => {

  const position = [-34.622335, -68.350650];

  return (
    <div className="p-6 h-75">
      <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={position}>
          <Popup>Aquí está la dirección</Popup>
        </Marker>
      </MapContainer>
    </div>


  )
}

export default MapComponent;





<div class="embed-map-responsive"><div class="embed-map-container"><iframe class="embed-map-frame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Ballofet%201074%20Local%201%2C%20San%20Rafael&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe><a href="https://sprunkiretake.net" style="font-size:2px!important;color:gray!important;position:absolute;bottom:0;left:0;z-index:1;max-height:1px;overflow:hidden">sprunki retake</a></div><style>.embed-map-responsive{position:relative;text-align:right;width:100%;height:0;padding-bottom:66.66666666666666%;}.embed-map-container{overflow:hidden;background:none!important;width:100%;height:100%;position:absolute;top:0;left:0;}.embed-map-frame{width:100%!important;height:100%!important;position:absolute;top:0;left:0;}</style></div>
<iframe  width="100%" height="300" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Ballofet%201074%20Local%201%2C%20San%20Rafael&t=&z=14&ie=UTF8&iwloc=B&output=embed">
      </iframe>

*/







