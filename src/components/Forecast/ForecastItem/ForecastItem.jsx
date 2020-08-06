import React from 'react';
import styles from './ForecastItem.module.css';
import WeatherIcon from '../WeatherIcon'

function ForecastItem(props) {
  return (
    <div className={styles.forecast}>
      <div className={styles.forecast__day}>{props.day}</div>
      <div className={styles.forecast__icon}>
        <WeatherIcon iconURL={props.url} alt={props.weather}/>
      </div>
      <div className={styles.forecast__temp}>{props.temp}</div>
      <div className={styles.forecast__weather}>{props.weather}</div>
    </div>
  )
}

export default ForecastItem;