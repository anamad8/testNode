const express = require("express"); 
const users = express.Router();
const controller = require("../controllers/usersController");

users.get('/', controller.getUser);
users.post('/', controller.createUser);
users.get('/:id', controller.getByIdUser);
users.put('/:id',controller.updateUser);
users.delete('/:id',controller.deleteUser);


module.exports=users;