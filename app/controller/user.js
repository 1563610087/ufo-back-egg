'use strict';

const { Controller } = require('egg');
const { sleep } = require('../utils/index');
const { SuccessModel, ErrorModel } = require('../utils/resModel.js')

class UserController extends Controller {
  async list() {
    const { ctx } = this;
    await sleep(Math.random());
    ctx.body = [
      {
        id: 1,
        name: 'yugasun',
        email: 'yuga_sun@163.com',
      },
    ];
  }

  async login() {
    const { ctx,app } = this
    const { userName } = ctx.request.body
    const result = await ctx.service.user.login()
    if(result.length===0){
      ctx.body = new ErrorModel('用户名或密码错误')
    }else {
      const token = app.jwt.sign(userName, app.config.jwt.secret)
      ctx.body = new SuccessModel({token:token})
    } 
    
  }

  async register() {
    const { ctx } = this;
    const list = await ctx.service.user.register()
    ctx.body = new SuccessModel(list)
  }
}

module.exports = UserController;
