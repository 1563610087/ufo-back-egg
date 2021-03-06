'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user', controller.user.list);
  router.post('/user/login', controller.user.login);
  router.post('/user/register', controller.user.register);
  router.get('/login/code', controller.user.captcha);
};
