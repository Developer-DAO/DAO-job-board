const openapiTS = require("openapi-typescript").default;
const fetch = require('node-fetch');
const fs = require('fs')
require('dotenv').config();

async function main() {
    const url = process.env.SUPABASE_URL + '/rest/v1/?apikey=' + process.env.SUPABASE_PUBLIC_KEY ;
    const result = await fetch(url);

    if (!result.ok) throw new Error(result.status);

    const json = await result.json();

    fs.writeFileSync('./temp.json', JSON.stringify(json));

    const output = await openapiTS('./temp.json');

    fs.unlinkSync('./temp.json');
    fs.writeFileSync('./types/supabase.ts', output);
}

main();
