import { createPool } from '@vercel/postgres';
const { Pool } = require("pg");

const pool = new Pool ({
    connectionString: process.env.medicinalherbs_URL + "?sslmode=require",
});

pool.connect((err) => {
    if (err){
        throw err
        console.log('Connect to PostgreSQL successfully!!!!');
    }
});


module.exports = pool;

/**
 *  "user": "lorna",
    "password": "root",
    "host": "localhost",
    "port": 5432,
    "database": "herbs"
 */