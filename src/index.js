import './global/setup-env';
import { connectToDb } from './global/connect-to-db';
import Order from './order/orderModel';
import logger from './global/logger';
import { getBalanceNetPaymentAndRefunds } from './order/orderService';

const fn = async () => {
  await connectToDb();
  let i = 0;
  let totalErrors = 0;
  try {
    for await (const order of Order.find({ storeName: /teckie-supplies-2/ })) {
      try {
        await getBalanceNetPaymentAndRefunds(
          order.order.order,
          order.storeName,
        );
        i += 1;
        console.log(`Done: ${i}`);
      } catch (err) {
        logger.error(`Got Error in index.js:14: ${err.message}`, {
          stack: err.stack,
          orderId: order.customOrderNumber,
        });
        totalErrors += 1;
        console.log(`Error: ${totalErrors}`);
      }
    }
  } catch (err) {
    logger.error(`Got Error in index.js:21: ${err.message}`, {
      stack: err.stack,
    });
  }

  console.log(`Done: ${i}, totalErrors: ${totalErrors}`);
};

fn();
