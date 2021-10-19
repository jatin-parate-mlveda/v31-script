import mongoose from 'mongoose';

const { Schema } = mongoose;

const ShopKeysSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  created_at: {
    type: Schema.Types.Mixed,
  },
  accessToken: {
    type: String,
  },
  updatedAt: {
    type: Schema.Types.Mixed,
  },
});

export default mongoose.model('shopkeys', ShopKeysSchema);
