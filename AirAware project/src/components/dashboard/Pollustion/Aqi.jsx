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
            {/* AQI */}
            <div className='w-full h-auto flex justify-center items-center p-4'>
                <div
                    className='xl:w-[30%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-full rounded-md shadow-sm p-6 text-center'
                    style={{ backgroundColor: datauserprotectaqi?.bg_color }}
                >
                    <p
                        className='text-6xl font-bold'
                        style={{ color: datauserprotectaqi?.text_color }}
                    >
                        {pollustiondata?.list && pollustiondata?.list[0]?.main?.aqi}
                    </p>
                    <div className="text-xl font-semibold mt-2">Air Quality Index (AQI)</div>
                    <div className="text-gray-600 mt-1">
                        {datauserprotectaqi?.category}
                    </div>
                    <p>{WeatherCityname}</p>
                </div>
            </div>

         
        </>
    )
}

export default Aqi
