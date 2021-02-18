// importing the components and dependencies
import React from 'react';
import PostList from './PostList';

// making the components with the sytle of the ui container
const App = () => {
  return (
    <div className="ui container">
      {/* importing the postlist component */}
      <PostList />
    </div>
  );
};

export default App;
