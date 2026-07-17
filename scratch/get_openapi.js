const axios = require('axios');
const fs = require('fs');

async function getOpenApi() {
  try {
    const res = await axios.get('https://poise-crouch-plating.ngrok-free.dev/openapi.json', {
      headers: { "ngrok-skip-browser-warning": "true" }
    });
    fs.writeFileSync('scratch/openapi.json', JSON.stringify(res.data, null, 2));
    console.log("openapi.json saved successfully");
  } catch (err) {
    console.error("Error fetching openapi.json:", err.message);
  }
}

getOpenApi();
