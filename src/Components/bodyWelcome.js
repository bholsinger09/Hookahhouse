import React from 'react';

const Welcome = () => {
    return (
        <React.Fragment>
      <div>
        <h1 id="welcome">Welcome to the Grocery & Hookah house!</h1>
        <p className="introductionPar"id="introductionProducts">Come to visit our store, we carry the very best shisha, hookah, tobacco, and vape products.<br/> </p>
        <p className="introductionPar"id="introductionGrocery"> Come see our new Grocery products such as a varity of Tea and Coffee.<br/> </p>
        <p className="introductionPar">Check our customers review on google here: <a href="https://www.yelp.com/biz/grocery-house-boise"> Click here</a></p>
        <br/>
        <p className="introductionPar"id="introductionFreeShipping"> Free shipping for all Products to all US States<br/></p>
       

      </div>

        </React.Fragment>
        

    )

};

export default Welcome;