import React from 'react';
//import GoogleMaps from '../Components/GoogleMaps';

const GetQuote = (props) => {
    return(
        <React.Fragment>

    <form id="quoteForm">
      <h1 id="quoteTitle">Quote Help Form</h1>
      <p id="quotePar">Please provide your Name, Contact Email, and what products you would like more information about in this form :</p>

  <label>
    Name:
    <input type="text" name="name" />
  </label>
  
  <label>
    Email:
    <input type="text" name="email" />
  </label>
  <br/>
  <label>
    What products would you like to know more about:
    <input type="text" name="help" />
  </label>

  <br/>
  <br/>

  <input type="submit" value="Submit" />

  </form>



  
        </React.Fragment>

    )
};

export default GetQuote;