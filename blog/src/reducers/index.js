// components and dependencies
// making a index.js start file for the reducers
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// exporting the object reducers
// we are posting the objects from two different components
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
