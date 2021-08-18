
import React from 'react';
import './App.css';
import Header from '../src/Components/header';
import NavBar from '../src/Components/navBar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './Pages/home';
import GetQuote from './Pages/getQuote';
import GetDirections from './Pages/getDirections';
import ContactUs from './Pages/contactUs'
import NotFoundPage from './Pages/notfoundPage';


//import GetData from './Actions/testState';



function App() {

  return (
    <React.Fragment>
      
      <Router>
      <NavBar/>
    <div className="App">
    <Header/>
    </div>
    
    
    
        <Switch>
          <Route path="/" component={Home} exact />

          
          <Route path="/getQuote" component={GetQuote} />
          
          
          <Route path="/getDirections" component={GetDirections} />

          <Route path="/contactUs" component={ContactUs} />

          
          <Route component={NotFoundPage}/>


          </Switch>
          
         
            
          
        
          
  
    
    </Router> 

  
    
    </React.Fragment>
  );
}





export default App;

/*
<Route path="/testState" component={GetData} />



*/