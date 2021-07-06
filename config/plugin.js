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

  http : {
    enable: true,
    package: 'egg-axios'
  }


};
