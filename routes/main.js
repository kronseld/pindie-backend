const mainRoute = require('express').Router();
const getHtml = require('../controllers/main');

mainRoute.get('/', getHtml)

module.exports = mainRoute;