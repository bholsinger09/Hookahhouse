import React from 'react';
 import {useState} from 'react';
 import Axios from 'axios'
 //import { response } from 'express';


 const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");


  

   function submitQuestion() { try {
    
     
    Axios.post('https://dashboard.heroku.com/apps/hookahsite-backend.com || http://localhost:8000/' ,
    
   {
      name:name , 
      email:email , 
      question:question
      
    },
    
      
    
  
    ).then(()=> {console.log("data sent");
    
  })
   } catch (err) {console.error(err);
       
   }
    
   }

   /*
   This was used to test the state of name, email, and question

   const dispFields = () => {
     console.log("hit first");
     console.log(name + email + question);
     console.log(name);
     console.log("hit last");
     
     
   };
   
   */

   /*
   This is used in case prevent defualt needs used 
 function handleSubmit(e) {
 e.preventDefault();    }
   */






     return(
         <React.Fragment>



     <form id="quoteForm" 
     //onSubmit={handleSubmit}
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
     submitQuestion
     
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