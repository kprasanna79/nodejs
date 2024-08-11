const express = require('express');
const courses = require('./routes/courses')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/', courses);
app.use(cors());

module.exports = app;

