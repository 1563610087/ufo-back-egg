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
    const data = ctx.request.body
    const token = app.jwt.sign(data, app.config.jwt.secret)
    ctx.body = new SuccessModel({token:token})
  }

  async register() {
    const { ctx } = this;
    const list = await ctx.service.user.register()
    // console.log(this.service.user,222)
    ctx.body = new SuccessModel(list)
  }
}

module.exports = UserController;
