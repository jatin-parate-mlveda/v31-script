module.exports = {
  EMAIL_CASES: {
    newOrder: 'newOrder',
    cancelledOrder: 'cancelledOrder',
    other: 'other',
    draft: 'draft',
    remainderSend: 'remainder',
  },
  INVOICE_DEFAULT: {
    invoiceHeading: 'INVOICE',
    invoiceNumberFormat: 'same_as_order_number',
    companyHeading: 'Company Details',
    billingHeading: 'Billing Details',
    shippingHeading: 'Shipping Details',
    thankYouNote: 'Thank you for your purchase.',
    additionalText:
      '<p><strong>Terms:</strong></p>\n<ul>\n  <li>This is a computer generated invoice and does not require signature</li>\n  <li>For warranty and returns related information, please contact our customer support.</li>\n</ul>',
    headingFont: 'Arial Black',
    textFont: 'Arial Black',
    mailSentStatus: 'Draft',
    languageCode: 'en',
    languageName: 'English',
    languageDirection: 'ltr',
    generateInvoiceOn: 'presentment_money',
    taxName: 'GST',
  },
  EMAIL_DEFAULT: {
    FORMAT:
      'Dear {{ client.first_name }},\n\nPlease find the attached invoice for your order {{ number }}.\n\nPlease contact us for further support.\n\nThank you again for your order.\n\nWe hope you enjoyed shopping with us.\n\nBest regards,\n{{ account.name }}',
    SUBJECT: 'Invoice {{ number }} from {{ account.name }}',
  },
  SETTING_DEFAULT: {
    customerVatNumberLabel: 'VAT:',
  },
  CURRENCY_FORMAT: {
    USD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} USD',
    },
    EUR: {
      money_format: '€{{amount}}',
      money_with_currency_format: '€{{amount}} EUR',
    },
    GBP: {
      money_format: '£{{amount}}',
      money_with_currency_format: '£{{amount}} GBP',
    },
    CAD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} CAD',
    },
    ALL: {
      money_format: 'Lek {{amount}}',
      money_with_currency_format: 'Lek {{amount}} ALL',
    },
    DZD: {
      money_format: 'DA {{amount}}',
      money_with_currency_format: 'DA {{amount}} DZD',
    },
    AOA: {
      money_format: 'Kz{{amount}}',
      money_with_currency_format: 'Kz{{amount}} AOA',
    },
    ARS: {
      money_format: '${{amount_with_comma_separator}}',
      money_with_currency_format: '${{amount_with_comma_separator}} ARS',
    },
    AMD: {
      money_format: '{{amount}} AMD',
      money_with_currency_format: '{{amount}} AMD',
    },
    AWG: {
      money_format: 'Afl{{amount}}',
      money_with_currency_format: 'Afl{{amount}} AWG',
    },
    AUD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} AUD',
    },
    BBD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} Bds',
    },
    AZN: {
      money_format: 'm.{{amount}}',
      money_with_currency_format: 'm.{{amount}} AZN',
    },
    BDT: {
      money_format: 'Tk {{amount}}',
      money_with_currency_format: 'Tk {{amount}} BDT',
    },
    BSD: {
      money_format: 'BS${{amount}}',
      money_with_currency_format: 'BS${{amount}} BSD',
    },
    BHD: {
      money_format: '{{amount}}0 BD',
      money_with_currency_format: '{{amount}}0 BHD',
    },
    BYR: {
      money_format: 'Br {{amount}}',
      money_with_currency_format: 'Br {{amount}} BYR',
    },
    BZD: {
      money_format: 'BZ${{amount}}',
      money_with_currency_format: 'BZ${{amount}} BZD',
    },
    BTN: {
      money_format: 'Nu {{amount}}',
      money_with_currency_format: 'Nu {{amount}} BTN',
    },
    BAM: {
      money_format: 'KM {{amount_with_comma_separator}}',
      money_with_currency_format: 'KM {{amount_with_comma_separator}} BAM',
    },
    BRL: {
      money_format: 'R$ {{amount_with_comma_separator}}',
      money_with_currency_format: 'R$ {{amount_with_comma_separator}} BRL',
    },
    BOB: {
      money_format: 'Bs{{amount_with_comma_separator}}',
      money_with_currency_format: 'Bs{{amount_with_comma_separator}} BOB',
    },
    BWP: {
      money_format: 'P{{amount}}',
      money_with_currency_format: 'P{{amount}} BWP',
    },
    BND: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} BND',
    },
    BGN: {
      money_format: '{{amount}} лв',
      money_with_currency_format: '{{amount}} лв BGN',
    },
    HTG: {
      money_format: 'G{{amount}}',
      money_with_currency_format: 'G{{amount}} HTG',
    },
    MMK: {
      money_format: 'K{{amount}}',
      money_with_currency_format: 'K{{amount}} MMK',
    },
    KHR: {
      money_format: 'KHR{{amount}}',
      money_with_currency_format: 'KHR{{amount}}',
    },
    KYD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} KYD',
    },
    XAF: {
      money_format: 'FCFA{{amount}}',
      money_with_currency_format: 'FCFA{{amount}} XAF',
    },
    CLP: {
      money_format: '${{amount_no_decimals}}',
      money_with_currency_format: '${{amount_no_decimals}} CLP',
    },
    CNY: {
      money_format: '¥{{amount}}',
      money_with_currency_format: '¥{{amount}} CNY',
    },
    COP: {
      money_format: '${{amount_with_comma_separator}}',
      money_with_currency_format: '${{amount_with_comma_separator}} COP',
    },
    CRC: {
      money_format: '₡ {{amount_with_comma_separator}}',
      money_with_currency_format: '₡ {{amount_with_comma_separator}} CRC',
    },
    HRK: {
      money_format: '{{amount_with_comma_separator}} kn',
      money_with_currency_format: '{{amount_with_comma_separator}} kn HRK',
    },
    CZK: {
      money_format: '{{amount_with_comma_separator}} Kč',
      money_with_currency_format: '{{amount_with_comma_separator}} Kč',
    },
    DKK: {
      money_format: 'kr.{{amount_with_comma_separator}}',
      money_with_currency_format: 'kr.{{amount_with_comma_separator}} DKK',
    },
    DOP: {
      money_format: 'RD$ {{amount_with_comma_separator}}',
      money_with_currency_format: 'RD$ {{amount_with_comma_separator}}',
    },
    XCD: {
      money_format: '${{amount}}',
      money_with_currency_format: 'EC${{amount}}',
    },
    EGP: {
      money_format: 'LE {{amount}}',
      money_with_currency_format: 'LE {{amount}} EGP',
    },
    ETB: {
      money_format: 'Br{{amount}}',
      money_with_currency_format: 'Br{{amount}} ETB',
    },
    XPF: {
      money_format: '{{amount_no_decimals_with_comma_separator}} XPF',
      money_with_currency_format:
        '{{amount_no_decimals_with_comma_separator}} XPF',
    },
    FJD: {
      money_format: '${{amount}}',
      money_with_currency_format: 'FJ${{amount}}',
    },
    GMD: {
      money_format: 'D {{amount}}',
      money_with_currency_format: 'D {{amount}} GMD',
    },
    GHS: {
      money_format: 'GH₵{{amount}}',
      money_with_currency_format: 'GH₵{{amount}}',
    },
    GTQ: {
      money_format: 'Q{{amount}}',
      money_with_currency_format: '{{amount}} GTQ',
    },
    GYD: {
      money_format: 'G${{amount}}',
      money_with_currency_format: '${{amount}} GYD',
    },
    GEL: {
      money_format: '{{amount}} GEL',
      money_with_currency_format: '{{amount}} GEL',
    },
    HNL: {
      money_format: 'L {{amount}}',
      money_with_currency_format: 'L {{amount}} HNL',
    },
    HKD: {
      money_format: '${{amount}}',
      money_with_currency_format: 'HK${{amount}}',
    },
    HUF: {
      money_format: '{{amount_no_decimals_with_comma_separator}}',
      money_with_currency_format:
        '{{amount_no_decimals_with_comma_separator}} Ft',
    },
    ISK: {
      money_format: '{{amount_no_decimals}} kr',
      money_with_currency_format: '{{amount_no_decimals}} kr ISK',
    },
    INR: {
      money_format: '₹ {{amount}}',
      money_with_currency_format: '₹ {{amount}} INR',
    },
    IDR: {
      money_format: 'Rp {{amount_with_comma_separator}}',
      money_with_currency_format: 'Rp {{amount_with_comma_separator}} IDR',
    },
    ILS: {
      money_format: '{{amount}} NIS',
      money_with_currency_format: '{{amount}} NIS',
    },
    JMD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} JMD',
    },
    JPY: {
      money_format: '¥{{amount_no_decimals}}',
      money_with_currency_format: '¥{{amount_no_decimals}} JPY',
    },
    JEP: {
      money_format: '£{{amount}}',
      money_with_currency_format: '£{{amount}} JEP',
    },
    JOD: {
      money_format: '{{amount}}0 JD',
      money_with_currency_format: '{{amount}}0 JOD',
    },
    KZT: {
      money_format: '{{amount}} KZT',
      money_with_currency_format: '{{amount}} KZT',
    },
    KES: {
      money_format: 'KSh{{amount}}',
      money_with_currency_format: 'KSh{{amount}}',
    },
    KWD: {
      money_format: '{{amount}}0 KD',
      money_with_currency_format: '{{amount}}0 KWD',
    },
    KGS: {
      money_format: 'лв{{amount}}',
      money_with_currency_format: 'лв{{amount}}',
    },
    LVL: {
      money_format: 'Ls {{amount}}',
      money_with_currency_format: 'Ls {{amount}} LVL',
    },
    LBP: {
      money_format: 'L£{{amount}}',
      money_with_currency_format: 'L£{{amount}} LBP',
    },
    LTL: {
      money_format: '{{amount}} Lt',
      money_with_currency_format: '{{amount}} Lt',
    },
    MGA: {
      money_format: 'Ar {{amount}}',
      money_with_currency_format: 'Ar {{amount}} MGA',
    },
    MKD: {
      money_format: 'ден {{amount}}',
      money_with_currency_format: 'ден {{amount}} MKD',
    },
    MOP: {
      money_format: 'MOP${{amount}}',
      money_with_currency_format: 'MOP${{amount}}',
    },
    MVR: {
      money_format: 'Rf{{amount}}',
      money_with_currency_format: 'Rf{{amount}} MRf',
    },
    MXN: {
      money_format: '$ {{amount}}',
      money_with_currency_format: '$ {{amount}} MXN',
    },
    MYR: {
      money_format: 'RM{{amount}} MYR',
      money_with_currency_format: 'RM{{amount}} MYR',
    },
    MUR: {
      money_format: 'Rs {{amount}}',
      money_with_currency_format: 'Rs {{amount}} MUR',
    },
    MDL: {
      money_format: '{{amount}} MDL',
      money_with_currency_format: '{{amount}} MDL',
    },
    MAD: {
      money_format: '{{amount}} dh',
      money_with_currency_format: 'Dh {{amount}} MAD',
    },
    MNT: {
      money_format: '{{amount_no_decimals}} ₮',
      money_with_currency_format: '{{amount_no_decimals}} MNT',
    },
    MZN: {
      money_format: '{{amount}} Mt',
      money_with_currency_format: 'Mt {{amount}} MZN',
    },
    NAD: {
      money_format: 'N${{amount}}',
      money_with_currency_format: 'N${{amount}} NAD',
    },
    NPR: {
      money_format: 'Rs{{amount}}',
      money_with_currency_format: 'Rs{{amount}} NPR',
    },
    ANG: {
      money_format: 'ƒ{{amount}}',
      money_with_currency_format: '{{amount}} NAƒ',
    },
    NZD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} NZD',
    },
    NIO: {
      money_format: 'C${{amount}}',
      money_with_currency_format: 'C${{amount}} NIO',
    },
    NGN: {
      money_format: '₦{{amount}}',
      money_with_currency_format: '₦{{amount}} NGN',
    },
    NOK: {
      money_format: 'kr {{amount_with_comma_separator}}',
      money_with_currency_format: 'kr {{amount_with_comma_separator}} NOK',
    },
    OMR: {
      money_format: '{{amount_with_comma_separator}} OMR',
      money_with_currency_format: '{{amount_with_comma_separator}} OMR',
    },
    PKR: {
      money_format: 'Rs.{{amount}}',
      money_with_currency_format: 'Rs.{{amount}} PKR',
    },
    PGK: {
      money_format: 'K {{amount}}',
      money_with_currency_format: 'K {{amount}} PGK',
    },
    PYG: {
      money_format: 'Gs. {{amount_no_decimals_with_comma_separator}}',
      money_with_currency_format:
        'Gs. {{amount_no_decimals_with_comma_separator}} PYG',
    },
    PEN: {
      money_format: 'S/. {{amount}}',
      money_with_currency_format: 'S/. {{amount}} PEN',
    },
    PHP: {
      money_format: '₱{{amount}}',
      money_with_currency_format: '₱{{amount}} PHP',
    },
    PLN: {
      money_format: '{{amount_with_comma_separator}} zl',
      money_with_currency_format: '{{amount_with_comma_separator}} zl PLN',
    },
    QAR: {
      money_format: 'QAR {{amount_with_comma_separator}}',
      money_with_currency_format: 'QAR {{amount_with_comma_separator}}',
    },
    RON: {
      money_format: '{{amount_with_comma_separator}} lei',
      money_with_currency_format: '{{amount_with_comma_separator}} lei RON',
    },
    RUB: {
      money_format: 'руб{{amount_with_comma_separator}}',
      money_with_currency_format: 'руб{{amount_with_comma_separator}} RUB',
    },
    RWF: {
      money_format: '{{amount_no_decimals}} RF',
      money_with_currency_format: '{{amount_no_decimals}} RWF',
    },
    WST: {
      money_format: 'WS$ {{amount}}',
      money_with_currency_format: 'WS$ {{amount}} WST',
    },
    SAR: {
      money_format: '{{amount}} SR',
      money_with_currency_format: '{{amount}} SAR',
    },
    SRD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} SRD',
    },
    STD: {
      money_format: 'Db {{amount}}',
      money_with_currency_format: 'Db {{amount}} STD',
    },
    RSD: {
      money_format: '{{amount}} RSD',
      money_with_currency_format: '{{amount}} RSD',
    },
    SCR: {
      money_format: 'Rs {{amount}}',
      money_with_currency_format: 'Rs {{amount}} SCR',
    },
    SGD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} SGD',
    },
    SYP: {
      money_format: 'S£{{amount}}',
      money_with_currency_format: 'S£{{amount}} SYP',
    },
    ZAR: {
      money_format: 'R {{amount}}',
      money_with_currency_format: 'R {{amount}} ZAR',
    },
    KRW: {
      money_format: '₩{{amount_no_decimals}}',
      money_with_currency_format: '₩{{amount_no_decimals}} KRW',
    },
    LKR: {
      money_format: 'Rs {{amount}}',
      money_with_currency_format: 'Rs {{amount}} LKR',
    },
    SEK: {
      money_format: '{{amount_no_decimals}} kr',
      money_with_currency_format: '{{amount_no_decimals}} kr SEK',
    },
    CHF: {
      money_format: 'SFr. {{amount}}',
      money_with_currency_format: 'SFr. {{amount}} CHF',
    },
    TWD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} TWD',
    },
    THB: {
      money_format: '{{amount}} ฿',
      money_with_currency_format: '{{amount}} ฿  THB',
    },
    TZS: {
      money_format: '{{amount}} TZS',
      money_with_currency_format: '{{amount}} TZS',
    },
    TTD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} TTD',
    },
    TND: {
      money_format: '{{amount}}',
      money_with_currency_format: '{{amount}} DT',
    },
    TRY: {
      money_format: '{{amount}}TL',
      money_with_currency_format: '{{amount}}TL',
    },
    UGX: {
      money_format: 'Ush {{amount_no_decimals}}',
      money_with_currency_format: 'Ush {{amount_no_decimals}} UGX',
    },
    UAH: {
      money_format: '₴{{amount}}',
      money_with_currency_format: '₴{{amount}} UAH',
    },
    AED: {
      money_format: 'Dhs. {{amount}}',
      money_with_currency_format: 'Dhs. {{amount}} AED',
    },
    UYU: {
      money_format: '${{amount_with_comma_separator}}',
      money_with_currency_format: '${{amount_with_comma_separator}} UYU',
    },
    VUV: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}}VT',
    },
    VEF: {
      money_format: 'Bs. {{amount_with_comma_separator}}',
      money_with_currency_format: 'Bs. {{amount_with_comma_separator}} VEF',
    },
    VND: {
      money_format: '{{amount_no_decimals_with_comma_separator}}₫',
      money_with_currency_format:
        '{{amount_no_decimals_with_comma_separator}} VND',
    },
    XAG: {
      money_format: '{{amount}} XAG',
      money_with_currency_format: '{{amount}} XAG',
    },
    XAU: {
      money_format: '{{amount}} XAU',
      money_with_currency_format: '{{amount}} XAU',
    },
    XBT: {
      money_format: '{{amount_no_decimals}} BTC',
      money_with_currency_format: '{{amount_no_decimals}} BTC',
    },
    XDR: {
      money_format: '{{amount}} SDR',
      money_with_currency_format: '{{amount}} SDR',
    },
    XOF: {
      money_format: 'CFA{{amount}}',
      money_with_currency_format: 'CFA{{amount}} XOF',
    },
    YER: {
      money_format: '{{amount}} ﷼',
      money_with_currency_format: '{{amount}} ﷼',
    },
    ZMW: {
      money_format: 'K{{amount_no_decimals_with_comma_separator}}',
      money_with_currency_format:
        'ZMW{{amount_no_decimals_with_comma_separator}}',
    },
    AFN: {
      money_format: '{{amount}} ؋',
      money_with_currency_format: '{{amount}} AFN',
    },
    BIF: {
      money_format: 'FBu {{amount}}',
      money_with_currency_format: '{{amount}} BIF',
    },
    BMD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} BMD',
    },
    CDF: {
      money_format: 'FC {{amount}}',
      money_with_currency_format: '{{amount}} CDF',
    },
    CVE: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} CVE',
    },
    DJF: {
      money_format: '{{amount}} فرنك‎‎',
      money_with_currency_format: '{{amount}} DJF',
    },
    ERN: {
      money_format: 'Nfk {{amount}}',
      money_with_currency_format: '{{amount}} ERN',
    },
    GNF: {
      money_format: 'FG {{amount}}',
      money_with_currency_format: '{{amount}} GNF',
    },
    IQD: {
      money_format: '{{amount}} د.ع',
      money_with_currency_format: '{{amount}} IQD',
    },
    IRR: {
      money_format: '{{amount}} ﷼',
      money_with_currency_format: '{{amount}} IRR',
    },
    KMF: {
      money_format: 'CF {{amount}}',
      money_with_currency_format: '{{amount}} KMF',
    },
    LRD: {
      money_format: '${{amount}}',
      money_with_currency_format: '${{amount}} LRD',
    },
    LYD: {
      money_format: '{{amount}} ل.د',
      money_with_currency_format: '{{amount}} LYD',
    },
    PAB: {
      money_format: 'B/. {{amount}}',
      money_with_currency_format: '{{amount}} PAB',
    },
    SDG: {
      money_format: '{{amount}} ج.س',
      money_with_currency_format: '{{amount}} SDG',
    },
    SOS: {
      money_format: 'Sh.So. {{amount}}',
      money_with_currency_format: 'Sh.So. {{amount}}',
    },
    TOP: {
      money_format: 'T${{amount}}',
      money_with_currency_format: 'T${{amount}}',
    },
    UZS: {
      money_format: '{{amount}} UZS',
      money_with_currency_format: '{{amount}} UZS',
    },
  },
  AWS: {
    URL: 'https://mlveda-shopifyapps.s3.amazonaws.com',
    BUCKET: 'mlveda-shopifyapps',
    FOLDER: 'invoice-hero',
    RESOURSES: 'resources',
    EMAILMESSAGE: 'emailMessage',
    PDF: 'PDF',
  },
  CAPPED_AMOUNT: 8,
};
