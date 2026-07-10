const axios = require("axios");

async function run() {
    try {
        const resLogin = await axios.post('http://192.168.0.147:8000/auth/login', {
            email: "guest_visitor_securxpert@gmail.com",
            password: "VisitorPass123"
        });
        const token = resLogin.data.access_token;
        
        const resJobs = await axios.get('http://192.168.0.147:8000/jobs/', {
            headers: { Authorization: `Bearer ${token}` }
        });
        const jobs = Array.isArray(resJobs.data) ? resJobs.data : (resJobs.data.data || []);
        if (jobs.length === 0) {
            console.log("No jobs found");
            return;
        }
        const jobId = jobs[0].id;
        
        const resJob = await axios.get(`http://192.168.0.147:8000/jobs/${jobId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("GET /jobs/{id} response:", JSON.stringify(resJob.data, null, 2));
    } catch (e) {
        console.error("Error:", e.message);
    }
}
run();
