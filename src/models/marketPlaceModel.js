import mongoose, { Schema } from 'mongoose';
const { schema } = mongoose;

const model = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  owner: String,
  admins: String,
});

export default mongoose.model('Marketplaces', model, 'marketplaces');
