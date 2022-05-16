const { Router } = require('express');
const clientRouter = Router();

// controllers
const { dashboard, dashboardAuthors, addAuthor, detailAuthor, updateAuthor } = require('./client.controller');

// middleware
const { checkAuthClient } = require('../../middleware');
clientRouter.use(checkAuthClient);

// routes
clientRouter.route('/').get(dashboard);
clientRouter.route('/authors').get(dashboardAuthors);
clientRouter.route('/authors/add').get(addAuthor);
clientRouter.route('/authors/:id').get(detailAuthor);
clientRouter.route('/authors/:id/update').get(updateAuthor);

module.exports = clientRouter;
