async function run() {
    try {
        const res = await fetch("http://192.168.0.141:8000/openapi.json");
        const schema = await res.json();

        console.log("All schemas in components.schemas:");
        const schemas = schema.components?.schemas || {};
        for (const name of Object.keys(schemas)) {
            console.log(`- ${name}`);
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
