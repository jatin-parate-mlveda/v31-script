/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import { checkShopifyApiLimit } from './orderController';
import ShopKey from '../shopKeys/shopKeysModel';
import MessageConstant from '../messageConstant';
import logger from '../global/logger';

// eslint-disable-next-line import/prefer-default-export
export const getBalanceNetPaymentAndRefunds = async (order, shopName) => {
  let gqlRes;

  try {
    const accessToken = await ShopKey.findOne({ name: shopName });

    if (!accessToken) {
      // noinspection ExceptionCaughtLocallyJS
      throw new Error(MessageConstant.SHOPKEY.NO_DATA);
    }

    gqlRes = await checkShopifyApiLimit(
      `https://${shopName}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
      'POST',
      {
        headers: {
          'x-shopify-access-token': accessToken.accessToken,
        },
      },
      {
        query: `
          query {
            order(id: ${JSON.stringify(order.admin_graphql_api_id)}) {
              currentTotalPriceSet {
                presentmentMoney {
                  amount
                }
                shopMoney {
                  amount
                }
              }
              transactions(first: 250) {
                kind
                status
                amountSet {
                  presentmentMoney {
                    amount
                  }
                  shopMoney {
                    amount
                  }
                }
              }
            }
          }`, // Not adding pagination as there can be not much transactions
      },
    );

    const { transactions, currentTotalPriceSet } = gqlRes.data.data.order;
    const totalPaidTransactions = transactions.filter(
      ({ kind, status }) =>
        status.toLowerCase() === 'success' &&
        (kind.toLowerCase() === 'capture' || kind.toLowerCase() === 'sale'),
    );
    const totalPaid = totalPaidTransactions.reduce(
      (prevVal, currValue) => {
        prevVal.presentmentMoney +=
          +currValue.amountSet.presentmentMoney.amount;
        prevVal.shopMoney += +currValue.amountSet.shopMoney.amount;
        return prevVal;
      },
      {
        presentmentMoney: 0,
        shopMoney: 0,
      },
    );

    const totalRefundedTransactions = transactions.filter(
      ({ kind, status }) =>
        status.toLowerCase() === 'success' && kind.toLowerCase() === 'refund',
    );
    const totalRefunded = totalRefundedTransactions.reduce(
      (prevVal, currValue) => {
        prevVal.presentmentMoney +=
          +currValue.amountSet.presentmentMoney.amount;
        prevVal.shopMoney += +currValue.amountSet.shopMoney.amount;
        return prevVal;
      },
      {
        presentmentMoney: 0,
        shopMoney: 0,
      },
    );

    const netPaid = {
      presentmentMoney:
        totalPaid.presentmentMoney - totalRefunded.presentmentMoney,
      shopMoney: totalPaid.shopMoney - totalRefunded.shopMoney,
    };

    return {
      totalRefunded,
      totalPaid,
      netPaid,
      balance: {
        presentmentMoney:
          +currentTotalPriceSet.presentmentMoney.amount -
          netPaid.presentmentMoney,
        shopMoney: +currentTotalPriceSet.shopMoney.amount - netPaid.shopMoney,
      },
    };
  } catch (err) {
    if (err.message === MessageConstant.SHOPKEY.NO_DATA) {
      throw err;
    }

    logger.error(`Error in getBalanceNetPaymentAndRefunds: ${err.message}`, {
      stack: err.stack,
      shopName,
      orderId: order.orderId,
      res: gqlRes && gqlRes.response,
    });
    throw err;
  }
};
