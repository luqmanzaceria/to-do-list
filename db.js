const Pool = require("pg").Pool;

const pool = newPool({
    user: "postgres",
    password: "surah315172004",
    host:"localhost",
    database: "todolist",
    port: 5432
});

module.exports = pool;