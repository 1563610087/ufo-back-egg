const whiteList=['/user/login']//白名单（一般登录注册这两个接口不需要校验token）此处也可配置在全局

module.exports=(options)=>{
    return async function(ctx,next){
        if(!whiteList.some(item=>item==ctx.request.url)){//判断接口路径是否在白名单
            let token = ctx.request.header.authorization//拿到token
            if(token){//如果token存在
                let decoded = ctx.app.jwt.verify(token.slice(7),ctx.app.config.jwt.secret)//解密token
                if(decoded&&decoded.message){
                    ctx.body={
                        code:0,
                        msg:decoded.message
                    }
                }else{
                    ctx.username=decoded.username//把接口带来的用户名存在ctx上，方便后续做判断。
                    await next()
                }
            }else{
                ctx.body={
                    code:0,
                    msg:'没有token'
                }
            }
        }else{
            await next()
        }
    }
}