module.exports = {
  COMPLETE: 'Complete',
  ORDER: {
    NO_DATA: 'No order found',
    INAVALID_PAGE: 'invalid page number, should start with 1',
    WRONG_FORMAT: 'Order data in different format',
    ERROR_IN_PDF_UPLOAD: 'Error while uploading PDF on s3',
    ERROR_IN_FETCH_PDF: 'Error while fetching pdf from s3',
    ERROR_IN_FETCH_ADDITIONAL_PDF:
      'Error while fetching additional pdf from s3',
    ERROR_IN_PDFZIP_UPLOAD: 'Error while uploading PDF Zip on s3',
    ERROR_IN_PDF_GENERATE: 'Error while generating PDF',
    ERROR_TMP_HEADER_REMOVE: 'Error in removing header tmp file',
    ERROR_TMP_FOOTER_REMOVE: 'Error in removing footer tmp file',
    ERROR_TMP_HEADER_CREATE: 'Error creating tmp file for header',
    ERROR_TMP_FOOTER_CREATE: 'Error creating tmp file for footer',
    NO_PRESENTMENT_MONEY: 'PRESENTMENT MONEY NOT FOUND',
    ERROR_IN_ITERATION: 'Something went wrong with iterating order',
    NO_HTML: 'Template HTML not found',
    SENT_MAIL: 'Email sent successfully!',
    FAIL_MAIL: 'Email sent unsuccessfully!',
    EXIST: 'Order already exists',
    CUSTOMER_DATA_NO_FOUND: 'Customer email not found',
    INVALID_MCHECKOUT_FORMAT: 'Mcheckout order format is invalid',
    PDF_NOT_CREATED: 'Pdf is not created for this order!',
  },
  INVOICE_NUMBER_COUNTER: {
    NO_DATA: 'No invoice number counter found',
    ERROR_IN_UPDATE: 'Error in updating invoice number counter',
  },
  FONTS: {
    FETCH_ERROR: 'Error in fetching fonts',
  },
  EMAIL_SETTINGS: {
    NO_DATA: 'No email settings found',
    NO_CASE_NAME: 'Unrecognized event',
  },
  ORDER_MAPPING: {
    NO_DATA: 'No order mapping found',
  },
  REVIEW: {
    NO_DATA: 'No review found',
    NO_DATA_WITH_ID: 'No review with that id',
    MUST_INT: 'id must be a number',
  },
  TEMPLATE: {
    NO_DATA_WITH_ID: 'No template with id',
    NO_TEMPLATES: 'No templates found',
  },
  SETTINGS: {
    CODE_ERROR_IN_UPLOAD_LOGO: 'Something went wrong in uploding logo to s3',
    ERROR_IN_UPLOAD_LOGO: 'Error while uploding logo to s3',
    NO_DATA: 'No settings found',
    CODE_ERROR_IN_SIGNATURE_LOGO:
      'Something went wrong in uploding signature to s3',
    ERROR_IN_UPLOAD_SIGNATURE: 'Error while uplOding signature to s3',
    TEMPLATE_ID_REQUIRED: 'Template id is required',
    INVALID_LANGUAGE_CODE: 'Language code is invalid',
  },
  SHOP: {
    NO_DATA: 'No shop data found',
  },
  SHOPKEY: {
    NO_DATA: 'No shop key data found',
  },
  LANGUAGE: {
    NO_DATA: 'No language found',
  },
  PLAN: {
    NO_DATA: 'No plan found',
    NO_DATA_WITH_ID: 'No plan with that id',
  },
  CUSTOM_PRICING: {
    NO_DATA: 'No custom pricing data found',
  },
};
