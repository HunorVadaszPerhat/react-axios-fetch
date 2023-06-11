import './App.css';
import React, {useState, useEffect} from'react';
import axios from 'axios';
import Post from './Post';

const url = `https://jsonplaceholder.typicode.com/posts`

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

function App() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  console.log('Error', error);


  // GET - Promise based with axios
/*    useEffect(() => {
    axios
      .get(`${url}/1`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => { // if rejected handle error
        setError(error);      
      })
  }, []); */


  // GET - Promise based with axios.create
/*   useEffect(() => {
    client
      .get(`/1`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => { // if rejected handle error
        setError(error);      
      })
  }, []); */


  // GET - Async/Await based with axios.create 
  // One method to get data from server
/*   useEffect(() => {
    async function getPost() {
      const response = await client.get('/1');
      setPost(response.data);
    }
    getPost();
  },[]) */


  // GET - Async/Await based with axios.create
  // Two methods to get data from server
/*   const getPost = async () => {
     const data = await client.get('/1');
     const response = await data.json();
     setPost(response.data);  
  }

  useEffect(() => {
    getPost();
  },[]) */


  // GET - Async/Await based with fetch api
  // Two methods to get data from server
/*   const getPost = async () => {
    const data = await fetch.get(`${url}/1`);
    const response = await data.json();
    setPost(response.data);
  }

  useEffect(() => {
    getPost();
  },[]) */


  // GET - with fetch api within useEffect
/*   useEffect(() => {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => setPost(data))
    // cleanup function
    return () => {
      console.log('cleanup');
    }
  },[]) */

  // GET - with fetch api outside useEffect
/*   const fetchData = async () => {
    const response = await fetch.get(`${url}/1`);
    const responsedata = await data.json();
    setPost(data);
  }

  useEffect(() => {
    fetchData();
    // cleanup function
    return () => {
      console.log('cleanup');
    }
  },[]) */

  // POST - Async/Await based with fetch api outside useEffect
/*   const fetchData = async () => {
    const response = await fetch(`${url}/1`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
              title: 'New Post',
              body: 'This is a new post'
            })
    });
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    fetchData();
    // cleanup function
    return () => {
      console.log('cleanup');
    }
  },[]) */

   // GET - with fetch api outside useEffect
/*   const fetchData = () => {
    const response = fetch(`${url}/1`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
              title: 'New Post',
              body: 'This is a new post'
            })
    })
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => { // if rejected handle error)
        setError(error);      
    })
  }

  useEffect(() => {
    fetchData();
    // cleanup function
    return () => {
      console.log('cleanup');
    }
  },[]) */


 /*  useEffect(() => {
    axios
      .get(`${url}/1`).then(response => {
        setPost(response.data);
      }
    )
  }, []);
 */
  // Async/Await based with fetch api
/*   const fetchPost = async () => { 
    const data = await fetch.get(`${url}/1`);
    const response = await data.json();
    setPost(response.data);
  }

  useEffect(() => { 
    fetchPost();
    // cleanup function
    return () => {
      console.log('cleanup');
    }
  }, []); */

/*   if(!post){
    return(
      <>
        <h4>No data.</h4>
      </>
    );
  } */

  return (
      <>
        <Post/>
      </>
  );
}

export default App;
