import React from 'react';
import styles from './City.module.css';

function City(props) {
  if (!props.city) {
    return (
      <div className={styles.weather__city}>
        <div className={styles.search}>for the first search</div>
      </div>
    )
  }
  return (
    <div className={styles.weather__city}>
      <div className={styles.city__name}>{props.city}</div>
    </div>
  )
}

export default City;