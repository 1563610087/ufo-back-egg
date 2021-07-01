'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config: { apiPrefix } } = app;
  require('./router/home')(app);
  require('./router/user')(app);
  require('./router/website')(app);
};
