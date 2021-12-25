const pg = require("pg");

const db = new pg.Client({
  host: "castor.db.elephantsql.com",
  user: "xuncjmgx",
  database: "xuncjmgx",
  password: "3qp7YSepZurnOR3h5aVLf03De-0t51CC",
  port: 5432,
  connectionString:
    "postgres://xuncjmgx:3qp7YSepZurnOR3h5aVLf03De-0t51CC@castor.db.elephantsql.com/xuncjmgx",
});

module.exports = db;
