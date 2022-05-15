const { Router } = require('express');
const clientRouter = Router();

// controllers
const { dashboard } = require('./client.controller');

// middleware
const { checkAuthClient } = require('../../middleware');

// routes
clientRouter.route('/').get(checkAuthClient, dashboard);

module.exports = clientRouter;
