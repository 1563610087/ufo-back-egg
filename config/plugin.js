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
  }
};
