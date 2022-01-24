const conexion = require("mysql");
var conectorMysql=conexion.createConnection({
host:"localhost",
port:"3306",
user:"root",
password:"software24",
database:"botica_sistema"
});
module.exports=conectorMysql;
 
 