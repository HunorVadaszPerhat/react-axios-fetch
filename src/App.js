import './App.css';
import React, {useState, useEffect} from'react';
import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/posts`
const urlId = `https://jsonplaceholder.typicode.com/posts/1`


function App() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

   useEffect(() => {
    axios
      .get(urlId)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        setError(error);      
      })
  }, []);

  useEffect(() => {
    axios
      .get(`${url}/1`).then(response => {
        setPost(response.data);
      }
    )
  }, []);

  const createPost = () => {  
    axios
      .post(url, {title: 'Post 1', body: 'Post 1'})
      .then(response => {
        setPost(response.data);
      }
    )
  }

  const updatePost = () => {
    axios
      .put(`${url}/1`, {title: 'Post 2', body: 'Post 2'})
      .then(response => {
        setPost(response.data);
      }
    )
  }

  const deletePost = () => {
    axios
      .delete(`${url}/1`)
      .then(response => {
        setPost(response.data);
      }
    )
  }


  if(!post){
    return(
      <>
        <h4>No data.</h4>
      </>
    );
  }

  return (
      <>
        <div>
          {post.title}
        </div>
      </>
  );
}

export default App;
