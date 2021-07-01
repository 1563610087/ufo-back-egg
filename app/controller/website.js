'use strict';

const Controller = require('egg').Controller;

class WebsiteController extends Controller {
  async getAllSites() {
    const { ctx,app } = this;
    const query = { limit: 10, offset: 0 };
    var sql1 = `select * from website_1`;
    var sql2 = `select * from website_2`;
    var sql3 = `select * from website_3`;

    // return Promise.all([promise1, promise2, promise3])
    const [results, metadata] = await app.model.query(sql1);
    // const [results2, metadata2] = await app.model.query(sql2);
    ctx.body = metadata
  }
}

module.exports = WebsiteController;