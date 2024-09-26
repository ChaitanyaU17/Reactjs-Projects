import React, { useEffect, useState } from 'react';
import ProtectJsonData from "../../../json/TempData.json"
import { useSelector } from 'react-redux';
const Userprotect = () => {
    // console.log('ProtectJsonData', ProtectJsonData)

    const kelvinToCelsius = (kelvin) => kelvin - 273.15;

    const weatherData = useSelector((state) => state.weather.data);
 

    const temp = kelvinToCelsius(weatherData?.main?.temp).toFixed(0);

    useEffect(() => {
        const range = ProtectJsonData?.temperature_ranges?.find(teprenge =>
            (temp >= teprenge.min && temp <= teprenge.max) || (temp >= teprenge.min && teprenge.max === Infinity)
        );

        if (range) {
            setDatauserprotect(range)
        } else {
            console.log('No range found for temperature:', temp);
        }
    }, [temp]);

    /*  */
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

    const sunrise = weatherData?.sys?.sunrise;
    const sunset = weatherData?.sys?.sunset;

    convertUnixToTime(sunrise);
    convertUnixToTime(sunset);

    // Get the current Unix timestamp
    const currentTime = Math.floor(Date.now() / 1000);

    // Determine if it's day or night
    const isDaytime = currentTime >= sunrise && currentTime < sunset;

    return (
        <></>
    );
};

export default Userprotect;
