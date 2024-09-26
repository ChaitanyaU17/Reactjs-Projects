import React from 'react'
import { FaCloud, FaSmog, FaWind, FaSun, FaCloudSun, FaCloudMoon, FaLeaf } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Aqi = ({ datauserprotectaqi }) => {
    const pollustiondata = useSelector((state) => state.pollustion.data);
    const weatherData = useSelector((state) => state.weather.data);
    const WeatherCityname = weatherData?.name;
    // console.log(pollustiondata?.list && pollustiondata?.list[0]?.components)


    const datapollution = pollustiondata?.list && pollustiondata?.list[0]?.components;



    return (
        <>
           
        </>
    )
}

export default Aqi
