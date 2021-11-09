import Order from './order/orderModel';
import logger from './global/logger';
import { getBalanceNetPaymentAndRefunds } from './order/orderService';

export const updateOrderBalance = async () => {
  logger.info('starting updateOrderBalance');
  let i = 0;
  let totalErrors = 0;
  try {
    // for each order
    for await (const order of Order.find({})) {
      try {
        Object.assign(
          order.order.order,
          // get the balance and net payment
          await getBalanceNetPaymentAndRefunds(
            order.order.order,
            order.storeName,
          ),
        );
        // save the order
        await order.save().catch(err => {
          logger.error(`Error in saving order: ${err.message}`, {
            storeName: order.storeName,
            _id: order._id,
            orderId: order.order.order.id,
            stack: err.stack,
          });

          // not throwing error here because we want to continue with other orders
        });
        i += 1;
        logger.info(`Done: ${i}`);
      } catch (err) {
        logger.error(
          `Got Error in for await loop in ${updateOrderBalance.name}: ${err.message}`,
          {
            stack: err.stack,
            orderId: order.customOrderNumber,
            storeName: order.storeName,
          },
        );
        totalErrors += 1;
        logger.info(`Error: ${totalErrors}`);
      }
    }
  } catch (err) {
    logger.error(`Got Error in index.js:21: ${err.message}`, {
      stack: err.stack,
    });
    // not throwing error as this is a background process
  }

  logger.info(`Done: ${i}, totalErrors: ${totalErrors}`);
};
