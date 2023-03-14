
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
  projectname: { type: String },
  description: { type: String },
  howTOSetup: { type: String },
  DOCXUrl: { type: String },
  price: { type: Number },
  isVerfied: { type: Boolean },
  createdBy:
  {
    type: String,
    // type: mongoose.Types.ObjectId,
    ref: 'User',
    default: 'Vina',
    // required: [true, 'please provide user'],
  }
}
  , { timestamps: true });
  module.exports = mongoose.model('Project', projectSchema);