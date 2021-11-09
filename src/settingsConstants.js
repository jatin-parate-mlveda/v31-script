export const autoSendInAllCountriesOption = 'ALL';

export const allowedInvoiceDateFormats = [
  'MM/DD/YYYY',
  'DD/MM/YYYY',
  'YYYY-MM-DD',
];

export const allowedPageSizes = {
  a4: 'A4',
  letter: 'Letter',
};

/**
 *
 * @type {Record<string, string>}
 */
export const allowedCustomerFilterOptions = {
  currency: 'CURRENCY',
  country: 'COUNTRY',
};

/**
 *
 * @type {Record<string, string>}
 */
export const allowedInvoiceCurrencyForAutoSend = {
  store: 'STORE',
  nonStore: 'NON-STORE',
  all: 'ALL',
};

/**
 * @type {Record<string, string>}
 */
export const allowedFirstTimeInvoiceSendEvents = {
  paid: 'PAID',
  fulfilled: 'FULFILLED',
  notPaid: 'NOT_PAID',
  created: 'CREATED',
};
