import React from 'react';
import {useState} from 'react';


const GetQuote = (props) => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

    return(
        <React.Fragment>
    

    <form id="quoteForm" >
      <h1 id="quoteTitle">Quote Help Form</h1>
      <p id="quotePar">Please provide your Name, Contact Email, and what products you would like more information about in this form :</p>

  <label id="formName" className="Form">
    Name:
    <input type="text" name="name" 
    onChange={(event) => { setName(event.target.value);
    }}/>
  </label>
  
  <label id="formEmail" className="Form">
    Email:
    <input type="text" name="email" 
    onChange={(event) => { setEmail(event.target.value);
    }}/>
  </label>
  <br/>
  <label id="formQuestion" className="Form" >
    What products would you like to know more about:
    <input type="text" name="help" 
    onChange={(event) => { setQuestion(event.target.value);
    }}/>
  </label>

  <br/>
  <br/>

  <input id="quoteSubmit"type="submit" value="Submit" />

  </form>

  

  
        </React.Fragment>

    )
};

export default GetQuote;