const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./config/db').connection;

app.use(express.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(cookieParser());

const userRouter = require('./routes/user/user.routes');
app.use('/user', userRouter);

module.exports = { app };
