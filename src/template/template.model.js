import mongoose from 'mongoose';
import Counter from './counter.model';

const { Schema } = mongoose;

function arrayLimit(val) {
  return val.length === 7;
}

const TemplateSchema = new Schema({
  templateId: {
    type: Number,
    unique: true,
    index: true,
  },
  cssHTML: {
    type: String,
    required: true,
  },
  headerHTML: {
    type: String,
    required: true,
  },
  bodyHTML: {
    type: String,
    required: true,
  },
  footerHTML: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  invoiceSettings: {
    colorProperties: [
      {
        propertyDisplayName: {
          type: Schema.Types.Mixed,
          required: true,
        },
        propertyName: {
          type: String,
          required: true,
        },
        defaultColors: {
          type: [String],
          validate: [arrayLimit, '{PATH} length should be 7'],
        },
        defaultValue: {
          type: String,
          required: true,
        },
      },
    ],
    headingFont: {
      value: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
    textFont: {
      value: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
  },
  pdfOption: {
    headerMargin: {
      type: Number,
      required: true,
      default: 0,
    },
    footerMargin: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});

TemplateSchema.pre('save', function beforeSave(next) {
  const doc = this;
  Counter.findByIdAndUpdate(
    { _id: 'templateId' },
    { $inc: { seq: 1 } },
    { upsert: true, new: true },
    // eslint-disable-next-line consistent-return
    (error, counter) => {
      if (error) return next(error);
      doc.templateId = counter.seq;
      next();
    },
  );
});

export default mongoose.model('template', TemplateSchema);
