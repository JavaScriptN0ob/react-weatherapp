function findWeatherIconURL(id, weatherURL) {
  for (let i = 0; i < weatherURL.length; i++) {
    if (id > weatherURL[i].max) {
      continue;
    }
    
    return weatherURL[i].url
  }
}

module.exports = { findWeatherIconURL };