// import React dependencies
import React from 'react';

// react components are written in upper case
// arrow function
// props system
// props short for properties
// we can call the argument anything, but by convention it is props
const Comment = props => {
  // logging prop objects
  // console.log(props);
  // return with parentheses
  return (
    // comment class
    <div className="comment">
      {/* avatar class for the image, and alt text */}
      <a href="/" className="avatar">
        {/* src for the source of the image */}
        {/* reference the faker library */}
        {/* attribute on the jsx element */}
        <img alt="avatar" src={props.avatar} />
      </a>
      {/* Content div, with the author */}
      <div className="content">
        <a href="/" className="author">
          {/* author's name */}
          {props.authorOfComment}
        </a>
        {/* metadata with the date when a comment was posted, metadata styling */}
        <div className="metadata">
          {/* date metadata */}
          <span className="date">{props.timeCreated}</span>
        </div>
        {/* the actual body of the text */}
        <div className="text">{props.contentBody}</div>
      </div>
      {/* test */}
      <p>props</p>
    </div>
  );
};

// export the component
// connect it to the main file
export default Comment;
