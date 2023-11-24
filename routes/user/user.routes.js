const express = require('express');
const user = express.Router();

const {
  create,   
  findAll,
  findbyID,
} = require('../../controller/user/user.controller');

user.post('/create', create); // http://localhost:5000/user/create

user.get('/findall', findAll); // http://localhost:5000/contact/findall

user.get('/findone/:_id', findbyID); // http://localhost:5000/contact/findbyID/:_id

module.exports = user;
