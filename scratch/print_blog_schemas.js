const fs = require('fs');
const spec = JSON.parse(fs.readFileSync('scratch/openapi.json', 'utf8'));

const schema1 = spec.components.schemas['Body_create_hero_section_blogs__blog_id__hero_post'];
console.log("POST request body schema:");
console.log(JSON.stringify(schema1, null, 2));

const schema2 = spec.components.schemas['Body_update_hero_section_blogs__blog_id__hero_patch'];
console.log("PATCH request body schema:");
console.log(JSON.stringify(schema2, null, 2));
