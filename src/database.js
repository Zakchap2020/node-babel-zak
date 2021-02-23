import mongoose from 'mongoose';

const opts = { useNewUrlParser: true, useUnifiedTopology: true };
export const connect = () => {
  mongoose.connect('mongodb://localhost:27017/bookAPI', opts, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Connected to MongoDB');
  });
};

export const disconnect = () => {
  mongoose.disconnect();
};
