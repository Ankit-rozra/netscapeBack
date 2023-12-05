const express = require('express');
const user = express.Router();

const {
  get,
  create,
  edit,
  deleteUser,
} = require('../../controller/user/user.controller');

user.get('/get', get); // http://localhost:5000/user/get

user.post('/create', create); // http://localhost:5000/user/create

user.put('/edit/:id', edit); // http://localhost:5000/user/edit/${id}

user.delete('/deleteUser/:id', deleteUser); // http://localhost:5000/user/deleteUser/${id}

module.exports = user;
