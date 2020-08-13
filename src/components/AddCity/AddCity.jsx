import React from 'react';
import styles from './AddCity.module.css';

class AddCity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: this.props.city,
      country: this.props.country,
    }
  }

  handleCardCity = () => {
    this.props.onRender(this.state.city, this.state.country);
  }

  handleDeleteCard = () => {
    this.props.onDelete(this.props.key)
  }

  render() {
     return (
    <div className={styles.city_container}>
      <button 
        className={styles.new_city}
        onClick={this.handleCardCity}
      >
        <p className={styles.city_name}>
          City: {this.state.city}
        </p>
        <p className={styles.country_name}>
          Country: {this.state.country}
        </p>
      </button>
      <button 
        className={styles.delete} 
        onClick={this.handleDeleteCard}
      >
        X
      </button>
    </div>
  )
  }
}

export default AddCity;