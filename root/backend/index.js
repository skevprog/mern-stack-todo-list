const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db')

dotenv.config({
  path: './config/config.env',
});

connectDB();

const todos = require('./routes');

const app = express();

app.use(express.json());

app.use('/api/v1/todos', todos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} mode on port ${PORT} `.yellow.bold));
