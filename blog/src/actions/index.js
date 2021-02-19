//using lodash so that we do not duplicate/overfetch the records from the API, only fetch the unique record once
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// making a separate function
// separate action creator
// dispatching our own actions
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // caling fetchPosts
  await dispatch(fetchPosts());

  // where we are using the lodash library
  // getState gives the posts property
  // chaining all these functions
  _.chain(getState().posts)
    // maping the user ids
    .map('userId')
    // just the unique user ids
    .uniq()
    // dispatching the result
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

//
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  // returning the response data
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// exporting the fetch users
// passing the id of the user that we want to fetch
export const fetchUser = id => async dispatch => {
  // we are getting the user ids from the jsonPlaceholder API
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
