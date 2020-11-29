// import the dependencies for React
import React from "react";
import ReactDOM from "react-dom";
// faker, open source library for mock data
import faker from "faker";
// import the components
// relative path references
// comment body
import Comment from "./Comment";
// approval section
import Approval from "./Approval";

// new app component
const App = () => {
  return (
    // make a div component
    // ui container comments from semantic UI
    // default content
    <div className="ui container comments">
      {/* opening and closing tags to nest content within */}
      <Approval>
        <div>
          <h4>Bazinga!</h4>
          Don't press these buttons!
        </div>
      </Approval>

      <Approval>
        {/* taking the Comment
        treating it as a JSX tag */}
        {/* We are providing the prop name, and then the value */}
        <Comment
          // we are hardcoding values
          authorOfComment="Ciri"
          // when was it created
          timeCreated="Today at 16:20"
          contentBody="Nice sword"
          // import the image from the Comments Component
          avatar={faker.image.cats()}
        />
      </Approval>

      <Approval>
        <Comment
          authorOfComment="Gerald"
          timeCreated="Yesterday at 06:00"
          contentBody="Hmm"
          avatar={faker.image.cats()}
        />
      </Approval>

      <Approval>
        <Comment
          authorOfComment="Yennefer"
          timeCreated="Yesterday at 17:01"
          contentBody="I like  lilac and gooseberries."
          avatar={faker.image.cats()}
        />
      </Approval>
    </div>
  );
};

// render in in the root id
ReactDOM.render(<App />, document.querySelector("#root"));
