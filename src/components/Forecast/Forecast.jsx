import React from 'react';
import styles from './Forecast.module.css';
import ForecastItem from './ForecastItem';
import { updateDay } from './updateDay';

function Forecast(props) {
  return (
    <div className={styles.weather__forecast}>
      <ForecastItem 
        day={updateDay(props.today)[0]}
        url="http://openweathermap.org/img/wn/09d@2x.png"
        temp="9"
        weather="RAINING"
      />
      <ForecastItem 
        day={updateDay(props.today)[1]}
        url="http://openweathermap.org/img/wn/01d@2x.png"
        temp="15"
        weather="SUNNY"
      />
      <ForecastItem 
        day={updateDay(props.today)[2]}
        url="http://openweathermap.org/img/wn/04d@2x.png"
        temp="11"
        weather="CLOUDY"
      />
      <ForecastItem 
        day={updateDay(props.today)[3]}
        url="http://openweathermap.org/img/wn/11d@2x.png"
        temp="7"
        weather="STORM"
      />
      <ForecastItem 
        day={updateDay(props.today)[4]}
        url="http://openweathermap.org/img/wn/01d@2x.png"
        temp="18"
        weather="SUNNY"
      />
    </div>
  )
}

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