const mongoose = require('mongoose');
const categorySchema = require('./category');
const userSchema = require('./user');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: userSchema
  }],
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: categorySchema
  }]
});

module.exports = mongoose.model('game', gameSchema);
