
import React from 'react';
import './App.css';
import Header from '../src/Components/header';
import NavBar from '../src/Components/navBar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './Pages/home';
import GetQuote from './Pages/getQuote';
import GetDirections from './Pages/getDirections';
import ContactUs from './Pages/contactUs'
//import GoogleMaps from './Components/GoogleMaps'



function App() {

  return (
    <React.Fragment>
      
      <Router>
      <NavBar/>
    <div className="App">
    <Header/>
    </div>
    
    
    
        <Switch>
          <Route exact path="/" component={Home}/>

          

          
          <Route exact path="/getQuote" component={GetQuote}/>
          
          
          <Route exact path="/getDirections" component={GetDirections}/>

          <Route exact path="/contactUs" component={ContactUs}/>

          </Switch>
          
         
            
          
        
      
  
    
    </Router> 

    
    
    </React.Fragment>
  );
}





export default App;
