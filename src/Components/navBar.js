import React from 'react';
import CompanyTitle from '../Components/companyTitle'

const NavBar = () => {
    return(
        <React.Fragment>
        
      <nav id="nav">
        
      <CompanyTitle/>
        <ul>
  <li className="navMenu"id="homeMenu" ><a href="default.asp">Home</a></li>
  <li className="navMenu" id= "quoteMenu"><a href="#top">Get Quote</a></li>
  <li className="navMenu" id="contactMenu"><a href="#top">Contact Us</a></li>
  <li className="navMenu" id="directionsMenu"><a href="#top">Get Directions</a></li>
       </ul> 
       
       </nav>
       </React.Fragment>

    )
};

export default NavBar;