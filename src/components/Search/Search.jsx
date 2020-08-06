import React from 'react';
import styles from './Search.module.css';

function Search(props) {
  return (
    <div className={styles.weather__search}>
      <div>
        <label>Enter city name:</label>
        <input type="text"/>
      </div>
      <div>
        <label>Enter country:</label>
        <input type="text"/>
      </div>
      <input type="submit" value="Search" className={styles.search} onClick={props.onClick} />
    </div>
  )
}

export default Search;