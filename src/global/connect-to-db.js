import { connect } from 'mongoose';
import logger from './logger';

const {
  env: { DB_URL },
} = process;

export const connectToDb = async () => {
  try {
    await connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected To DB');
  } catch (err) {
    logger.error(err);
    throw err;
  }
};
