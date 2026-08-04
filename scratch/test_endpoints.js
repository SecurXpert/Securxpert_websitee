const fetch = require('node-fetch'); // Wait, Node.js 18+ has global fetch, so we can just use fetch directly!
async function test() {
  const API_BASE_URL = "https://poise-crouch-plating.ngrok-free.dev";
  const headers = {
    "ngrok-skip-browser-warning": "true"
  };

  try {
    console.log("Fetching /dashboard/analytics...");
    const res = await fetch(`${API_BASE_URL}/dashboard/analytics`, { headers });
    console.log("Analytics status:", res.status);
    const json = await res.json();
    console.log("Analytics response:", JSON.stringify(json, null, 2));
  } catch (err) {
    console.error("Analytics failed:", err.message);
  }

  try {
    console.log("\nFetching /jobs/...");
    const res = await fetch(`${API_BASE_URL}/jobs/`, { headers });
    console.log("Jobs status:", res.status);
    const json = await res.json();
    console.log("Jobs count:", Array.isArray(json) ? json.length : (json.data ? json.data.length : "not an array"));
    console.log("Jobs preview:", JSON.stringify(json, null, 2).substring(0, 500));
  } catch (err) {
    console.error("Jobs failed:", err.message);
  }
}
test();
