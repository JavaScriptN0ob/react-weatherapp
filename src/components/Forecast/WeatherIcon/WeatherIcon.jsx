import React from 'react';

function WeatherIcon(props) {
  return (
    <img src={props.iconURL} alt={props.weather} />
  )
}

export default WeatherIcon;