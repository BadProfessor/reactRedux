// importing axios for API requests and fetching
import axios from 'axios';

// we are making an HTTP request
// create method creates an instance of the axios client, it is a customised copy for the specific url
export default axios.create({
  // root url for the api
  baseURL: 'https://api.unsplash.com',
  // headers for the auth
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
  }
});
