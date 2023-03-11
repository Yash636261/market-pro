const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  description: { type: String, required: true },
  DOCXUrl: { type: String },
  imageUrl: { type: String },
  videoUrl: { type: String },
  rating: { type: Number },
  price: { type: Number, required: true },
  createdBy:
    {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'please provide user'],
    }
}
,{timestamps:true});


const Project = mongoose.model('Project', projectSchema);


module.exports = Project;
