import logger from './global/logger';
import Settings from './settings/settings.model';
import { getAllTemplates } from './getAllTemplates';

export const updateAllSettings = async () => {
  let i = 0;
  try {
    const templates = await getAllTemplates();
    // eslint-disable-next-line no-restricted-syntax
    for await (const setting of Settings.find()
      .select({
        storeName: 1,
        _id: 1,
        templateId: 1,
      })
      .lean()) {
      try {
        const { templateId } = setting;
        const settingTemplate = templates.find(
          template => template.templateId === templateId,
        );

        if (!settingTemplate) {
          logger.error(`Template not found for shop: ${setting.storeName}`);
        }

        await Settings.updateOne(
          { _id: setting._id },
          {
            headerHTML: settingTemplate.headerHTML,
            cssHTML: settingTemplate.cssHTML,
            bodyHTML: settingTemplate.bodyHTML,
            footerHTML: settingTemplate.footerHTML,
          },
        ).catch(err => {
          logger.error(
            `Error in saving setting in updateAllSettings: ${err.message}`,
            {
              stack: err.stack,
              shopName: setting.storeName,
            },
          );
          // not throwing error as we want to continue for next round
        });
        i += 1;
      } catch (err) {
        logger.error(
          `Unknown Error in updateAllSettings iteration: ${err.message}`,
          {
            stack: err.stack,
            shopName: setting.storeName,
          },
        );
        // not throwing error as we want to continue for next round
      }
    }
    logger.info(`Worked with total "${i}" settings`);
  } catch (err) {
    logger.error(`Error in updateAllSettings: ${err.message}`, {
      stack: err.stack,
    });
    throw err;
  }
};
