import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IMG_HAZE, HOT_IMG, COLD_IMG, RAINY_IMG } from './utils/constants'
import classes from './InfoBox.module.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const InfoBox = ( {info} ) => {
  return (
    <div className="InfoBox">
      <div className={classes.cardContainer}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_IMG
                : info.temp > 15
                ? HOT_IMG
                : COLD_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <WbSunnyIcon />
                : <AcUnitIcon />
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>
                The weather describe as a{" "}
                <i>
                  <b>{info.weather}</b>
                </i>{" "}
                and feels like = {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default InfoBox;