const axios = require('axios');

async function testLookup(titleToFind) {
  const API_BASE_URL = "https://api.securxperts.com:8000/";
  let jobTitleId = null;

  try {
    console.log(`Step 1: Attempting to create job title: "${titleToFind}"`);
    const titleRes = await axios.post(`${API_BASE_URL}job-applications/job_title`, {
      job_title: titleToFind
    }, {
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true"
      }
    });
    jobTitleId = titleRes.data.id;
    console.log("Created successfully, ID is:", jobTitleId);
  } catch (err) {
    if (err.response && err.response.status === 400 && err.response.data.detail === "Job title already exists.") {
      console.log("Job title already exists. Step 2: Fetching list to find ID...");
      const listRes = await axios.get(`${API_BASE_URL}job-applications/`, {
        headers: { "ngrok-skip-browser-warning": "true" }
      });
      const list = listRes.data || [];
      const match = list.find(item => item.job_title && item.job_title.trim().toLowerCase() === titleToFind.trim().toLowerCase());
      if (match) {
        jobTitleId = match.id;
        console.log("Found existing job title, ID is:", jobTitleId);
      } else {
        console.log("Could not find matching job title in list.");
      }
    } else {
      console.error("Error creating job title:", err.response ? err.response.status : err.message);
    }
  }
}

testLookup("Backend Developer ");
