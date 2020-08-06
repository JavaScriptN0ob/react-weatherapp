import React from 'react';
import styles from './Current.module.css';

function Current(props) {
  return (
    <div className={styles.weather__current}>
      <div className={styles.current__temp_weather}>
        <div className={styles.temp_weather__temp}>{props.temp}</div>
        <div className={styles.temp_weather__weather}>{props.weather}</div>
      </div>
      <div className={styles.current__humidity_wind}>
        <div className={styles.humidity_wind}>
          <div className={styles.humidity_wind__title}>HUMIDITY</div>
          <div className={styles.humidity_wind__value}>{props.humidity}</div>
        </div>
        <div className={styles.humidity_wind__divider}></div>
        <div className={styles.humidity_wind}>
          <div className={styles.humidity_wind__title}>WIND</div>
          <div className={styles.humidity_wind__value}>{props.wind}</div>
        </div>
      </div>
    </div>
  )
}

export default Current;