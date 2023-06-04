const url = 'https://jsonplaceholder.typicode.com/posts/123456789';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
    // Display an error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There was a problem fetching the data. Please try again later.';
    document.body.appendChild(errorMessage);
  });
