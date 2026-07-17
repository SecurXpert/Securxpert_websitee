const fs = require('fs');
const spec = JSON.parse(fs.readFileSync('scratch/openapi.json', 'utf8'));
console.log("All API paths:");
console.log(Object.keys(spec.paths));
