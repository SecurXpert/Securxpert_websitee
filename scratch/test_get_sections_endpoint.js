async function run() {
    try {
        const guestEmail = "guest_visitor_securxpert@gmail.com";
        const guestPassword = "VisitorPass123";

        const loginRes = await fetch('http://192.168.0.128:8000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: guestEmail, password: guestPassword })
        });
        const loginData = await loginRes.json();
        const token = loginData?.access_token;
        if (!token) return;

        const blogId = 17; // We know this blog has sections (ID 15 & 16)
        console.log(`Testing GET /blogs/${blogId}/sections...`);
        const res = await fetch(`http://192.168.0.128:8000/blogs/${blogId}/sections`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        console.log("Status:", res.status);
        if (res.ok) {
            const data = await res.json();
            console.log("Response:", JSON.stringify(data, null, 2));
        } else {
            console.log("Error body:", await res.text());
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
