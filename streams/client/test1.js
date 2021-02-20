// App.js
import React from 'react';
import { BrowserRouter, Route } from './react-router-dom';
import { Header } from './Header';
import { StreamList } from './StreamList';
import { StreamDetails } from './StreamDetails';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />

          <Route path="/streams/details" exact component={StreamDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// StreamList.js
import React from 'react';
import { Link } from './react-router-dom';

const StreamList = () => {
  return (
    <div className="stream-list">
      <h3>StreamList</h3>
      <Link to="/streams/details">Go to Stream Details</Link>
    </div>
  );
};

export { StreamList };

// StreamDetails.js
import React from 'react';
import { Link } from './react-router-dom';

const StreamDetails = () => {
  return (
    <div className="stream-details">
      <h3>StreamDetails</h3>

      <Link to="/">Go back to Stream List</Link>
    </div>
  );
};

export { StreamDetails };
