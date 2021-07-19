import React from 'react';
import CompanyTitle from '../Components/companyTitle'

const NavBar = () => {
    return(
        <React.Fragment>
        
      <nav class="navBar" class="sticky" >
        <div id="nav">
      <CompanyTitle/>
        <ul>
  <li class="navMenu"id="homeMenu" ><a href="default.asp">Home</a></li>
  <li class="navMenu" id= "quoteMenu"><a href="#top">Get Quote</a></li>
  <li class="navMenu" id="contactMenu"><a href="#top">Contact Us</a></li>
  <li class="navMenu" id="directionsMenu"><a href="#top">Get Directions</a></li>
       </ul> 
       </div>
       </nav>
       </React.Fragment>

    )
};

export default NavBar;