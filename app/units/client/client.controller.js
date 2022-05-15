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
      title: 'starter'
    });
});