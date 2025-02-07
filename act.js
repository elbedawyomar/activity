const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
const url = `https://api.nasa.gov/endpoint?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
console.log('hello')
