const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: '743811elf',
  host: 'localhost',
  port: 5432,
  database: 'amo_test'
});

module.exports = pool;
