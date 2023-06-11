import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';

// https://axios-http.com/docs/req_config
// GET one post with id=1
/*  const client = axios.create({
    // `url` is the server URL that will be used for the request
    //url: '/posts',
    // `baseURL` will be prepended to `url` unless `url` is absolute
    baseURL: 'https://jsonplaceholder.typicode.com',
    // `params` are the URL parameters to be sent with the request
    params: {
        id: 1
    },
    // `method` is the request method to be used when making the request
    method: 'get',
    // `transformResponse` allows changes to the response data to be made before it is passed to then/catch    
    transformResponse: (data) => {
        return data;    
    },
    // `headers` are custom headers to be sent
     headers: 
    {
        'Content-Encoding': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }, 
    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 10000,
    // `withCredentials` specifies whether or not cross-site Access-Control requests should be made using credentials
    withCredentials: true,
    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    responseType: 'json',
    // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
    maxContentLength: 10000,
    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    maxRedirects: 10,
    responseEncoding: 'utf-8', // default

})  */

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})


const Post = () => {
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = '/posts';

    // https://axios-http.com/docs/res_schema
    const getPost = async () => {
        try {
            const {data, headers, request, status, statusText, config} = await client.get(`${url}`, {
                /* params: {
                    id: 1
                }, */
                responseType: 'json',
                headers: {
                    'Content-Encoding': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                },
                method: 'get',
                timeout: 10000,
                withCredentials: true,
                maxContentLength: 10000,
                maxRedirects: 10,
                responseEncoding: 'utf-8'
            });
            setLoading(true);

            setPosts(data);

            setLoading(false);

/*             console.log('response headers', headers);
            console.log('response data', data);
            console.log('response request', request);
            console.log('response status', status);
            console.log('response statustext', statusText);
            console.log('response config', config); */
            
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
  /*               console.log('error.response.data', error.response.data);
                console.log('error.response.code', error.response.code);
                console.log('error.response.status', error.response.status);
                console.log('error.response.headers', error.response.headers); */

                setError(error);
              } else if (error.request) {
                // The request was made but no response was received
                // console.log('error.request', error.request);

                setError(error);
              } else {
                // Something happened in setting up the request that triggered an Error
                //console.log('Error message', error.message);

                setError(error);
              }
            //console.log('error.config', error.config);
        }
    }

    const postPost = async () => {
        try {
            const {data, headers, request, status, statusText, config} = await client.post(`${url}`, {
                 params: {
                    "userId": 10,
                    "id": 101,
                    "title": "new post title",
                    "body": "new post body"
                    },
                responseType: 'json',
                headers: {
                    'Content-Encoding': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                },
                method: 'post',
                timeout: 10000,
                withCredentials: true,
                maxContentLength: 10000,
                maxRedirects: 10,
                responseEncoding: 'utf-8'
            });
            setLoading(true);

            setPosts(data);

            setLoading(false);
        
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                setError(error);
              } else if (error.request) {
                // The request was made but no response was received
                setError(error);
              } else {
                // Something happened in setting up the request that triggered an Error
                setError(error);
              }
        }
    }

    useEffect(() => {
        //getPost();
        //postPost();
    }, [])

    useEffect(() => {
        postPost();
    }, [posts])


    const showNothing = () => {
        return (
            <>
                <span></span>
            </>
        )
    }

    console.log(posts)

    const ListPostItem = () => {
        return(
            <>
                {
                    (posts !== null && posts !== undefined) ? 
                        posts.map((post) =>
                            <li key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </li>
                        )
                        : 
                    <>{showNothing}</>
                }
            </>
        );
    };
    
    const LoadingSpanner = () => {
        return(
            <div>Loading...</div>
        );
    }

 /*    multiple ternary operator SyntaxErrorvar 
    yourVar = condition1 ? someValue
    : condition2 ? anotherValue
    : defaultValue; */

    return (
        <>
            {
                loading ? <LoadingSpanner /> 
                : (posts !== null && posts !== undefined) ? <><ul>{<ListPostItem />}</ul></>
                : <></> 
            }
        </>
    )
}

export default Post