const Service = require('egg').Service;

class WebsiteService extends Service {
  async getAllSites() {
    const { app,ctx } = this;
    const {classify_id,classify_type}=ctx.request.body
    try {
      const results=ctx.validate({ classify_id:{
        type:'number'
      } },ctx.request.body)
    }catch(err){
      return err.errors
    }
    
    // var sql1 = `select * from website_1`;
    // var sql2 = `select * from website_2`;
    // var sql3 = `select * from website_3`;
    // const [results, metadata] = await app.model.query(sql1);
    // const [results, metadata] = await app.model.query(sql2);
    // const [results, metadata] = await app.model.query(sql3);
    return results
  }
}

module.exports = WebsiteService;