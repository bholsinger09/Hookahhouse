import React from 'react';
 import {useState} from 'react';
 import Axios from 'axios';
 //import {setState} from 'react';
 //import { response } from 'express';

 



 const QuoteForm = ()=> {

 

 //      state variable ,  stateHandler = usesState(default state)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

//being that the state handler is already declared 
//this should set the new state values to empty strings 
   const clearForm = ()=>{
     setName("");
     setEmail("");
     setQuestion("");
   }


 const nameChange = (e) =>{
   setName(e.target.value);
 }
 
 const emailChange = (e) =>{
  setEmail(e.target.value);
}

const questionChange = (e) =>{
  setQuestion(e.target.value);
}
  


   const custData =  
   { 
     "name" :name , 
    "email" :email , 
    "question":question
  } ;

   


  
    
    const submitPromise= (e) => {  
      e.preventDefault();
      let url;
      //url = "https://hookahsite-backend.herokuapp.com";

      
      if (process.env.SERVER_LOCATION === "LOCAL") {
          url = "https://localhost:8000";
      } else{
          url = "https://hookahsite-backend.herokuapp.com";
      }
      

      Axios.post(url, custData)
      .then( (axiosResponse)=> { 
                       // here you can use the data 
                       console.log(custData);
                       const submitQuestions = axiosResponse.data;
                       console.log(submitQuestions);
                       })
                       
      .catch((e)=> {console.log(e)})

     
      clearForm();
      
      }



    //this uses try catch however the backend is not getting hit with any data
    //tested this same request in Postman and it works 
    /*
    function submitQuestion() { 
      try {
       Axios.post('https://hookahsite-backend.herokuapp.com ' ,
      {
        name:name , 
        email:email , 
        question:question
        
      },
      )
      }
      catch (err) {console.error(err);}
        }
         
*/

   



     return(
         <React.Fragment>



     <form id="quoteForm" 
     
     >
       <h1 id="quoteTitle">Quote Help Form</h1>
       <p id="quotePar">Please provide your Name, Contact Email, and what products you would like more information about in this form :</p>

   <label id="formName" className="Form">
     Name:
     <input placeholder="name" value={name} type="text" name="name" 

     onChange={nameChange}

     />
   </label>

   <label id="formEmail" className="Form">
     Email:
     <input placeholder="email" value={email} type="text" name="email" 
     onChange={emailChange}
     />
   </label>
   <br/>
   <label  id="formQuestion" className="Form" >
     What products would you like to know more about:
     <input placeholder="question" value={question} id="formQuestion"type="text" name="help" 
     onChange={questionChange}/>
   </label>

   <br/>
   <br/>

   <button id="quoteSubmit" type="submit" 

   onClick = 
   {

     submitPromise
    
   
     
   }

   /*
   old way
      {()=>
    
    submitQuestion()
    
  }
  */

   >Submit </button>

   </form>

   ›


         </React.Fragment>

     )
 };

 export default QuoteForm; 