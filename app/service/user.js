const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class UserService extends Service {


  async login() {
    const { app, ctx } = this;
    ctx.validate({
      userName: { type: 'string', required: true }
    }, ctx.request.body)

    const { userName, password } = ctx.request.body
    const result = await ctx.model.User.findAll({where:{ user_name: userName, password: password}})
    return result   

  }

  async register() {
    const { app, ctx } = this;
    ctx.validate({
      userName: { type: 'string', required: true },
      password: { type: 'number', required: true }
    }, ctx.request.body)
    const { userName, password } = ctx.request.body
    const result = await ctx.model.User.create({ user_name: userName, password: password, phone: 15207131580, email: 'hhhhh' });
    return result
  }

  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 40,
      width: 100,
      height: 30,
      bacground: '#cc9966'
    });
    this.ctx.session.code = captcha.text;
    return captcha;
  }

}

module.exports = UserService;