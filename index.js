const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const path = require('path');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const connectToDataBase = require('./database/connect');
const app = express();

const PORT = 3000;
connectToDataBase();
app.use(
    cors, 
    bodyParser.json(), 
    express.static(path.join(__dirname, 'public')),
    gamesRouter,
    categoriesRouter,
    usersRouter
);
//app.use(express.static('public'));
//app.use(mainRoute);

app.listen(PORT, () => {
    console.log('Приложение запущено на порте ' + PORT);
});