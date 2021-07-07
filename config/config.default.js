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
  const config = exports = {
    env: 'prod',
    rundir: '/tmp',
    logger: {
      dir: '/tmp',
    },
  };

  config.http = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    },
    timeout: 20000
  }

  config.security = {
    csrf: {
      enable: false,
    }
  },
    /* 配置允许跨域 */
    config.cors = {
      credentials: true,
      origin: "*", //允许任何跨域，若只允许个别IP跨域，则：origin:['http://localhost:8080']
      allowMethods: 'GET,PUT,POST,DELETE', // 被允许的请求方式
    }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576384476895_3620';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
