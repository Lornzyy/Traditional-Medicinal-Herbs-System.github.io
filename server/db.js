const { Pool } = require("pg");

const pool = new Pool ({
    "user": "lorna",
    "password": "root",
    "host": "localhost",
    "port": 5432,
    "database": "herbs"
});


module.exports = pool;

/**
 *  "user": "lorna",
    "password": "root",
    "host": "localhost",
    "port": 5432,
    "database": "herbs"
 */