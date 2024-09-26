import React from 'react';
import Markermap from '../../../images/marker.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

delete L.Icon.Default.prototype._getIconUrl;
const customIcon = new L.Icon({
    iconUrl: Markermap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const Map_Forcast = () => {
    const weatherData = useSelector((state) => state.weather.data);
    /* weather forcast */
    const weatherforcast = useSelector((state) => state.weatherforcast.data);

    let position = null;
    if (weatherData?.coord?.lat && weatherData?.coord?.lon) {
        position = [weatherData.coord.lat, weatherData.coord.lon];
    }

    // Extract unique dates and their forecast data
    const getUniqueDates = (data) => {
        if (!data || !data.list) return [];
        const dates = data.list.map(item => item.dt_txt.split(' ')[0]);
        return [...new Set(dates)];
    };

    const aggregateDataByDate = (data, dates) => {
        if (!data || !data.list) return {};
        return dates.reduce((acc, date) => {
            acc[date] = data.list.filter(item => item.dt_txt.startsWith(date));
            return acc;
        }, {});
    };

    const uniqueDates = getUniqueDates(weatherforcast);
    const aggregatedData = aggregateDataByDate(weatherforcast, uniqueDates);


    return (
        <div className='w-full h-auto flex flex-col lg:flex-row gap-6 p-6'>
            {/* Map Section */}
            <div className='w-full lg:w-1/3 h-[350px] rounded-md overflow-hidden shadow-sm  '>
                {position ? (
                    <MapContainer center={position} zoom={6} style={{ height: '350px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position} icon={customIcon}>
                            <Popup>A sample popup message!</Popup>
                        </Marker>
                    </MapContainer>
                ) : (
                    <div className="flex items-center justify-center h-full">Loading map...</div>
                )}
            </div>

           
        </div>
    );
};

export default Map_Forcast;
