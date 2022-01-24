const express = require("express");
const apps= express();
///Setting
apps.set("port",process.env.PORT || 4500);

/// lo que requerimos del router
apps.use(express.json());
apps.use(require("../router/router.js"));
/// abrimos dicho puerto
apps.listen(apps.get("port"),()=>{
console.log("PUERTO CONECTADO : ",apps.get("port"));
})