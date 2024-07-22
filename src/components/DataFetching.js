import axios from 'axios';
import React,{useEffect, useState} from 'react'


export default function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res => {
        console.log(res)
        setPost(res.data)
        })
        .catch(err => {
        console.log(err)
        })
        }
    ,[idFromButtonClick]);

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} /> 
        <button onClick={handleClick}>Fetch Post</button>
      {/* <ul>
        {
            posts.map(item => {
                return <li key={item.id}>{item.title}</li>
            })
        }
      </ul> */}

      <h3>{post.id}</h3>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
      <h3>{post.userId}</h3>

    </div>
  )
}
