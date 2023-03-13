const projectSchema = new mongoose.Schema({
    projectname: { type: String, required: true },
    description: { type: String, required: true },
    DOCXUrl: { type: String },
    thumbnail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    },
    projectImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Image'
    },
    rating: { type: Number },
    price: { type: Number, required: true },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide user'],
    }
  }, { timestamps: true });
  
  const imgSchema = new mongoose.Schema({
    name: String,
    img: {
      data: Buffer,
      contentType: String,
    },
  });
  
  const Image = mongoose.model('Image', imgSchema);