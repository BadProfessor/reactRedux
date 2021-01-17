// importing React and useState, useEffect and useRef hooks system
import React, { useState, useEffect, useRef } from 'react';

// creating a Dropdown arrow function component
const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  // state for the open and and closed dropdown
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // if option selected is the same as the one right now, nothing will change
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  // returning the JSX
  return (
    // returning the form
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          // visible component
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          {/* the dropdown icon */}
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          {/* ternary operator to check if is open or not */}
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {/* the options that are in the browser */}
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

// exporting the component
export default Dropdown;
