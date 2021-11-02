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
        Object.assign(
          order.order.order,
          await getBalanceNetPaymentAndRefunds(
            order.order.order,
            order.storeName,
          ),
        );
        await order.save().catch(err => {
          logger.error(`Error in saving order: ${err.message}`, {
            storeName: order.storeName,
            _id: order._id,
            orderId: order.order.order.id,
            stack: err.stack,
          });

          throw err;
        });
        i += 1;
        logger.info(`Done: ${i}`);
      } catch (err) {
        logger.error(`Got Error in index.js:14: ${err.message}`, {
          stack: err.stack,
          orderId: order.customOrderNumber,
        });
        totalErrors += 1;
        logger.info(`Error: ${totalErrors}`);
      }
    }
  } catch (err) {
    logger.error(`Got Error in index.js:21: ${err.message}`, {
      stack: err.stack,
    });
  }

  logger.info(`Done: ${i}, totalErrors: ${totalErrors}`);
};

fn();
