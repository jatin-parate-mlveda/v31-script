import logger from './global/logger';
import Orders from './order/orderModel';

export const updateOrderMailSentAt = async () => {
  try {
    for await (const order of Orders.find().select({
      'order.order.created_at': 1,
    })) {
      try {
        await Orders.updateOne(
          { _id: order._id },
          {
            firstTimeMailSentOn: new Date(order.order.order.created_at),
          },
        );
      } catch (err) {
        logger.error(
          `Error while updating order in ${updateOrderMailSentAt.name}: ${err.message}`,
          {
            stack: err.stack,
            orderId: order && order._id,
          },
        );

        // not throwing error here, because we want to continue with other orders
      }
    }
  } catch (error) {
    logger.error(
      `Unknown error in ${updateOrderMailSentAt.name}: ${error.message}`,
      {
        stack: error.stack,
      },
    );

    // not throwing error so that the function can be used in a promise chain
  }
};
