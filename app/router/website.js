'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/data/allSites', controller.website.getAllSites);
  router.post('/data/addWeb', controller.website.addWeb);
  router.post('/data/addSite', controller.website.addSite);
  router.post('/data/delSite', controller.website.delSite);
  router.post('/data/updateSite', controller.website.updateSite);
  router.post('/data/getIcon', controller.website.getIcon);
};
