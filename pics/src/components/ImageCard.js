// importing React
import React from 'react';

// making class based component
// for one image only
class ImageCard extends React.Component {
  // constructor with props
  constructor(props) {
    super(props);

    // initialize the spans
    this.state = { spans: 0 };

    // creat a reference
    this.imageRef = React.createRef();
  }

  // lifecycle method
  componentDidMount() {
    // order of the loading is important
    // we need to reference it directly and add a event listener in load
    // we are making a set span callback
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // set the hight
    // it needs to be created as an arrow function
    // object wit hthe current property
    const height = this.imageRef.current.clientHeight;

    // adding the height and rounding it up
    const spans = Math.ceil(height / 10);

    // set the state
    this.setState({ spans });
  };

  // returning/rendering content
  render() {
    // taking the url and urls from props image
    // also destructed
    const { description, urls } = this.props.image;

    // returning a div tag
    return (
      // importing the spans in the style
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* for alt we will use description and the url*/}
        {/* returning references */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

// exporting the component
export default ImageCard;
