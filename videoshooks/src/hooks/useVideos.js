import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// defining and arrow function to be used as a hook
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // searching for the videos with the default search term
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
