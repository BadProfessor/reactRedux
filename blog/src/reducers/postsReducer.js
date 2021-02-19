// returning a value

// props as an ampty array and action as a response
// never update the state directly
//
export default (state = [], action) => {
  // if it is fetch posts then return the actions payload
  // if not then return the state
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
