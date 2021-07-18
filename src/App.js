
import React from 'react';
import './App.css';
import Header from '../src/Components/header';
import Welcome from '../src/Components/bodyWelcome'

import NavBar from './Components/navBar';

function App() {

  return (
    <React.Fragment>
    <div className="App">
    <Header/>
    </div>
    <NavBar/>
    <Welcome/>
    
      
    
    </React.Fragment>
  );
}





export default App;
