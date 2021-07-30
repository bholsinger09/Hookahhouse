import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Datafetching() {
    const [posts, setPosts] = useState([]);

     useEffect(  () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => console.log(res))
    })
    .catch( err => { console.log(err)
    });

    //This currently outputs useEffect as undefined

    

    return (
     <React.Fragment>
         <div>
             <ul>
                 {posts.map(post => <li key={post.id}>{post.title}</li>)}
             </ul>
         </div>
     </React.Fragment>
    )
}

export default Datafetching;