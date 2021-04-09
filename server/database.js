const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '27012010',
    database: 'todo',
    port: 5432,
});



module.exports = {
    query: function(sql, params){
        return pool.query(sql, params);
    }
};