const Service = require('egg').Service;

class WebsiteService extends Service {
  async getAllSites() {
    const { app } = this;
    const query = { limit: 10, offset: 0 };
    var sql1 = `select * from website_1`;
    var sql2 = `select * from website_2`;
    var sql3 = `select * from website_3`;
    const [results, metadata] = await app.model.query(sql1);
    return results
  }
}

module.exports = WebsiteService;