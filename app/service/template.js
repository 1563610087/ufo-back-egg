const Service = require('egg').Service;

class templateService extends Service {
  
    async getTemplateInfo(){
      const { app, ctx } = this
      const result = await ctx.model.Template.findAll()
      return result
    }

}

module.exports = templateService;