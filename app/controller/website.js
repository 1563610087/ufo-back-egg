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

  //添加二级网站分类
  async addWeb() {
    const { ctx } = this;
      const list = await ctx.service.website.addWeb()
      ctx.body = new SuccessModel(list)
  }

  //添加网站
  async addSite() {
    const { ctx } = this;
      const list = await ctx.service.website.addSite()
      ctx.body = new SuccessModel(list)
  }

  //删除网站
  async delSite() {
    const { ctx } = this;
      const list = await ctx.service.website.delSite()
      ctx.body = new SuccessModel(list)
  }

  //更新网站
  async updateSite() {
    const { ctx } = this;
      const list = await ctx.service.website.updateSite()
      ctx.body = new SuccessModel(list)
  }

  //获取网站图标
  async getIcon() {
    const { ctx } = this;
      const list = await ctx.service.website.getIcon()
      ctx.body = new SuccessModel(list)
  }
}

module.exports = WebsiteController;