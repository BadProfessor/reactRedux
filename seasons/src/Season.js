// we are importing the dependencies and CSS
import './Season.css';
import React from 'react';

// configure the season strings
const seasonConfig = {
  // if it is summer return this string
  summer: {
    text: 'It is hot outside.',
    // storing the icon name
    iconName: 'sun'
  },
  // if it is winter return this string
  winter: {
    text: 'It is cold outside.',
    // storing the icon name
    iconName: 'snowflake'
  }
};

// we getting the Season with the current latitute and current month
const getSeason = (lat, month) => {
  // if between March and August
  if (month > 2 && month < 9) {
    // if lat greater than 0 and between March and August, northern hemisphere
    return lat > 0 ? 'summer' : 'winter';
  } else {
    // if lat greater than 0 and NOT between March and August, southern hemisphere
    return lat > 0 ? 'winter' : 'summer';
  }
};

// new functional component
const Season = props => {
  // we are getting the required data
  const season = getSeason(props.lat, new Date().getMonth());

  // console.log(season);

  // get the seasons and icons from the season config
  const { text, iconName } = seasonConfig[season];

  // returning the div with the results
  return (
    // displaying the season
    // we are having hte class name for the page and then season specific styling
    <div className={`season ${season}`}>
      {/* displaying the icons on the right and left side */}
      <i className={`icon-left massive ${iconName} icon`} />
      {/* we are returning also the string. */}
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

// exporting the component
export default Season;
