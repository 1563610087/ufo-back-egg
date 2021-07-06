'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/allSites', controller.website.getAllSites);
  router.post('/addWeb', controller.website.addWeb);
  router.post('/addSite', controller.website.addSite);
  router.post('/delSite', controller.website.delSite);
  router.post('/updateSite', controller.website.updateSite);
  router.post('/getIcon', controller.website.getIcon);
};
