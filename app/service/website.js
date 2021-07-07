const Service = require('egg').Service;

class WebsiteService extends Service {
  async getAllSites() {
    const { app, ctx } = this;
    const { classify_id, classify_type } = ctx.request.body
    ctx.validate({
      classify_id: {
        type: 'number'
      }
    }, ctx.request.body)
    const sql1 = `select * from website_1 where classify_id=${classify_id}`;
    const sql2 = `select * from website_2`;
    const sql3 = `select * from website_3`;
    const [results1] = await app.model.query(sql1);
    const [results2] = await app.model.query(sql2);
    const [results3] = await app.model.query(sql3);
    results2.forEach((item) => {
      item.list = []
      results3.forEach((data) => {
        if (item.website_id === data.website_id) {
          item.list.push(data)
        }
      })
    })
    results1.forEach((item) => {
      item.list = []
      results2.forEach((data) => {
        if (item.classify_id === data.classify_id) {
          item.list.push(data)
        }
      })
    })
    return results1
  }

  //添加二级分类
  async addWeb() {
    const { app, ctx } = this;
    const { classify_id, web_name } = ctx.request.body
    const sql = `insert into website_2 (web_name,classify_id) values ('${web_name}','${classify_id}')`
    return app.model.query(sql);
  }

  //添加网站
  async addSite() {
    const { app, ctx } = this;
    const { siteName, siteUrl, websiteId, siteDescribe, iconUrl } = ctx.request.body
    const sql = `insert into website_3 (site_name,site_url,website_id,site_describe,icon_url) values ('${siteName}','${siteUrl}','${websiteId}','${siteDescribe}','${iconUrl}')`
    return app.model.query(sql);
  }

  //更新网站
  async updateSite() {
    const { app, ctx } = this;
    const { siteId, siteName, siteUrl, siteDescribe, iconUrl } = ctx.request.body
    const sql = `update website_3 set site_name='${siteName}', site_url='${siteUrl}', site_describe='${siteDescribe}', icon_url='${iconUrl}'where site_id=${siteId}`
    const results = app.model.query(sql)
    return results;
  }

  //删除网站
  async delSite() {
    const { app, ctx } = this;
    const { siteId } = ctx.request.body
    const sql = `delete from website_3 where site_id='${siteId}'`
    const [results] = app.model.query(sql)
    return results;
  }


}

module.exports = WebsiteService;