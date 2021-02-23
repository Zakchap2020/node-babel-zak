import mongoose, { disconnect } from 'mongoose';

export const connect = () => {
  mongoose.connect('mongodb://localhost:27017/bookAPI', {}, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Connected to MongoDB');
  });
};

export const disconnect = () => {
  mongoose.disconnect();
};
