const usersRouter = require('express').Router();
const { 
    findAllUsers, 
    findUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    checkEmptyNameAndEmail,
    checkEmptyNameAndEmailAndPass,
    checkIsUserExists 
} = require('../middlewares/users');
const { 
    sendAllUsers, 
    sendUserById, 
    sendCreatedUser, 
    sendUpdatedUser, 
    sendDeletedUser 
} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPass,  createUser, sendCreatedUser);
usersRouter.put('/users/:id', findUserById, checkIsUserExists, checkEmptyNameAndEmail, updateUser, sendUpdatedUser);
usersRouter.delete('/users/:id', findUserById, deleteUser, sendDeletedUser);

module.exports = usersRouter;