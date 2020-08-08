// import getCurrent from '../../APIs/getCurrent/index';
// import getForecast from '../../APIs/getForecast/index';

// async function getWeatherData(state) {
//   const { cityName, countryName } = state;

//   // console.log(cityName, countryName);
//   if (!cityName || !countryName) {
//     alert('please enter city name and country name');
//     return;
//   }

//   const weatherCurrentData = await getCurrent(cityName, countryName); 
//   const weatherForecastDate = await getForecast(cityName, countryName);
  
//   // console.log(weatherCurrentData.response);
//   if (!weatherCurrentData || !weatherForecastDate) {
//     alert('please check your city name and country name spelling');
//     return;
//   }
  
//   this.setState({
//     countryName: weatherCurrentData.response.city.country,
//     cityName: weatherCurrentData.response.city.name,
//     cityNameDisplay: weatherCurrentData.response.city.name,
//     temp: Math.round(weatherCurrentData.response.current.maxCelsius),
//     weather: weatherCurrentData.response.current.weather,
//     humidity: `${weatherCurrentData.response.current.humidity}%`,
//     wind: `${weatherCurrentData.response.current.windSpeed}K/M`,
//     forecast: [
//       {
//         weatherID: weatherForecastDate.response.forecast[3].weatherID,
//         temp: Math.round(weatherForecastDate.response.forecast[3].maxCelsius),
//         weather: weatherForecastDate.response.forecast[3].weather,
//       },
//       {
//         weatherID: weatherForecastDate.response.forecast[11].weatherID,
//         temp: Math.round(weatherForecastDate.response.forecast[11].maxCelsius),
//         weather: weatherForecastDate.response.forecast[11].weather,
//       },
//       {
//         weatherID: weatherForecastDate.response.forecast[19].weatherID,
//         temp: Math.round(weatherForecastDate.response.forecast[19].maxCelsius),
//         weather: weatherForecastDate.response.forecast[19].weather,
//       },{
//         weatherID: weatherForecastDate.response.forecast[27].weatherID,
//         temp: Math.round(weatherForecastDate.response.forecast[27].maxCelsius),
//         weather: weatherForecastDate.response.forecast[27].weather,
//       },{
//         weatherID: weatherForecastDate.response.forecast[35].weatherID,
//         temp: Math.round(weatherForecastDate.response.forecast[35].maxCelsius),
//         weather: weatherForecastDate.response.forecast[35].weather,
//       },
//     ]
//   })
// }

// export default getWeatherData;