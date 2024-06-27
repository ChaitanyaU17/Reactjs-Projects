import { useState } from 'react';
import classes from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API_URL, API_KEY } from './utils/constants';

const SearchBox = ( { updateInfo } ) => {
    const[city, setCity] = useState('');

   

    const getWeatherData = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        //console.log(data);

        let result = {
            city: city,
            temp: data.main.temp,
            tempMax: data.main.temp_max,
            tempMin: data.main.temp_min,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            weather: data.weather[0].description,
        }
        console.log(result);
        return result;

    }

    const handleInput = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity('');
        const newInfo = await getWeatherData();
        updateInfo(newInfo);
    }

    return (
      <div className={classes.searchbar}>
        <form onClick={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="city name" 
        variant="outlined" 
        value={city}
        onChange={handleInput}
        />
        <p>
          <Button className="search-btn" variant="contained" type='submit'>
            Search
          </Button>
        </p>
        </form>
      </div>
    );
}

export default SearchBox;