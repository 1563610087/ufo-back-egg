'use strict';

const Controller = require('egg').Controller;
const { SuccessModel, ErrorModel } = require('../utils/resModel.js')

class templateController extends Controller {
  async getTemplateInfo() {
    const { ctx } = this;
    const list = await ctx.service.template.getTemplateInfo()
    ctx.body = new SuccessModel(list)
  }
}

module.exports = templateController;