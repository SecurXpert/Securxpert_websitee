const axios = require('axios');

async function testGet() {
  const API_BASE_URL = "https://api.securxperts.com:8000/";
  try {
    const loginRes = await axios.post(`${API_BASE_URL}auth/login`, {
      email: "guest_superadmin_securxpert@gmail.com",
      password: "VisitorPass123"
    }, { headers: { "ngrok-skip-browser-warning": "true" } });
    const token = loginRes.data.access_token;

    const res = await axios.get(`${API_BASE_URL}job-applications/get_all_applications`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true"
      }
    });
    console.log("Response status:", res.status);
    console.log("Response data:", JSON.stringify(res.data, null, 2));
  } catch (err) {
    if (err.response) {
      console.log("Error status:", err.response.status);
      console.log("Error data:", JSON.stringify(err.response.data, null, 2));
    } else {
      console.error("Error:", err.message);
    }
  }
}
testGet();
