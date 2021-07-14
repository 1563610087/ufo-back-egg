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
    const { ctx, app } = this
    const { userName, code } = ctx.request.body
    const { loginCode } = ctx.session
    if (loginCode !== code) {
      ctx.body = new ErrorModel('验证码错误')
    } else {
      const result = await ctx.service.user.login()
      if (result.length === 0) {
        ctx.body = new ErrorModel('用户名或密码错误')
      } else {
        const token = app.jwt.sign(userName, app.config.jwt.secret)
        ctx.body = new SuccessModel({ token: token })
      }
    }
  }

  async register() {
    const { ctx } = this;
    const list = await ctx.service.user.register()
    ctx.body = new SuccessModel(list)
  }


  //获取验证码
  async captcha() {
    const ctx = this.ctx;
    let captcha = await ctx.service.user.captcha();
    ctx.response.type = 'image/svg+xml'; // 知道你个返回的类型
    ctx.body = new SuccessModel({ code: captcha.data }); // 返回一张图片
    ctx.session.loginCode = captcha.text.toLowerCase();
    ctx.session.maxAge = 1000 * 60 * 10;
  }
}

module.exports = UserController;
