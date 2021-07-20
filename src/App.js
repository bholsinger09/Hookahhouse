
import React from 'react';
import './App.css';
import Header from '../src/Components/header';
import Welcome from '../src/Components/bodyWelcome';

import NavBar from './Components/navBar';
import MainPic from './Components/homeMainPic';
import OriginStory from './Components/originStory';
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Pages/home';
import GetQuote from './Pages/getQuote';


function App() {

  return (
    <React.Fragment>
    <div className="App">
    <Header/>
    </div>
    <BrowserRouter>
    <NavBar/>
    <div className="navMenu">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/getQuote">
            <GetQuote />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    <Welcome/>
    <MainPic/>
    <OriginStory/>
      
    
    </React.Fragment>
  );
}





export default App;
