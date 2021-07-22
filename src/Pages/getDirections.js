
import React from 'react';
import GoogleMaps from '../Components/GoogleMaps';

const GetDirections = () => {
    return ( 
        <React.Fragment>
        <div>
        <h1 id="mapTitle"> Get Directions </h1>
        <GoogleMaps/>
        </div>
        </React.Fragment>
     );
}
 
export default GetDirections;