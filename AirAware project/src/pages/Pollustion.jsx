import React, { useEffect, useState } from 'react'
import Nav from '../components/layout/Nav'
import Aqi from '../components/dashboard/Pollustion/Aqi'
import AQIjsondata from "../json/AQI.json"
import UserProtectionPollustion from '../components/dashboard/Pollustion/UserProtectionPollustion'
import { fetchpollustionData } from '../redux/Pollustion'
import { useDispatch, useSelector } from 'react-redux'
import { fetchweatherData } from '../redux/WeatherApiSlice'
import PollustionImg from "../images/pollustion.avif"
const Pollustion = () => {
    const [datauserprotectaqi, setDatauserprotectaqi] = useState(['']);
    const dispatch = useDispatch()
    const pollustiondata = useSelector((state) => state.pollustion.data);
    const PollustionStatus = useSelector((state) => state.pollustion.status);
    console.log('PollustionStatus', PollustionStatus)
    const weatherData = useSelector((state) => state.weather.data);
    const inputvalue = useSelector((state) => state.input.value);


    const geolocation = useSelector((state) => state.location.location);


    // console.log('geolocation', geolocation)
    /* user Live coord */
    const glat = geolocation?.lat;
    const glon = geolocation?.lng;
    /* search weather by city */
    useEffect(() => {
        dispatch(fetchweatherData({ q: inputvalue, glat, glon }));
    }, [dispatch, inputvalue, glat, glon]);

    const lat = weatherData ? weatherData.coord?.lat : geolocation?.lat;
    const lon = weatherData ? weatherData.coord?.lon : geolocation?.lng;



    useEffect(() => {
        dispatch(fetchpollustionData({ lat, lon }))
    }, [dispatch, lat, lon])

    const AQI = pollustiondata?.list && pollustiondata?.list[0]?.main?.aqi;


    useEffect(() => {
        const range = AQIjsondata?.aqi_ranges?.find(teprenge =>
            (AQI >= teprenge.min && AQI <= teprenge.max)
        );
        if (range) {
            // console.log('AQI Range:', range);
            setDatauserprotectaqi(range)
        } else {
            console.log('No range found for temperature:', AQI);
        }
    }, [AQI]);




    return (
        <>
            <Nav />
            {
                PollustionStatus === 'succeeded' ? <>
                    <Aqi datauserprotectaqi={datauserprotectaqi} />
                    <UserProtectionPollustion datauserprotectaqi={datauserprotectaqi} />
                </> : <>
                    <div className='w-full h-[80vh]  flex justify-center items-center'>
                    <div className='xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%]  w-[90%] h-auto flex flex-col items-center '>

                            <img src={PollustionImg} alt='weather' className='w-[300px] h-auto' />
                            <h1 className='text-2xl text-gray-300 font-bold'>Search your place</h1>
                            <p className='text-center text-gray-400'> and enable location permissions in site settings to allow this website to access your location for accurate, real-time pollution data. </p>
                        </div>
                    </div>
                </>
            }



        </>
    )
}

export default Pollustion
