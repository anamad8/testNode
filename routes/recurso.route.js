const express = require("express"); 
const recurso = express.Router();
const controller = require("../controllers/recursosControllers");

recurso .get('/', controller.getRecursos);
recurso .post('/', controller.createRecursos);
recurso .get('/:id', controller.getByIdRecursos);
recurso .put('/:id',controller.updateRecursos);
recurso .delete('/:id',controller.deleteRecursos);


module.exports=recurso;