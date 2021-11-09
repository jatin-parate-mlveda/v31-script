import logger from './global/logger';
import Templates from './template/template.model';

export const getAllTemplates = async () => {
  try {
    return await Templates.find();
  } catch (err) {
    logger.error(`Error in getAllTemplates: ${err.message}`, {
      stack: err.stack,
    });
    throw err;
  }
};
