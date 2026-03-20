const axios = require('axios');

// Function to fetch data from an API
async function fetchData() {
  try {
    const response = await axios.get('https://api.open-meteo.com');
    console.log('API Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
