/*global google*/
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript 
} from '@react-google-maps/api';
const lib = ['places'];
const center = { lat: 40.756795, lng: -73.954298 };
function Map() {
  const [searchBox, setSearchBox] = useState(null);

  const onPlacesChanged = () => console.log(searchBox.getPlaces());
  const onSBLoad = ref => {
    setSearchBox(ref);
  };

  return (
    <LoadScript
      googleMapsApiKey=""
      libraries={lib}


    >
        <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <input
              type="text"
              placeholder="type address here (our location: 10395 W Fairview Ave, Boise, ID 837040)"
              style={{
                boxSizing: 'border-box',
                border: `1px solid transparent`,
                width: `40rem`,
                height: `40px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: 'absolute',
                top: '10rem',
                left: '30%'
                
              }}
            />
          </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={{ height: '20rem', width: '40rem', top: "14rem", left:"20rem" }}
        center={center}
        zoom={12}
        
      >
        {/* Child components, such as markers, info windows, etc. */}
        <React.Fragment>

        componentDidMount() {



//This console logs the location

//navigator.geolocation.getCurrentPosition(function(position) {

  //console.log("Latitude is :", position.coords.latitude);

  //console.log("Longitude is :", position.coords.longitude);

//})

}

        </React.Fragment>
          
        
      </GoogleMap>
    </LoadScript>
  );
}
export default Map;