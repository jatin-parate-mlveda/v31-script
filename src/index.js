import './global/setup-env';
import { connectToDb } from './global/connect-to-db';
import { updateOrderBalance } from './updateOrderBalance';
import logger from './global/logger';
import { updateOrderMailSentAt } from './updateOrderMailSentAt';
import { updateAllSettings } from './updateAllSettings';

const fn = async () => {
  try {
    await connectToDb();

    await updateAllSettings().catch(err => {
      logger.error(
        `Unknown error in ${updateAllSettings.name} call: ${err.message}`,
        {
          stack: err.stack,
        },
      );
      // not throwing error because we wanto to continue next process
    });

    await updateOrderMailSentAt().catch(err => {
      logger.error(
        `Unknown error in ${updateOrderMailSentAt.name} call: ${err.message}`,
        {
          stack: err.stack,
        },
      );
      // not throwing error because we wanto to continue next process
    });

    await updateOrderBalance().catch(err => {
      logger.error(`Unknown error in updateOrderBalance call: ${err.message}`, {
        stack: err.stack,
      });
      // not throwing an error here because we want to continue next process
    });
  } catch (err) {
    logger.error(`Error in ${fn.name}: ${err.message}`, {
      stack: err.stack,
    });
  }
};

fn()
  .catch(err => {
    logger.error(`Uknown error in ${fn.name} call: ${err.message}`, {
      stack: err.stack,
    });
  })
  .finally(() => {
    process.exit();
  });
