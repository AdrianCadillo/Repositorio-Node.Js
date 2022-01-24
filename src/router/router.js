const express = require("express");
const basedatos = require("../config/conexion.js");
const rutaApp = express.Router();

/// mostramos los libros a visualizar
rutaApp.get('/',(req,res)=>{
basedatos.query("SELECT *FROM productos",function(error,results,fields){
if(error){
throw error;    
}else{
res.json(results);
}
});
});
module.exports=rutaApp;

 