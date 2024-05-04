const gamesRouter = require('express').Router();
const { 
    findAllGames, 
    findGameById, 
    createGame, 
    updateGame, 
    deleteGame, 
    checkEmptyFields, 
    checkIfCategoriesAvaliable, 
    checkIfUsersAreSafe,
    checkIsGameExists 
} = require('../middlewares/games');
const { 
    sendAllGames, 
    sendGameById, 
    sendCreatedGame, 
    sendUpdatedGame, 
    sendDeletedGame 
} = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get('/games/:id', findGameById, sendGameById);
gamesRouter.post('/games', findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields,   createGame, sendCreatedGame);
gamesRouter.put('/games/:id', findGameById, checkIsGameExists, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields,  updateGame, sendUpdatedGame);
gamesRouter.delete('/games/:id', findGameById, deleteGame, sendDeletedGame);

module.exports = gamesRouter;