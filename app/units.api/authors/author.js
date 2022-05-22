const mongoose = require('mongoose');
const format = require('date-fns/format');

const authorSchema = mongoose.Schema({
  fname: {
    type: String,
    required: [true, ['Please, add first name.']],
    maxlength: 50
  },
  lname: {
    type: String,
    required: [true, 'Please, add last name.'],
    maxlength: 50
  },
  dob: {
    type: Date,
    required: [true, ['Please, add dob.']]
  }

}, {
  timestamps: true
});

authorSchema.set('toObject', { virtuals: true });
authorSchema.set('toJSON', { virtuals: true });

authorSchema.virtual('dob_formatted').get(function() {
  return format(this.dob, 'MMMM d, yyyy')
});

module.exports = mongoose.model('Author', authorSchema);
