const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  founded: Date,
  employees: Number,
  active: Boolean,
  products: [String],
  CEO: {
    name: String,
    age: Number,
  },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;