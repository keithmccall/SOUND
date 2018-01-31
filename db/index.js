// Setup for pg promise
const pgp = require('pg-promise')();

// configuration object
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'sounds_users',
    user: 'keithmccall'
};

const db = pgp(process.env.DATABASE_URL || cn);

module.exports = db;