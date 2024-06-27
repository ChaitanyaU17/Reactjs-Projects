import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IMG_HAZE } from './utils/constants'
import classes from './InfoBox.module.css';

const InfoBox = ( {info} ) => {

    return (
      <div className="InfoBox">
        <div className={classes.cardContainer}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={IMG_HAZE}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
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