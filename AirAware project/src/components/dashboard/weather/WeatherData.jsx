import React from 'react';
import { FaCloud, FaEye, FaTemperatureHigh, FaWind } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';//Pressure
import { FaTint } from 'react-icons/fa';//Humidity
import { GiSunrise } from 'react-icons/gi';
import { IoSunny } from 'react-icons/io5';
import { TiCompass } from 'react-icons/ti';
// import { MdStorm } from 'react-icons/md'; // Use MdStorm for a stormy weather icon
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

    const sunrise = weatherData?.sys?.sunrise;
    const sunset = weatherData?.sys?.sunset;

    const sunriseTime = convertUnixToTime(sunrise);
    const sunsetTime = convertUnixToTime(sunset);


    // console.log(weatherData?.weather[0]?.description)

    return (
        <>
            {/* Weather Cards */}
            <div className='w-full h-auto flex  flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col justify-between p-4 gap-4'>
            
                {/* card 1 */}
                <div className='w-full md:w-[40%] h-[200px] rounded-md bg-red-100 shadow-sm flex'>
                    <div className='w-[150px] h-full flex flex-col justify-center items-center p-4 '>
                        <img src={`http://openweathermap.org/img/wn/${weatherData?.weather && weatherData?.weather[0]?.icon}@2x.png`} alt='weather' className='w-[100px] h-[100px]' />
                        <p className='text-xl font-bold '>{weatherData?.weather && weatherData?.weather[0]?.main}</p>
                        <p className='text-base'>{weatherData?.weather && weatherData?.weather[0]?.description}</p>
                    </div>
                    <div className='w-[60%] h-auto flex flex-col gap-4 justify-center items-center'>
                        <h1 className='text-7xl  font-bold'>{kelvinToCelsius(weatherData?.main?.temp).toFixed(0)}°C</h1>

                        <p >max: {kelvinToCelsius(weatherData?.main?.temp_min).toFixed(0)}°C  min: {kelvinToCelsius(weatherData?.main?.temp_max).toFixed(0)}°C</p>
                    </div>
                </div>

                
            
            </div>


        </>
    );
}

export default WeatherData;


