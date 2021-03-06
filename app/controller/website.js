'use strict';

const Controller = require('egg').Controller;
const { SuccessModel, ErrorModel } = require('../utils/resModel.js')
const { getIconUrl } = require('../utils/getIcon');
class WebsiteController extends Controller {
  //获取所有网站
  async getAllSites() {
    const { ctx } = this;
      const list = await ctx.service.website.getAllSites()
      ctx.body = new SuccessModel(list)
  }

  //添加二级网站分类2
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
      let data= await getIconUrl(ctx)
      ctx.body = new SuccessModel({
        iconUrl:data
      })
  }
}

module.exports = WebsiteController;