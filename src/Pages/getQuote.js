import React from 'react';

const GetQuote = () => {
    return(
        <React.Fragment>
    <form>

  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />

  </form>
        </React.Fragment>

    )
};

export default GetQuote;