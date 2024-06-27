import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: 'Delhi',
        feels_like: 41.96,
        humidity: 63,
        temp: 34.96,
        tempMax: 34.96,
        tempMin: 34.96,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div style={{textAlign: 'center'}} >
      <h1>Weather Analysis</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  )
}

export default WeatherApp;
