'use strict';

const Controller = require('egg').Controller;

class WebsiteController extends Controller {
  async getAllSites() {
    const { ctx } = this;
    const query = { limit: 10, offset: 0 };
    // console.log(111,ctx.model.Users,222)
    // ctx.body={
    //   name:11
    // }
    // ctx.body = await ctx.model.Website_1.f;
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