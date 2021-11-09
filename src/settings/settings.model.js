import mongoose from 'mongoose';
import Constant from '../constant';
import LanguageConstant from '../languageConstant';
import countries from '../countries';
import {
  allowedCustomerFilterOptions,
  allowedFirstTimeInvoiceSendEvents,
  allowedInvoiceCurrencyForAutoSend,
  allowedInvoiceDateFormats,
  allowedPageSizes,
  autoSendInAllCountriesOption,
} from '../settingsConstants';

const { Schema } = mongoose;

const SettingsSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  templateId: {
    type: Number,
    ref: 'template',
    required: true,
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
  orders: {
    type: Schema.Types.Mixed,
    required: true,
  },
  invoiceMultiLangkeys: {
    invoice: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].invoice,
    },
    invoiceNumber: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].invoiceNumber,
    },
    description: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].description,
    },
    sku: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].sku,
    },
    barcode: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].barcode,
    },
    countryOfOrigin: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].countryOfOrigin,
    },
    hsCode: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].hsCode,
    },
    unitPrice: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].unitPrice,
    },
    finalUnitPrice: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].finalUnitPrice,
    },
    quantity: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].quantity,
    },
    total: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].total,
    },
    tax: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].tax,
    },
    signature: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].signature,
    },
    subtotal: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].subtotal,
    },
    discount: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].discount,
    },
    issueDate: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].issueDate,
    },
    shipping: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].shipping,
    },
    support: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].support,
    },
    company: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].company,
    },
    refunded: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].refunded,
    },
    netTotal: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].netTotal,
    },
    draftInvoiceHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode]
          .draftInvoiceHeading,
    },
    customerHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].customerHeading,
    },
    included: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].included,
    },
    excluded: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].excluded,
    },
    subtotalAfterDiscount: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode]
          .subtotalAfterDiscount,
    },
    including: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].including,
    },
    productPlusShipping: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode]
          .productPlusShipping,
    },
    paymentHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].paymentHeading,
    },
    cardType: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].cardType,
    },
    cardNumber: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].cardNumber,
    },
    tip: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].tip,
    },
    via: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].via,
    },
    orderNote: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].orderNote,
    },
    item: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].item,
    },
    items: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].items,
    },
    weight: {
      type: String,
      default: LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].weight,
    },
  },
  invoiceSettings: {
    issueDateFormat: {
      type: String,
      required: true,
      default: allowedInvoiceDateFormats[0],
      enum: allowedInvoiceDateFormats,
    },
    pageSize: {
      type: String,
      required: true,
      default: allowedPageSizes.a4,
      enum: [allowedPageSizes.a4, allowedPageSizes.letter],
    },
    sendRemainderAfterDays: {
      type: Number,
      required: false,
      enum: [5, 10, 15],
    },
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
        defaultValue: {
          type: String,
          required: true,
        },
      },
    ],
    sendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderSendInvoiceAutomaticFilter: {
      type: String,
      required: true,
      default: allowedCustomerFilterOptions.currency,
      enum: Object.values(allowedCustomerFilterOptions),
    },
    // send automatic to specified countries
    orderSendInvoiceAutomaticRegions: {
      type: [String],
      required: true,
      default: [autoSendInAllCountriesOption],
      enum: Object.keys(countries).concat(autoSendInAllCountriesOption),
      validate: [v => v.length > 0, 'Min 1 value is required'],
    },
    sendInvoiceAutomaticRegionInBillingAddress: {
      type: Boolean,
      required: true,
      default: true,
    },
    sendInvoiceAutomaticInCurrency: {
      type: String,
      required: true,
      default: allowedInvoiceCurrencyForAutoSend.all,
      enum: Object.values(allowedInvoiceCurrencyForAutoSend),
    },
    firstTimeSendInvoiceAutomaticEvent: {
      type: String,
      required: true,
      default() {
        return this.invoiceSettings.orderCreateSendInvoiceAutomatic
          ? allowedFirstTimeInvoiceSendEvents.created
          : allowedFirstTimeInvoiceSendEvents.paid;
      },
      enum: Object.values(allowedFirstTimeInvoiceSendEvents),
    },
    orderCreateSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderRefundSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderCancelSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderEditSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: true,
    },
    orderAddressChangeSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: false,
    },
    orderEmailChangeSendInvoiceAutomatic: {
      type: Boolean,
      required: true,
      default: false,
    },
    invoiceHeading: {
      type: String,
      required: true,
      default: Constant.INVOICE_DEFAULT.invoiceHeading,
    },
    defaultInvoiceHeading: {
      type: String,
      default: Constant.INVOICE_DEFAULT.invoiceHeading,
    },
    language: {
      code: {
        type: String,
        required: true,
        default: Constant.INVOICE_DEFAULT.languageCode,
      },
      name: {
        type: String,
        required: true,
        default: Constant.INVOICE_DEFAULT.languageName,
      },
      direction: {
        type: String,
        required: true,
        default: Constant.INVOICE_DEFAULT.languageDirection,
      },
    },
    generateInvoiceOn: {
      type: String,
      required: true,
      default: Constant.INVOICE_DEFAULT.generateInvoiceOn,
    },
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
    invoiceNumberFormat: {
      type: String,
      required: true,
      default: Constant.INVOICE_DEFAULT.invoiceNumberFormat,
    },
    prefix: {
      type: String,
      default: '#',
    },
    postfix: {
      type: String,
      default: null,
    },
    customInvoiceNumber: {
      type: String,
      default: null,
    },
    customInvoiceNumberUpdated: {
      type: Boolean,
      default: false,
    },
    isShowTax: {
      type: Boolean,
      required: true,
      default: true,
    },
    isShowCustomerVatNumber: {
      type: Boolean,
      default: false,
    },
    customerVatNumberLabel: {
      type: String,
      default: Constant.SETTING_DEFAULT.customerVatNumberLabel,
    },
    isShowDiscount: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShowFinalUnitPrice: {
      type: Boolean,
      required: true,
      default: true,
    },
    isShowLineItemSubtotal: {
      type: Boolean,
      required: true,
      default: true,
    },
    isShowSignature: {
      type: Boolean,
      required: true,
      default: false,
    },
    signature: {
      type: String,
      default: null,
    },
    showComputerGeneratedMsg: {
      type: Boolean,
      default: true,
    },
    isShowCurrencyCode: {
      type: Boolean,
      default: true,
    },
    isShowSku: {
      type: Boolean,
      default: false,
    },
    isShowBarcode: {
      type: Boolean,
      default: false,
    },
    isShowCountryOfOrigin: {
      type: Boolean,
      default: false,
    },
    isShowHSCode: {
      type: Boolean,
      default: false,
    },
    isShowProductImage: {
      type: Boolean,
      default: false,
    },
    isShowProductWeight: {
      type: Boolean,
      default: false,
    },
    isShowSubtotalAfterDiscount: {
      type: Boolean,
      default: true,
    },
    isShowIndividualTax: {
      type: Boolean,
      default: false,
    },
    isShowEmptyTaxInSummary: {
      type: Boolean,
      default: false,
    },
    isShowEmptyDiscountInSummary: {
      type: Boolean,
      default: false,
    },
    isShowEmptyShippingInSummary: {
      type: Boolean,
      default: false,
    },
    isShowEmptyTipInSummary: {
      type: Boolean,
      default: false,
    },
    isShowLast4DigitCardNumber: {
      type: Boolean,
      default: true,
    },
    isShowDeliveryMethod: {
      type: Boolean,
      default: false,
    },
    isShowTotalQuantity: {
      type: Boolean,
      default: false,
    },
  },
  billingDetails: {
    heading: {
      type: String,
      required: true,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].billingHeading,
    },
    defaultHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].billingHeading,
    },
    isShowPhone: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShowCountry: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShowEmail: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  shippingDetails: {
    isShowShippingAddress: {
      type: Boolean,
      required: true,
      default: true,
    },
    heading: {
      type: String,
      required: true,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].shippingHeading,
    },
    defaultHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].shippingHeading,
    },
    isShowPhone: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShowCountry: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShowEmail: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  companyDetails: {
    heading: {
      type: String,
      required: true,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].companyHeading,
    },
    defaultHeading: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].companyHeading,
    },
    legalNameForBusiness: {
      type: String,
      default: null,
    },
    taxName: {
      type: String,
      default: Constant.INVOICE_DEFAULT.taxName,
    },
    taxNumber: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    bulkEmail: {
      type: String,
      default: null,
    },
    brandName: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      default: null,
    },
    address: {
      address1: {
        type: String,
        default: null,
      },
      address2: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
      state: {
        type: String,
        default: null,
      },
      postcode: {
        type: String,
        default: null,
      },
      country: {
        type: String,
        default: null,
      },
    },
    additionalText: {
      type: String,
    },
  },
  footerDetails: {
    additionalText: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].additionalText,
    },
    defaultAdditionalText: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].additionalText,
    },
    thankYouNote: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].thankYouNote,
    },
    defaultThankYouNote: {
      type: String,
      default:
        LanguageConstant[Constant.INVOICE_DEFAULT.languageCode].thankYouNote,
    },
    isShowOrderNote: {
      type: Boolean,
      default: false,
    },
  },
  isReviewGiven: {
    type: Boolean,
    default: false,
  },
  stepReached: {
    type: Number,
    default: 0,
  },
  storeName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  isSetupCompleted: {
    type: Boolean,
    default: false,
  },
  isAppEnable: {
    type: Boolean,
    default: false,
  },
  storeCurrency: {
    type: String,
    required: true,
  },
  columnWidths: {
    name: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    taxPercent: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  pdfOption: {
    headerMargin: {
      type: Number,
      required: true,
    },
    footerMargin: {
      type: Number,
      required: true,
    },
  },
  appLanguage: {
    type: String,
    default: 'en',
    required: true,
  },
  languageSelected: {
    type: Boolean,
    default: false,
  },
  currentPlan: {
    type: String,
    default: null,
  },
  isYearlyPlanActivated: {
    type: Boolean,
    default: false,
  },
  isDashboardOpenedOnce: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('settings', SettingsSchema);
