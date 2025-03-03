import "./infoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

const coldImg = "https://npr.brightspotcdn.com/legacy/wp-content/uploads/2021/02/snow-in-shelby-park.jpg";
const rainyImg = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const hotImg = "https://as2.ftcdn.net/v2/jpg/03/41/33/81/1000_F_341338178_1ol01MomaJ8wLIGxKMkauXKCaoUIq77i.jpg";
const clear_skyImg = "https://4kwallpapers.com/images/wallpapers/clear-sky-sunset-dusk-blue-sky-starry-sky-horizon-beach-2880x1800-4044.jpg";

export default function InfoBox({searchResult}) {

    return(
        <div className="infoBox">
            <Card sx={{ maxWidth: 345, width: 345 }}> {/*added width  and height is increased*/}
                <CardMedia
                    sx={{ height: 200 }}     
                    image={
                        searchResult.humidity > 90
                        ? rainyImg
                        : searchResult.temp > 28 
                        ? hotImg
                        : searchResult.temp > 18
                        ? clear_skyImg 
                        : coldImg
                    }
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {searchResult.city} {
                        searchResult.humidity > 90
                        ? <ThunderstormIcon />
                        : searchResult.temp > 28 
                        ? <WbSunnyIcon />
                        : searchResult.temp > 18
                        ? <WbCloudyIcon />
                        : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <h4>{searchResult.weatherDescription}, Feels like {searchResult.feels_like}&deg;C</h4>
                        <p>Temperature = {searchResult.temp}&deg;C</p>
                        <p>Min Temperature = {searchResult.temp_min}&deg;C</p>
                        <p>Max Temperature = {searchResult.temp_max}&deg;C</p>
                        <p>Humidity : {searchResult.humidity}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}