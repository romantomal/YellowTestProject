const v1 = require('express').Router();
const auth = require('./auth');
const jogs = require('./jogs');

/* GET users listing. */
v1.use('/auth', auth);
v1.use('/jogs', jogs);

module.exports = v1;
