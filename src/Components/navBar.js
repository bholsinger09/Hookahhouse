import React from 'react';
import CompanyTitle from '../Components/companyTitle'
import { BrowserRouter as NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <React.Fragment>
        
      <nav id="nav">
        
      <CompanyTitle/>
        <ul>
  <li className="navMenu"id="homeMenu" ><NavLink>Home</NavLink></li>

  <li className="navMenu" id= "quoteMenu"><NavLink>Get Quote</NavLink></li>

  <li className="navMenu" id="contactMenu"><NavLink>Contact us</NavLink></li>

  <li className="navMenu" id="directionsMenu"><NavLink>Get Directions</NavLink></li>
       </ul> 
       
       </nav>
       </React.Fragment>

    )
};

export default NavBar;