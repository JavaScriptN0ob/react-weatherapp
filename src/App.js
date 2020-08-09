import React from 'react';
import Current from './components/Current';
import City from './components/City';
import styles from './App.module.css';
import GoogleMap from './components/GoogleMap';
import Forecast from './components/Forecast';
import Search from './components/Search';
import getCurrent from './components/APIs/getCurrent/index';
import getForecast from './components/APIs/getForecast/index';
import AddCity from './components/AddCity';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "",
      cityName: "",
      cityNameDisplay: "",
      today: new Date().getDay(),
      temp: "",
      weather: "",
      humidity: "",
      wind: "",
      forecast: [
        {
          weatherID: "",
          temp: "",
          weather: "",
        },
        {
          weatherID: "",
          temp: "",
          weather: "",
        },
        {
          weatherID: "",
          temp: "",
          weather: "",
        },
        {
          weatherID: "",
          temp: "",
          weather: "",
        },
        {
          weatherID: "",
          temp: "",
          weather: "",
        },
      ],
      loading: false,
      cityArray: [],
      cityNumber: 0,
      currentLat: "",
      currentLon: "",
    };
    
    this.getCurrentData = this.getCurrentData.bind(this);
    this.handleCountryInput = this.handleCountryInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.testCity = this.testCity.bind(this);
  }

  async getCurrentData() {
    const { cityName, countryName } = this.state;

    // console.log(cityName, countryName);
    if (!cityName || !countryName) {
      alert('please enter city name and country name')
      return;
    }

    this.handleLoading();

    const weatherCurrentData = await getCurrent(cityName, countryName); 
    const weatherForecastDate = await getForecast(cityName, countryName);
    console.log(weatherCurrentData);
    
    // console.log(weatherCurrentData.response);
    if (!weatherCurrentData || !weatherForecastDate) {
      alert('please check your city name and country name spelling');
      this.handleLoadingFinish();
      return;
    }
    
    this.setState({
      countryName: weatherCurrentData.response.city.country,
      cityName: weatherCurrentData.response.city.name,
      cityNameDisplay: weatherCurrentData.response.city.name,
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
      ],
      currentLat: weatherCurrentData.response.city.coord.lat,
      currentLon: weatherCurrentData.response.city.coord.lon,
    }, console.log(123, this.state))

    this.handleLoadingFinish();
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

  handleLoading = () => {
    this.setState({
      loading: true,
    })
  }

  handleLoadingFinish = () => {
    this.setState({
      loading: false,
    })
  }

  handleAddCity = () => {
    const { cityName, countryName, cityArray, cityNumber } = this.state;

    if (!cityName || !countryName) {
      alert('please enter city name and country name')
      return;
    }

    if (cityArray.length > '3') {
      alert ('maximum number of cities(4) reached, could not add any more city')
      return;
    }

    let newCityArray = [...this.state.cityArray];
    newCityArray.push(cityNumber);
    

    this.setState({
      cityArray: newCityArray,
      cityNumber: cityNumber + 1,
    });
  }

  handleDeleteCard = (index) => {
    const newCardArray = [...this.state.cityArray];
    newCardArray.splice(index, 1);
    this.setState({
      cityArray: newCardArray,
    });
  }

  testCity(city, country) {
    this.setState({
      cityName: city,
      countryName: country,
    }, () => this.getCurrentData());
    
  }

  render() {
    const { temp, weather, humidity, wind, cityNameDisplay, today, forecast, loading } = this.state

    if (loading) {
      return (
        <div className={styles.weather__background}>
          <Search 
            onCityChange={this.handleCityInput} 
            onCountryChange={this.handleCountryInput}
            cityText={this.state.cityName} 
            countryText={this.state.countryName}
            onSearch={this.getCurrentData}
          />
          <div className={styles.new_city}>
            {this.state.cityArray.map((item, index) => {
              return (
                <AddCity
                  key={index}
                  city={this.state.cityName}
                  country={this.state.countryName}
                  index={index}
                  onRender={this.testCity}
                  onDelete={this.handleDeleteCard}
                />
              )
            })}
          </div>
          <div className={styles.loader}>
          </div>
        </div>
      )
    }
    return (
      <div className={styles.weather__background}>
        <Search 
          onCityChange={this.handleCityInput} 
          onCountryChange={this.handleCountryInput}
          cityText={this.state.cityName} 
          countryText={this.state.countryName}
          onSearch={this.getCurrentData}
          onAdd={this.handleAddCity}
        />
        <div className={styles.new_city}>
          {this.state.cityArray.map((item, index) => {
            return (
              <AddCity
                key={index}
                city={this.state.cityName}
                country={this.state.countryName}
                index={index}
                onRender={this.testCity}
                onDelete={this.handleDeleteCard}
              />
            )
          })}
        </div>
        <div className={styles.weather__container}>
          <div className={styles.weather_top}>
            <Current
              temp={temp} 
              weather={weather}
              humidity={humidity}
              wind={wind}
            />
            <City 
              city={cityNameDisplay}
            />
          </div>
          <div className={styles.weather__divider}></div>
          <div className={styles.weather_bottom}>
            <GoogleMap 
              lat={this.state.currentLat}
              lon={this.state.currentLon}
            />
            <div className={styles.weather_bottom__divider}></div>
            <Forecast today={today} forecast={forecast}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;