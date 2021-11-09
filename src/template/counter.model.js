import mongoose from 'mongoose';

const { Schema } = mongoose;

const CountersSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model('counters', CountersSchema);
