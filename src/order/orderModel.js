import mongoose from 'mongoose';
import Constant from '../constant';

const { Schema } = mongoose;

const OrderSchema = new Schema({
  storeName: {
    type: String,
    required: true,
    index: true,
  },
  order: {
    type: Schema.Types.Mixed,
    required: true,
  },
  customOrderNumber: {
    type: String,
    default: null,
  },
  mailSentStatus: {
    type: String,
    default: Constant.INVOICE_DEFAULT.mailSentStatus,
  },
  isPDFCreated: {
    type: Boolean,
    default: false,
  },
  templateId: {
    type: Number,
    default: null,
  },
  colorProperties: [
    {
      propertyName: {
        type: String,
        required: true,
      },
      defaultValue: {
        type: String,
        required: true,
      },
    },
  ],
  pdfOption: {
    headerMargin: {
      type: Number,
      default: 0,
    },
    footerMargin: {
      type: Number,
      default: 0,
    },
  },
  remainderMailSentOn: {
    // date when remainder mail is sent
    type: Date,
    required: false,
    default: null,
  },
  firstTimeMailSentOn: {
    type: Date,
    required: false,
    default: null,
  },
});

export default mongoose.model('orders', OrderSchema);
