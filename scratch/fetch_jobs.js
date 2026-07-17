const axios = require('axios');

async function testFetch() {
  try {
    const guestEmail = "guest_visitor_securxpert@gmail.com";
    const guestPassword = "VisitorPass123";
    const API_BASE_URL = "https://poise-crouch-plating.ngrok-free.dev";

    const loginRes = await axios.post(`${API_BASE_URL}/auth/login`, {
      email: guestEmail,
      password: guestPassword
    }, { headers: { "ngrok-skip-browser-warning": "true" } });

    const token = loginRes.data?.access_token;
    console.log("Token retrieved successfully:", token ? "YES" : "NO");

    const appRes = await axios.get(`${API_BASE_URL}/book-appointment/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true"
      }
    });

    console.log("Book Appointment GET response status:", appRes.status);
    console.log("Response data:", JSON.stringify(appRes.data, null, 2));

  } catch (err) {
    console.error("Error:", err.response ? `${err.response.status} - ${JSON.stringify(err.response.data)}` : err.message);
  }
}

testFetch();
