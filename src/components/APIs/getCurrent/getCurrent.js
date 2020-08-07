import axios from 'axios';

function getCurrent(cityName, countryName) { 
  let config = {
    method: 'get',
    url: `https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=${countryName}&cityName=${cityName}&weatherType=current`,
    headers: { }
  };

  return axios(config)
  .then((response) => {
    const weatherCurrentData = response.data;
    return weatherCurrentData;
  })
  .catch((error) => {
    console.log('getCurrentError', error);
  });
}

export default getCurrent;