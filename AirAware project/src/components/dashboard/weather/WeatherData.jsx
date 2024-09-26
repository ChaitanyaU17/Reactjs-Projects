import React from 'react';
import { useSelector } from 'react-redux';
/* rechart */

const WeatherData = () => {

    const weatherData = useSelector((state) => state.weather.data);
    // const weatherStatus = useSelector((state) => state.weather.status);
    // const weatherError = useSelector((state) => state.weather.error);
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;


    /* sunrise sunset */
    function convertUnixToTime(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const strMinutes = minutes < 10 ? '0' + minutes : minutes;
        const time = hours + ':' + strMinutes + ' ' + ampm;
        return time;
    }


    return (
        <>
        </>
    );
}

export default WeatherData;


