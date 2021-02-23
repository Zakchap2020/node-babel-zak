import mongoose, { Schema } from 'mongoose';
const { schema } = mongoose;

const model = new Schema({
  title: { type: String, required: true, unique: true },
  genre: { type: String },
  author: String,
});

export default mongoose.model('Books', model, 'books');
