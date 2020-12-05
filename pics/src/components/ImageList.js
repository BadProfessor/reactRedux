import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// making an arrow function so we bind this property
// arrow function component
const ImageList = props => {
  // we are returning mapped images
  const images = props.images.map(image => {
    // we are returning the image id and image
    // returning from the root element
    return <ImageCard key={image.id} image={image} />;
  });

  // returning/rendering content
  return <div className="image-list">{images}</div>;
};

export default ImageList;
