// axios for apis
import axios from 'axios';

// just using the jsonplaceholders
// just simple json data
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
