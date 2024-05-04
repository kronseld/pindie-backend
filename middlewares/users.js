const user = require('../models/user');

const findAllUsers = async (req, res, next) => {
    req.usersArray = await user.find({});
    next();
}

const findUserById = async (req, res, next) => {
    try {
        req.user = await user.findById(req.params.id);
        next();
    } catch(error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Пользователь не найден" }));
    }
};

const createUser = async (req, res, next) => {
    try {
        console.log('POST /users');
        req.user = user.create(req.body);
        next();
    } catch(error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send(JSON.stringify({ message: 'Ошибка при добавлении нового пользователя' }));
    }
};

const updateUser = async (req, res, next) => {
    try {
        req.user = await user.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch(error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send(JSON.stringify({ message: 'Ошибка обновления данных пользователя' }));        
    }
};

const deleteUser = async (req, res, next) => {
    try {
        req.user = await user.findByIdAndDelete(req.params.id);
    } catch(error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send(JSON.stringify({ message: 'Ошибка удаления данных пользователя' }));           
    }
};

const checkEmptyNameAndEmail = async (req, res, next) => {
    if (
      !req.body.username ||
      !req.body.email
    ) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Заполните поля логин и email" }));
    } else {
      next();
    }
  };

  const checkEmptyNameAndEmailAndPass = async (req, res, next) => {
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.password
    ) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Заполните поля логин и email" }));
    } else {
      next();
    }
  };

  const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
      return req.body.name === user.name;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Пользователь с таким именем уже существует!" }));
    } else {
      next();
    }
};

module.exports = { 
    findAllUsers, 
    findUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    checkEmptyNameAndEmail,
    checkEmptyNameAndEmailAndPass,
    checkIsUserExists
};