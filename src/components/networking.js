export const getJSON = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.error(`Error fetching: ${url}: ${err.toString()}`);
    });
};
