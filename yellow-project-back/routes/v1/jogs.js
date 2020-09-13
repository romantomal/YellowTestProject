const jogs = require('express').Router();
const controller = require('../../controllers/jogs');

jogs.get('', controller.getJogs);

jogs.post('', controller.addJog);

module.exports = jogs;
