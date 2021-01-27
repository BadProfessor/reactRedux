// importing React and the useState hook
import React, { useState } from 'react';
// import the components
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

// an array of options. This is static. Each object has a label of value.
const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

// exporting the default arrow function
export default () => {
  // from useState for the dropdown, the default value is 0
  // we are checking if it was selected or not
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      {/* accordion components with its pathnames */}
      <Route path="/">
        {/* accordion component pasted with the items */}
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        {/* importing the Search component */}
        <Search />
      </Route>
      <Route path="/dropdown">
        {/* Dropdown component with the label, options and the selection */}
        <Dropdown
          label="Select a color"
          options={options}
          // what is selected right now
          selected={selected}
          // updated piece of state
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        {/* translate component */}
        <Translate />
      </Route>
    </div>
  );
};
