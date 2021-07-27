import React from 'react';


const GetQuote = (props) => {
    return(
        <React.Fragment>
    

    <form id="quoteForm" >
      <h1 id="quoteTitle">Quote Help Form</h1>
      <p id="quotePar">Please provide your Name, Contact Email, and what products you would like more information about in this form :</p>

  <label id="formName" className="Form">
    Name:
    <input type="text" name="name" />
  </label>
  
  <label id="formEmail" className="Form">
    Email:
    <input type="text" name="email" />
  </label>
  <br/>
  <label id="formQuestion" className="Form" >
    What products would you like to know more about:
    <input type="text" name="help" />
  </label>

  <br/>
  <br/>

  <input id="quoteSubmit"type="submit" value="Submit" />

  </form>

  

  
        </React.Fragment>

    )
};

export default GetQuote;