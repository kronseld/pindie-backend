const user = require('../models/user');

const findAllUsers = async (req, rew, next) => {
    req.usersArray = await user.find({});
    next();
}

module.exports = findAllUsers;