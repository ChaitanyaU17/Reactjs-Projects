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

                {/* card 2 */}
                <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-full w-full h-[200px] rounded-md bg-blue-100 shadow-sm p-2'>
                    <h2 className='text-5xl  text-center'>{weatherData?.name}</h2>
                    <div className=" flex items-center gap-4 mt-2 px-4">
                        <FaTemperatureHigh />
                        <span>Feels Like: {kelvinToCelsius(weatherData?.main?.feels_like).toFixed(2)}°C</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Pressure: {weatherData?.main?.pressure} hPa</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTint />
                        <span>Humidity: {weatherData?.main?.humidity}%</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Sea Level Pressure: {weatherData?.main?.sea_level} hPa</span>
                    </div>
                    <div className=" flex items-center gap-4 px-4">
                        <FaTachometerAlt />
                        <span>Ground Level Pressure: {weatherData?.main?.grnd_level} hPa</span>
                    </div>

                </div>
                {/* card3 */}
                <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-full w-full h-[200px] rounded-md bg-green-100 p-2 shadow-sm flex flex-wrap '>
                    <div className="w-[50%] h-auto cursor-pointer flex items-center gap-4 px-4" title='Visibility'>
                        <FaEye className="text-xl" />
                        <span >Visibility {weatherData?.visibility} m</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Wind Speed'>
                        <FaWind className='text-xl' />
                        <span > Speed {weatherData?.wind?.speed} m/s</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Wind Direction'>
                        <TiCompass className='text-xl' />
                        <span >Wind Dire. {weatherData?.wind?.deg}°</span>
                    </div>
                    {/* <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4 " title='Wind Gusts'>
                        <MdStorm className='text-xl' />
                        <span > 62.2 m/s</span>
                    </div> */}
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4" title='Cloud Cover'>
                        <FaCloud className='text-xl' />
                        <span >Cloud Cover {weatherData?.clouds?.all}%</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex items-center gap-4 px-4 " title='Sunrise'>
                        <IoSunny className='text-xl' />
                        <span >Sunrise {sunriseTime}</span>
                    </div>
                    <div className="w-[50%] h-auto cursor-pointer  flex  items-center gap-4 px-4 " title='Sunset'>
                        <GiSunrise className='text-xl' />
                        <span >Sunset {sunsetTime}</span>
                    </div>

                    {/* Add weather data here ... */}
                </div>
            </div>


        </>
    );
}

export default WeatherData;


