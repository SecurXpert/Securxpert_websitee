const axios = require('axios');

async function scan() {
  const API_BASE_URL = "https://api.securxperts.com:8000/";
  console.log("Scanning job titles...");
  for (let id = 1; id <= 10; id++) {
    try {
      const res = await axios.get(`${API_BASE_URL}job-applications/${id}`, {
        headers: { "ngrok-skip-browser-warning": "true" }
      });
      console.log(`ID ${id}:`, res.data);
    } catch (err) {
      if (err.response) {
        console.log(`ID ${id} failed:`, err.response.status, err.response.data);
      } else {
        console.log(`ID ${id} failed:`, err.message);
      }
    }
  }
}
scan();
