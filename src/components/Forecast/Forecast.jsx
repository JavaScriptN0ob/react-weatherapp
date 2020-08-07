import React from 'react';
import styles from './Forecast.module.css';
import ForecastItem from './ForecastItem';
import { updateDay } from './updateDay';
import { findWeatherIconURL } from './findWeatherIconURL';

function Forecast(props) {
  if (props.forecast[0].weatherID === '999') {
    return <div className={styles.waiting_search}>Waiting for the first search</div>
  }
  return (
    <div className={styles.weather__forecast}>
      <ForecastItem 
        day={updateDay(props.today)[0]}
        url={findWeatherIconURL(props.forecast[0].weatherID, openWeatherMapIconURL)}
        temp={props.forecast[0].temp}
        weather={props.forecast[0].weather}
      />
      <ForecastItem 
        day={updateDay(props.today)[1]}
        url={findWeatherIconURL(props.forecast[1].weatherID, openWeatherMapIconURL)}
        temp={props.forecast[1].temp}
        weather={props.forecast[1].weather}
      />
      <ForecastItem 
        day={updateDay(props.today)[2]}
        url={findWeatherIconURL(props.forecast[2].weatherID, openWeatherMapIconURL)}
        temp={props.forecast[2].temp}
        weather={props.forecast[2].weather}
      />
      <ForecastItem 
        day={updateDay(props.today)[3]}
        url={findWeatherIconURL(props.forecast[3].weatherID, openWeatherMapIconURL)}
        temp={props.forecast[3].temp}
        weather={props.forecast[3].weather}
      />
      <ForecastItem 
        day={updateDay(props.today)[4]}
        url={findWeatherIconURL(props.forecast[4].weatherID, openWeatherMapIconURL)}
        temp={props.forecast[4].temp}
        weather={props.forecast[4].weather}
      />
    </div>
  )
}

const openWeatherMapIconURL = [
  {
    min: 0,
    max: 299,
    url: 'http://openweathermap.org/img/wn/11d@2x.png',
  },
  {
    min: 300,
    max: 400,
    url: 'http://openweathermap.org/img/wn/09d@2x.png',
  },
  {
    min: 401,
    max: 505,
    url: 'http://openweathermap.org/img/wn/10d@2x.png',
  },
  {
    min: 506,
    max: 519,
    url: 'http://openweathermap.org/img/wn/13d@2x.png',
  },
  {
    min: 520,
    max: 599,
    url: 'http://openweathermap.org/img/wn/09d@2x.png',
  },
  {
    min: 600,
    max: 699,
    url: 'http://openweathermap.org/img/wn/13d@2x.png',
  },
  {
    min: 700,
    max: 799,
    url: 'http://openweathermap.org/img/wn/50d@2x.png',
  },
  {
    min: 700,
    max: 799,
    url: 'http://openweathermap.org/img/wn/50d@2x.png',
  },
  {
    min: 799,
    max: 800,
    url: 'http://openweathermap.org/img/wn/01d@2x.png',
  },
  {
    min: 800,
    max: 801,
    url: 'http://openweathermap.org/img/wn/02d@2x.png',
  },
  {
    min: 801,
    max: 802,
    url: 'http://openweathermap.org/img/wn/03d@2x.png',
  },
  {
    min: 802,
    max: 805,
    url: 'http://openweathermap.org/img/wn/04d@2x.png',
  },
]

// function updateDay(dayIndex) {
//   const dayName = {
//     1: "MON", 
//     2: "TUE", 
//     3: "WED", 
//     4: "THU", 
//     5: "FRI", 
//     6: "SAT", 
//     7: "SUN"
//   };
//   const days = [];
//   for (let i = 0; i < 5; i++) {
//     let addon = dayIndex + i;
//     if (addon > 7) addon -=7;
//     days.push(dayName[addon]);
//   }
//   return days;
// }

export default Forecast;