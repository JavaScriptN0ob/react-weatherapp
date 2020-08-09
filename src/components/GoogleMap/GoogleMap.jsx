import React from 'react';
import styles from './GoogleMap.module.css';
import GoogleMapReact from 'google-map-react';

function GoogleMap(props) {
  return (
    <div className={styles.google_map}>
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyChhXI0WUaWaEarnFklWD4RmVkf34KtAGY'}}
          defaultCenter={{
            lat: props.lat,
            lng: props.lon,
          }}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default GoogleMap;