
import React from 'react';
import './App.css';
import Header from '../src/Components/header';
import Welcome from '../src/Components/bodyWelcome'

import NavBar from './Components/navBar';
import Product from '../src/Components/Products'

function App() {

  return (
    <React.Fragment>
    <div className="App">
    <Header/>
    </div>
    <NavBar/>
    <Welcome/>
    <Product/>
      
    
    </React.Fragment>
  );
}





export default App;
