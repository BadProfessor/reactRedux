// react, state, and axio for api
import React, { useState, useEffect } from 'react';
// installign axios for apis
import axios from 'axios';

// contant component
// language and text props
const Convert = ({ language, text }) => {
  // setting the state for the translated strings
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    // setting timeout for the api call so it does not get called every milisecond, half a second
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  // useEffect for the api request
  useEffect(() => {
    // helper function with async
    const doTranslation = async () => {
      // post request, destructuring data
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        // params with the key
        {
          params: {
            q: debouncedText,
            target: language.value,
            // key for the Google Translate API, works only in localhost:3000
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    // invoking the function
    doTranslation();
  }, [language, debouncedText]);

  // puting the translated state object in the div
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

//export it
export default Convert;
