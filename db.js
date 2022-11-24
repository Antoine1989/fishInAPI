const Pool = require ('pg').Pool;
const pool = new Pool ({
    user: "postgres",
    host:"localhost",
    database:"postgres",
    password:"14012021_Nosabe",
    port: 5432
});

module.exports=pool;