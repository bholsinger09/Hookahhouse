import React, { useState, useEffect } from 'react';


function GetData() {
  const [posts, setPost] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:  
  
  useEffect(() => {   
       // Update the document title using the browser API  
           });

  return (
    <React.Fragment>
    <div>
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    </div>
</React.Fragment>
    
  );
}

export default GetData;