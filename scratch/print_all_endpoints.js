async function run() {
    try {
        const res = await fetch("http://192.168.0.128:8000/openapi.json");
        const schema = await res.json();
        
        console.log("All paths in openapi.json:");
        const paths = Object.keys(schema.paths || {});
        for (const p of paths) {
            console.log(`- ${p}: ${Object.keys(schema.paths[p]).join(", ")}`);
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
