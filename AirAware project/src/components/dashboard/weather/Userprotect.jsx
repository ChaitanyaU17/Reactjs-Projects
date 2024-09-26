import React, { useEffect, useState } from 'react';
import { FaSnowflake, FaInfoCircle, FaExclamationTriangle, FaHeart, FaFirstAid } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa';
import ProtectJsonData from "../../../json/TempData.json"
import { useSelector } from 'react-redux';
const Userprotect = () => {
    // console.log('ProtectJsonData', ProtectJsonData)
    const [datauserprotect, setDatauserprotect] = useState([''])
    const [daynighttimeprotection, setDaynighttimeprotection] = useState(true)
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;

    const weatherData = useSelector((state) => state.weather.data);
    // const weatherStatus = useSelector((state) => state.weather.status);
    // const weatherError = useSelector((state) => state.weather.error);

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

    /* auto userprotection day and night  */
    useEffect(() => {
        if (isDaytime) {
            setDaynighttimeprotection(true)
        } else {
            setDaynighttimeprotection(false)
        }
    }, [isDaytime])

    const dayprotection = () => {
        setDaynighttimeprotection(true)
    }

    const nightprotection = () => {
        setDaynighttimeprotection(false)
    }


    return (
        <div className="container mx-auto p-4 bg-gray-800 text-white">
            <div className='w-full h-auto flex gap-4 py-2'>
                <button
                    onClick={dayprotection}
                    className={`w-[100px] h-[40px] flex justify-center items-center rounded-md cursor-pointer ${daynighttimeprotection ? 'bg-white text-black' : 'border'}`}
                    title='Day'
                >
                    <FaSun className='mr-2 text-yellow-400' /> Day
                </button>
                <button
                    onClick={nightprotection}
                    className={`w-[100px] h-[40px] flex justify-center items-center rounded-md cursor-pointer ${!daynighttimeprotection ? 'bg-white text-black border' : 'border'}`}
                    title='Night'
                >
                    <FaMoon className='mr-2 text-blue-400' /> Night
                </button>
            </div>
            
        </div>
    );
};

export default Userprotect;
