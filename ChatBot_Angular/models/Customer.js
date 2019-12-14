let mongoose = require('mongoose');

let BookSchema = new mongoose.Schema({
  answer: String,
  updatedDate: {type: Date, default: Date.now},
});
/**
 * @class Customer
 * @typeof Model<BookSchema>
 */
const Customer = mongoose.model('userdata',BookSchema);
module.exports = Customer;
