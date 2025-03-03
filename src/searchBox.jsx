import "./searchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


export default function SearchBox({updateSearch}) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const apiKey = `56b4f24913327fb61efae0d7203d5b4d`;//from openweathermap.org
    const builtInGeocodingApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

    const getWeatherInfo = async () => {

        try {
            let response = await fetch(builtInGeocodingApi);
            if (!response.ok) {
                // Throw an error if the response status is not OK (e.g., 404)
                throw new Error('City not found');
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                lon: jsonResponse.coord.lon,
                lat: jsonResponse.coord.lat,
                weatherDescription: jsonResponse.weather[0].description,
            }
            return result;
        } catch (err) {
            setError(true);
            console.error('Error fetching weather data:', err); // Log error to the console
            //The error is then re-thrown to be handled elsewhere if needed.
            throw err;

        } 
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        setError(false); // Reset error state before making the request
        try {
            let result = await getWeatherInfo();
            updateSearch(result);
        } catch (err) {
            // Handle error (e.g., show alert or message to user)
            alert('Sorry, the city you searched for does not exist.');
            console.error('Error in handleSubmit:', err); // Log error to the console
        }
    }

    return (
        <div className="searchBox">

            <form onSubmit={handleSubmit}>
                <label htmlFor="outlined-basic" style={{fontWeight: 500, fontSize: "2rem"}}>Search Weather</label>
                <br /><br />
                <TextField id="outlined-basic" label="City Name" value={city} variant="outlined"  required onChange={handleChange}/>
                <br /> <br />
                <Button type='submit' variant="contained" startIcon={<SearchIcon />}>
                    Search
                </Button>
            </form>
        </div>
    );
}