const Airtable = require('airtable');

const baseId = process.env.AIRTABLE_BASE_ID;
const apiKey = process.env.AIRTABLE_API_KEY;
const tableName = process.env.AIRTABLE_TABLE_NAME;

const base = new Airtable({apiKey}).base(baseId);
const table = base(tableName);

module.exports = { table };