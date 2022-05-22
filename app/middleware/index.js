const handleError = require('./handleError');
const { validationRules, validate }= require('./handleValidation');
const checkAuthClient = require('./handleAuth');

module.exports = {
  checkAuthClient,
  handleError,
  validationRules,
  validate
}