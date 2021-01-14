// import React and useState hook
import React, { useState } from 'react';

// pushing the dynamic array with props
// returning JSX
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      // adding the React Fragment that contains the JSX element and we are mapping over it
      <React.Fragment key={item.title}>
        {/* styilying for the div AND onClick function */}
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        {/* where we are displaying the content */}
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  // retuning and rendering the items
  // styling for the accordion
  return <div className="ui styled accordion">{renderedItems}</div>;
};

// we are exporting the components
export default Accordion;
