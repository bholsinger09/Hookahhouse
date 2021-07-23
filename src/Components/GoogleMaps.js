import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker, StandaloneSearchBox  } from 'google-maps-react';


const mapStyles = {

  width: '100%',

  height: '100%'

};


class Gmap extends Component {

  constructor() {

    super();

    this.state = {

      name: "React"

    };

  }


  render() {

    return (

      <React.Fragment>

<StandaloneSearchBox
            //onPlacesChanged={onPlacesChanged}
            //onLoad={onSBLoad}
          >
            <input
              type="text"
              placeholder="type address here"
              style={{
                boxSizing: 'border-box',
                border: `1px solid transparent`,
                width: `270px`,
                height: `40px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: 'absolute',
                top: '10rem',
                left: '40%'
              }}
            />
          </StandaloneSearchBox>



      <div>

        <Map

          google={this.props.google}

          zoom={14}

          style={mapStyles}

          initialCenter={{

            lat: YOUR_LATITUDE,

            lng: YOUR_LONGITUDE

          }}

        >

         <Marker

          onClick={this.onMarkerClick}

          name={'This is test name'}

        />

        </Map>

      </div>
      </React.Fragment>

    );

  }

}


export default GoogleApiWrapper({

  apiKey: ''

})(Gmap);