
import React from 'react';
//import GoogleMaps from '../Components/GoogleMaps';
import Map from '../Components/maps'
//import Gmap from '../Components/GoogleMaps'



const GetDirections = () => {
    return ( 
        <React.Fragment>
        <div>
        <h1 id="mapTitle"> Get Directions </h1>
        <Map/>
        </div>
        </React.Fragment>
     );
}
 
export default GetDirections;