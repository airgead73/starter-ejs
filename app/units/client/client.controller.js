const asyncHandler = require('express-async-handler');
const { isDev } = require('../../config/env');

/**
 * @desc dashboard view
 * @route GET - /
 * @access Private
 * */

exports.dashboard = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/dashboard', {
      title: 'starter',
      development: isDev
    });
});

/**
 * @desc author dashboard view
 * @route GET - /authors
 * @access Private
 * */

 exports.dashboardAuthors = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/dashboard', {
      title: 'authors',
      development: isDev
    });
});

/**
 * @desc author add view
 * @route GET - /authors/add
 * @access Private
 * */

 exports.addAuthor = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/add', {
      title: 'add author',
      development: isDev
    });
});

/**
 * @desc author detail view
 * @route GET - /authors/:id
 * @access Private
 * */

 exports.detailAuthor = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/detail', {
      title: 'author detail',
      development: isDev
    });
});

/**
 * @desc author update view
 * @route GET - /authors/:id/update
 * @access Private
 * */

 exports.updateAuthor = asyncHandler(async (req, res, next) => {
  return res
    .status(200)
    .render('pages/authors/update', {
      title: 'authors',
      development: isDev
    });
});