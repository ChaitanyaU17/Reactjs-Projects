import { useState } from 'react';
import classes from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API_URL, API_KEY } from './utils/constants';
import Alert from '@mui/material/Alert';

const SearchBox = ({ updateInfo }) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const getWeatherData = async () => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            let result = {
                city: city,
                temp: data.main.temp,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min,
                humidity: data.main.humidity,
                feels_like: data.main.feels_like,
                weather: data.weather[0].description,
            };
            console.log(result);
            return result;
        } else {
            throw new Error('City not found');
        }
    };

    const handleInput = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(city);
            setCity('');
            const newInfo = await getWeatherData();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className={classes.searchbar}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleInput}
                />
                <p>
                    <Button className="search-btn" variant="contained" type="submit">
                        Search
                    </Button>
                </p>
            </form>
            <div className={classes.error}>
            {error && <Alert severity="error">No such a place exist in API!</Alert>}
            </div>
        </div>
    );
};

export default SearchBox;
