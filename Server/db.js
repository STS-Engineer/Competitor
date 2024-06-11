const { Pool } = require('pg');

const pool = new Pool({
  user: 'sts',
  host: 'avo-adb-001.postgres.database.azure.com',
  database: 'web_app_competitor',
  password: 'qLvgoADHq58GdFuK',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
