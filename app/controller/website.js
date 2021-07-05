'use strict';

const Controller = require('egg').Controller;
const { SuccessModel, ErrorModel } = require('../utils/resModel.js')
class WebsiteController extends Controller {
  //获取所有网站
  async getAllSites() {
    const { ctx } = this;
      const list = await ctx.service.website.getAllSites()
      ctx.body = new SuccessModel(list)
  }
}

module.exports = WebsiteController;