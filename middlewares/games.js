const game =  require('../models/game');

const findAllGames = async (req, res, next) => {
    req.gamesArray = await game.find({}).populate("categories").populate("users");
    next();
  };
  
  module.exports = findAllGames; 