'use strict';

const Controller = require('egg').Controller;

class WebsiteController extends Controller {
  async getAllSites() {
    const { ctx } = this;
    ctx.body = [
        {
          id: 1,
          name: '222',
          email: 'sdadasd@163.com',
        },
      ];
  }
}

module.exports = WebsiteController;