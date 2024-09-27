import React, { useEffect } from 'react';
import Nav from "../components/layout/Nav";
import WeatherData from '../components/dashboard/weather/WeatherData';
import MapForcast from '../components/dashboard/weather/Map_Forcast';
import Userprotect from '../components/dashboard/weather/Userprotect';
import { useDispatch, useSelector } from 'react-redux';
import { fetchweatherData } from '../redux/WeatherApiSlice';
import { fetchweatherforcastData } from '../redux/WeatherForcastSlice';
import WeatherImg from "../images/weather.avif";

const Weather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data);
  const WeatherCityname = weatherData?.name;
  const inputvalue = useSelector((state) => state.input.value);
  const geolocation = useSelector((state) => state.location.location);
  const weatherStatus = useSelector((state) => state.weather.status);

  // console.log('geolocation', geolocation)
  /* user Live coord */
  const lat = geolocation?.lat;
  const lon = geolocation?.lng;
  /* search weather by city */
  useEffect(() => {
    dispatch(fetchweatherData({ q: inputvalue, lat, lon }));
  }, [dispatch, inputvalue, lat, lon]);

  /* weather forcast */
  useEffect(() => {
    if (WeatherCityname) {
      dispatch(fetchweatherforcastData(WeatherCityname));
    }
  }, [dispatch, WeatherCityname]);



  return (
    <>
      <Nav />
      {
        weatherStatus === 'succeeded' ? <>
          <WeatherData />
          <MapForcast />
          <Userprotect />
        </>
          :
          <>
            <div className='w-full h-[80vh]  flex justify-center items-center'>
              <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%]  w-[90%] h-auto flex flex-col items-center '>

                <img src={WeatherImg} alt='weather' className='w-[300px] h-auto' />
                <h1 className='text-2xl text-gray-300 font-bold'>Search your place</h1>
                <p className='text-center text-gray-400'> and enable location permissions in site settings to allow this website to access your location for accurate, real-time weather data. </p>
              </div>
            </div>
          </>
      }
    </>
  );
};

export default Weather;
