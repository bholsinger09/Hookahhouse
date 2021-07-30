import React from 'react';
import CompanyTitle from '../Components/companyTitle'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <React.Fragment>
        
      <nav id="nav">
        
      <CompanyTitle/>
        <ul>
  <li className="navMenu"id="homeMenu" ><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/">Home</NavLink></li>

   



   

  <li className="navMenu" id= "quoteMenu"><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/getQuote">Get a quote </NavLink></li>

  <li className="navMenu" id="contactMenu"><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/contactUs">Contact us</NavLink></li>

  <li className="navMenu" id="directionsMenu"><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/getDirections">Get Directions</NavLink></li>

<li className="navMenu" id="dataMenu"><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/testData">Test Data</NavLink></li>



       </ul> 
       
       </nav>
       </React.Fragment>

    )
};

export default NavBar;

/*

<li className="navMenu" id="testMenu"><NavLink
   className="navbar-item"
   activeClassName="is-active"
   to="/testData">TestData</NavLink></li>

   */