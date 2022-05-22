const { Router } = require('express');
const authorRouter = Router();

// controllers
const { create, read, detail, update, remove } = require('./authors.controller');

// middleware
const { validationRules, validate } = require('../../middleware');

// routes
authorRouter.route('/').get(read).post(validationRules('createAuthor'), validate, create);
authorRouter.route('/:id').get(detail).put(update).delete(remove);

// export
module.exports = authorRouter;