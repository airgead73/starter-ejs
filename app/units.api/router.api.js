const { Router } = require('express');
const apiRouter = Router();
const { authorRouter } = require('./authors');

// middleware 
const { checkAuthClient } = require('../middleware');
apiRouter.use(checkAuthClient);

// routes
apiRouter.use('/authors', authorRouter);

// export
module.exports = apiRouter;