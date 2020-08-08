import React from 'react';
import styles from './Search.module.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityInputChange = this.handleCityInputChange.bind(this);
    this.handleCountryInputChange = this.handleCountryInputChange.bind(this);
  }

  handleCityInputChange(event) {
    this.props.onCityChange(event.target.value);
  }

  handleCountryInputChange(event) {
    this.props.onCountryChange(event.target.value)
  }

  render() {
    return (
      <div className={styles.add_city}>
        <div className={styles.weather__search}>
          <div>
            <label>Enter city name:</label>
            <input 
              type="text" 
              value={this.props.cityText} 
              onChange={this.handleCityInputChange}
            />
          </div>
          <div>
            <label>Enter country:</label>
            <input 
              type="text" 
              value={this.props.countryText} 
              onChange={this.handleCountryInputChange} 
            />
          </div>
          <input 
            type="submit" 
            value="Search" 
            className={styles.search} 
            onClick={this.props.onSearch} 
          />
          <input 
            type="submit" 
            value="AddCity" 
            className={styles.add} 
            onClick={this.props.onAdd} 
          />
        </div>
      </div>
    )
  }
}

export default Search;