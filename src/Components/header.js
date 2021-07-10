import React from 'react'

import companyTitle from '../Components/companyTitle';

const header = ()=> {
    return(
        <header className="App-header">
        <companyTitle/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    )
};

export default header;