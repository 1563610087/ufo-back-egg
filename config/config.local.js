/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports={}
  config.middleware = ['errorHandler','loginJwt'],
  config.sequelize = {
    host: '127.0.0.1',
    port: 3306,
    database: 'ufo-nav',
    username: 'root',
    password: "123456",
  }
  return {
    ...config,
  };
};
