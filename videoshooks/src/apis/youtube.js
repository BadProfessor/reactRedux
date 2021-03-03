// import axios from 'axios';

// const KEY = 'AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc';

// export default axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3',
//   params: {
//     part: 'snippet',
//     maxResults: 5,
//     key: KEY,
//   },
// });

// import AXIOS dependecy
import axios from 'axios';

// constant value for the key in the environment file
// it is a publicly available api key so it is safe to share
const KEY = `AIzaSyDf4-4Z763YA8SGUvXmGeelaofclARfo48`;

// we are making a pre-configured instance of axios
export default axios.create({
  // we are making a base url
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // inputing the params
  // inputing the snippet with max 5 results and inputing the API key
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
    // we are not inputing the queue yet, we are not preconfiguring it yet, only when we make use of the instanace
  },
});
