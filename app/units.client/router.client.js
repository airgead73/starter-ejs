const { Router } = require('express');
const clientRouter = Router();
const { homeRouter } = require('./home');
const { authorRouter } = require('./authors');

// middleware 
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

clientRouter.use('/', homeRouter);
clientRouter.use('/authors', authorRouter);


module.exports = clientRouter;