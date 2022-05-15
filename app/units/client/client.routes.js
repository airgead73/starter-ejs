const { Router } = require('express');
const clientRouter = Router();

// controllers
const { dashboard } = require('./client.controller');

// routes
clientRouter.route('/').get(dashboard);

module.exports = clientRouter;
