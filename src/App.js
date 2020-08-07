import React from 'react';
import Current from './components/Current';
import City from './components/City';
import styles from './App.module.css';
import News from './components/News';
import Forecast from './components/Forecast';
import Search from './components/Search';
import getCurrent from './components/APIs/getCurrent/index';
import getForecast from './components/APIs/getForecast/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      cityName: "",
      today: new Date().getDay(),
      temp: "",
      weather: "",
      humidity: "",
      wind: "",
      forecast: [
        {
          weatherID: "999",
          temp: "13",
          weather: "Rain",
        },
        {
          weatherID: "500",
          temp: "14",
          weather: "Rain",
        },
        {
          weatherID: "501",
          temp: "11",
          weather: "Rain",
        },
        {
          weatherID: "500",
          temp: "14",
          weather: "Rain",
        },
        {
          weatherID: "804",
          temp: "13",
          weather: "Clouds",
        },
      ]
    };
    
    this.getCurrentData = this.getCurrentData.bind(this);
    this.handleCountryInput = this.handleCountryInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
  }

  async getCurrentData() {
    const { cityName, countryName } = this.state;
    // console.log(cityName, countryName);
    const weatherCurrentData = await getCurrent(cityName, countryName); 
    const weatherForecastDate = await getForecast(cityName, countryName);
    console.log(weatherCurrentData.response);
    this.setState({
      countryName: weatherCurrentData.response.city.country,
      cityName: weatherCurrentData.response.city.name,
      temp: Math.round(weatherCurrentData.response.current.maxCelsius),
      weather: weatherCurrentData.response.current.weather,
      humidity: `${weatherCurrentData.response.current.humidity}%`,
      wind: `${weatherCurrentData.response.current.windSpeed}K/M`,
      forecast: [
        {
          weatherID: weatherForecastDate.response.forecast[3].weatherID,
          temp: Math.round(weatherForecastDate.response.forecast[3].maxCelsius),
          weather: weatherForecastDate.response.forecast[3].weather,
        },
        {
          weatherID: weatherForecastDate.response.forecast[11].weatherID,
          temp: Math.round(weatherForecastDate.response.forecast[11].maxCelsius),
          weather: weatherForecastDate.response.forecast[11].weather,
        },
        {
          weatherID: weatherForecastDate.response.forecast[19].weatherID,
          temp: Math.round(weatherForecastDate.response.forecast[19].maxCelsius),
          weather: weatherForecastDate.response.forecast[19].weather,
        },{
          weatherID: weatherForecastDate.response.forecast[27].weatherID,
          temp: Math.round(weatherForecastDate.response.forecast[27].maxCelsius),
          weather: weatherForecastDate.response.forecast[27].weather,
        },{
          weatherID: weatherForecastDate.response.forecast[35].weatherID,
          temp: Math.round(weatherForecastDate.response.forecast[35].maxCelsius),
          weather: weatherForecastDate.response.forecast[35].weather,
        },
      ]
    })
  }

  handleCountryInput(countryText) {
    this.setState({
      countryName: countryText,
    })
  }

  handleCityInput(cityText) {
    this.setState({
      cityName: cityText,
    })
  }

  render() {
    const { temp, weather, humidity, wind, cityName, today, forecast } = this.state

    return (
      <div className={styles.weather__background}>
        <Search 
          onCityChange={this.handleCityInput} 
          onCountryChange={this.handleCountryInput}
          cityText={this.state.cityName} 
          countryText={this.state.countryName}
          onSearch={this.getCurrentData}
        />
        <div className={styles.weather__container}>
          <div className={styles.weather_top}>
            <Current
              temp={temp} 
              weather={weather}
              humidity={humidity}
              wind={wind}
            />
            <City 
              city={cityName}
            />
          </div>
          <div className={styles.weather__divider}></div>
          <div className={styles.weather_bottom}>
            <News />
            <div className={styles.weather_bottom__divider}></div>
            <Forecast today={today} forecast={forecast}/>
          </div>
        </div>
      </div>
    )
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     input: "",
  //   }
  //   let timerID;
  // }

  
  // handleInput = (e) => {
  //   this.setState({
  //     input: e.target.value,
  //   }, () => {
  //     if (this.timerID) {
  //       clearTimeout(this.timerID);
  //     }
  //     this.timerID = setTimeout(() => console.log(this.state.input), 1000);
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Name input is ' + this.state.input);
  // }
  
  // render() {
  //   return(
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={this.state.input} onChange={this.handleInput}></input>
  //       </label>
  //       <input type="submit" value="Submit"></input>
  //     </form>
  //   )
  // }
}


export default App;