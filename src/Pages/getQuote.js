import React from 'react';
 import {useState} from 'react';
 import Axios from 'axios'
 //import { response } from 'express';


 const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");



  //This is the promise version 
  


   const custData =  
   { 
     "name" :name , 
    "email" :email , 
    "question":question
  } ;



  
    
    const submitPromise= () => {  
      
      let url;
      if (process.env.SERVER_LOCATION === "LOCAL") {
          url = "https://localhost:8000";
      } else{
          url = "https://hookahsite-backend.herokuapp.com";
      }
      axios.post(url, custData)
      .then( (axiosResponse)=> { 
                       // here you can use the data 
                       console.log(custData);
                       const submitQuestions = axiosResponse.data;
                       console.log(submitQuestions);
                       })
                       
      .catch((e)=> {console.log(e)})
      
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
     <input type="text" name="name" 

     onChange={(event) => { setName(event.target.value);}}

     />
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