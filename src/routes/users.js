const express = require('express');

const router = express.Router();

const UsersController = require('../controller/users.js');

//CREATE
router.post('/', UsersController.createNewUser);

//READ
router.get('/', UsersController.getAllUsers);

//UPDATE
router.put('/:id', UsersController.updateUser);

//DELETE
router.delete('/:id', UsersController.deleteUser);



module.exports = router;