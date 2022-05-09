'use strict';

const Controller = require('egg').Controller;

class templateController extends Controller {
  async getTemplateInfo() {
    const { ctx } = this;
    const list = await ctx.service.template.getTemplateInfo()
    ctx.body = new SuccessModel(list)
  }
}

module.exports = templateController;