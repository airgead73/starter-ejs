const { Router } = require('express');
const clientRouter = Router();
const { homeRouter } = require('./home');
const { authorRouter } = require('./authors');
const { bookRouter } = require('./books');

// middleware 
const { checkAuthClient } = require('../middleware');
clientRouter.use(checkAuthClient);

clientRouter.use('/', homeRouter);
clientRouter.use('/authors', authorRouter);
clientRouter.use('/books', bookRouter);

// export
module.exports = clientRouter;