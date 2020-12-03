// import the dependencies
import React from 'react';

const Loader = props => {
  return (
    // class for the dimmer/loader
    <div className="ui active dimmer">
      {/* text for the loader */}
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Loader.defaultProps = {
  // default message
  message: 'Loading...'
};

// exporting it to other components
export default Loader;
