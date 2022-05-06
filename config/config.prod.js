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
  config.http = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    },
    timeout: 20000
  }
  config.sequelize = {
    dialect: 'mysql',
    host: 'sh-cynosdbmysql-grp-ajbzcxiw.sql.tencentcdb.com',
    username: 'root',
    password: 'Abcd@1234',
    port: '27182',
    database: 'tang'
  }
  return {
    ...config,
  };
};
