
import React from 'react';
import './App.css';
import Header from '../src/Components/header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './Pages/home';
import GetQuote from './Pages/getQuote';


function App() {

  return (
    <React.Fragment>
      <Router>
    <div className="App">
    <Header/>
    </div>
    
    
    
        <switch>
          <Route exact path="/" component={Home}/>
            
          
          </switch>
          <Route path="/getQuote"/>
            <GetQuote />
          
        
      
  
    
    </Router> 
    
    </React.Fragment>
  );
}





export default App;
