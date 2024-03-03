// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BunnyDatabase',
  password: 'Banu',
  port: 6902,
});

module.exports = pool;
