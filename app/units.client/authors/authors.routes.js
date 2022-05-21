const { Router } = require('express');
const authorRouter = Router();

// controllers
const { dashboard, add, detail, update } = require('./authors.controller');

//routes
authorRouter.route('/').get(dashboard);
authorRouter.route('/add').get(add);
authorRouter.route('/:id').get(detail);
authorRouter.route('/:id/update').get(update);

// export
module.exports = authorRouter;
