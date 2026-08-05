const axios = require('axios');
const FormData = require('form-data');

async function testFlow() {
  const API_BASE_URL = "https://api.securxperts.com:8000/";
  
  try {
    // Step 1: Login as guest superadmin to fetch jobs
    const loginRes = await axios.post(`${API_BASE_URL}auth/login`, {
      email: "guest_superadmin_securxpert@gmail.com",
      password: "VisitorPass123"
    }, { headers: { "ngrok-skip-browser-warning": "true" } });
    const token = loginRes.data.access_token;
    
    // Step 2: Fetch jobs
    const jobsRes = await axios.get(`${API_BASE_URL}jobs/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true"
      }
    });
    
    const jobs = jobsRes.data || [];
    if (jobs.length === 0) {
      console.log("No jobs found in the database. Please create a job posting first.");
      return;
    }
    
    const targetJob = jobs[0];
    console.log(`Using Job Posting - ID: ${targetJob.id}, Title: "${targetJob.job_title}"`);
    
    // Step 3: Call POST /job-applications/job_title
    try {
      console.log(`Ensuring JobTitle "${targetJob.job_title}" exists...`);
      const titleRes = await axios.post(`${API_BASE_URL}job-applications/job_title`, {
        job_title: targetJob.job_title
      }, {
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true"
        }
      });
      console.log("JobTitle created:", titleRes.data);
    } catch (err) {
      if (err.response && err.response.status === 400 && err.response.data.detail === "Job title already exists.") {
        console.log("JobTitle already exists (this is good).");
      } else {
        throw err;
      }
    }
    
    // Step 4: Submit application using the Job Posting ID
    const payload = new FormData();
    payload.append("candidate_name", "Test Candidate");
    payload.append("enter_email", "test@securxperts.com");
    payload.append("country_code", "+91");
    payload.append("phone_number", "9876543210");
    payload.append("total_experience", 2);
    payload.append("relevant_experience", 1);
    payload.append("current_location", "Hyderabad");
    payload.append("current_ctc", 5.0);
    payload.append("expected_ctc", 6.0);
    payload.append("linkedin_profile_url", "https://linkedin.com");
    payload.append("technical_proficiency", "JavaScript");
    payload.append("job_id", targetJob.id); // <-- Using the Job Posting ID!
    
    payload.append("upload_your_latest_resume", Buffer.from("dummy resume content"), {
      filename: 'resume.pdf',
      contentType: 'application/pdf'
    });

    const res = await axios.post(`${API_BASE_URL}job-applications/`, payload, {
      headers: {
        ...payload.getHeaders(),
        "ngrok-skip-browser-warning": "true"
      }
    });
    console.log("Application Submission Success:", res.status, res.data);
    
  } catch (err) {
    if (err.response) {
      console.log("Error status:", err.response.status);
      console.log("Error data:", JSON.stringify(err.response.data, null, 2));
    } else {
      console.error("Error:", err.message);
    }
  }
}

testFlow();
