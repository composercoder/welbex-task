const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: '1234567',
  host: 'localhost',
  port: 5432,
  database: 'running_events'
});

module.exports = pool;
