const auth = require('express').Router();
const controller = require('../../controllers/auth');

auth.get('/token', controller.generateToken);

auth.delete('/token', controller.deleteToken);

module.exports = auth;
