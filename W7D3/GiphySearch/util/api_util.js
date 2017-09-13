import API_KEY from './keystore';

export const fetchSearchGiphys = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=2`
  })
);
