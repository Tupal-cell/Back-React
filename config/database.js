const {createPool} = require("mysql");
const pool = createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "back",
    connectionLimit: 5,
});

module.exports = pool;