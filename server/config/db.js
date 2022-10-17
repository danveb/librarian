const { Pool } = require("pg"); 
const dotenv = require("dotenv").config(); 

// Pool connection to allow multiple connection requests to server 
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER, 
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
}); 

console.log("PostgreSQL connected".cyan.underline); 

module.exports = pool;