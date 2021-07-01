'use strict';

const Controller = require('egg').Controller;

class WebsiteController extends Controller {
  async getAllSites() {
    const { ctx,app } = this;
    const list = await ctx.service.website.getAllSites()
    ctx.body = list
  }
}

module.exports = WebsiteController;