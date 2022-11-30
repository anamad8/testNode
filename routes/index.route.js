const mysqlUsersRouter= require("./user.route");
const mysqlRecursosRouter= require("./recurso.route");

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/users',mysqlUsersRouter);
indexRoutes.use('/recursos',mysqlRecursosRouter);

module.exports=indexRoutes;