import axios from 'axios';

function getForecast(cityName, countryName) {
  let config = {
    method: 'get',
    url: `https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=${countryName}&cityName=${cityName}&weatherType=forecast`,
    headers: { }
  };

  return axios(config)
  .then((response) => {
    const weatherForecastData = response.data;
    return weatherForecastData;
  })
  .catch((error) => {
    console.log('getForecastError', error);
  });
}

export default getForecast;