// importing React, hooks and the components
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

// declare the main component
const Translate = () => {
  // setting the state
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      {/* form with the classname for fields and label */}
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          {/* text input for the component */}
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      {/* instance of a dropdown */}
      <Dropdown
        // label for the component
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

//exporting
export default Translate;
