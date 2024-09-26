import React from 'react';
import Markermap from '../../../images/marker.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
const customIcon = new L.Icon({
    iconUrl: Markermap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const Map_Forcast = () => {
   return (
    <></>
    );
};

export default Map_Forcast;
