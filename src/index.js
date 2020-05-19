const express = require('express');
const app = express();
const modelRouter = require('./routes');

app.use('/', modelRouter);

app.listen('3000');