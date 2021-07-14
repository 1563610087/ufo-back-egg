'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  //引入插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  //引入参数校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  //引入egg-cors包
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  //引入axios
  http: {
    enable: true,
    package: 'egg-axios'
  },

  //引入jwt
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  //添加图形验证码插件
  captcha: {
    enable: true,
    package: 'svg-captcha',
  },
};
