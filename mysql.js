const mysql =require("mysql");

var pool =mysql.createPool({
    "user":"iudhyalves",
    "password":"123",
    "database":"inventario",
    "host":"localhost",
    "port":3306
});
exports.pool=pool;