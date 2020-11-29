// importing the dependencies
import React from "react";

// functional component
const Approval = (props) => {
  console.log(props.children);
  // return statement with parentheses
  return (
    // simple card from Semantic UI
    <div className="ui card">
      {/* the actual content */}
      <div className="content">{props.children}</div>
      {/* extra content */}
      <div className="extra content">
        {/* two buttons */}
        <div className="ui two buttons">
          {/* blue and purple */}
          <div className="ui basic blue button">Approve</div>
          <div className="ui basic purple button">Reject</div>
        </div>
      </div>
    </div>
  );
};

// exporting the component
export default Approval;
