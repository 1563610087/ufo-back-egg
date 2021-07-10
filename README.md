# 项目开发文档

## 1 项目初始化

1. 安装

```bash
# 安装 Serverless Framework
npm install -g serverless
```

2. 创建

通过如下命令直接下载该例子：

```bash
serverless init eggjs-starter --name example
cd example
```

3. 部署

在 `serverless.yml` 文件所在的项目根目录，运行以下指令，将会弹出二维码，直接扫码授权进行部署：

```bash
serverless deploy
```

> **说明**：如果鉴权失败，请参考 [权限配置](https://cloud.tencent.com/document/product/1154/43006) 进行授权。

4. 查看状态

执行以下命令，查看您部署的项目信息：

```bash
serverless info
```

5. 移除

可以通过以下命令移除 eggjs-starter 应用

```bash
serverless remove
```

账号配置（可选）

serverless 默认支持扫描二维码登录，用户扫描二维码后会自动生成一个 `.env` 文件并将密钥存入其中.
如您希望配置持久的环境变量/秘钥信息，也可以本地创建 `.env` 文件, 
把从[API 密钥管理](https://console.cloud.tencent.com/cam/capi)中获取的 `SecretId` 和`SecretKey` 填入其中.

> 如果没有腾讯云账号，可以在此[注册新账号](https://cloud.tencent.com/register)。

```bash
# 腾讯云的配置信息
touch .env
```

```
# .env file
TENCENT_SECRET_ID=123
TENCENT_SECRET_KEY=123
```

## 2 项目结构

## 3 数据库

### 3.1 安装orm框架

项目采用[sequelize](http://docs.sequelizejs.com/) 

- 安装

```bash
npm install --save egg-sequelize mysql2
```

- 在 `config/plugin.js` 中引入 egg-sequelize 插件

```javascript
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```

- 在 `config/config.default.js` 中编写 sequelize 配置

```javascript
config.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'egg-sequelize-doc-default',
};
```

### 3.2 安装sequelize-automate

sequelize-automate可以自动生成的 Model 文件

```
npm install -g sequelize-automate
```

`sequelize-automate` 命令支持的参数主要有：

- `--type, -t` 指定 models 代码风格，当前可选值：`js` `ts` `egg` `midway`
- `--dialect, -e` 数据库类型，可选值：`mysql` `sqlite` `postgres` `mssql` `mariadb`
- `--host, -h` 数据库 host
- `--database, -d` 数据库名
- `--user, -u` 数据库用户名
- `--password, -p` 数据库密码
- `--port, -P `数据库端口，默认：MySQL/MariaDB 3306，Postgres 5432，SSQL: 1433
- `--output, -o `指定输出 models 文件的目录，默认会生成在当前目录下 `models` 文件夹中
- `--camel, -C` models 文件中代码是否使用驼峰发命名，默认 `false`
- `--emptyDir, -r` 是否清空 models 目录（即 `-o` 指定的目录），如果为 `true`，则生成 models 之前会清空对应目录，默认 `false`
- `--config, -c` 指定配置文件，可以在一个配置文件中指定命令的参数

更详细的参数介绍可参考文档：[sequelize-automate](https://github.com/nodejh/sequelize-automate#command-line) 

> 注意事项，如果是全局安装的sequelize-automate，则需要全局安装mysql2，否则会报错

### 3.3 生成model

根据不同的框架指定生成的类型，本项目采用的是egg.js框架，因此生成的类型指定egg。

```bash
sequelize-automate -t egg -h localhost -d ufo-nav -u root -p 123456 -P 3306 -e mysql -o app/model
```

## 4 返回结果

```javascript
class BaseModel {
  constructor(data, message) {
    //传入的data要为对象，message为字符串类型
    //假设只传入了一个字符串
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}


class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error_code = 0
    this.msg = 'success'
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.error_code = -1
    this.msg = "fail"
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
```

## 5 路由拆分

## 6 参数校验

```
npm install --save egg-validate
```

```JavaScript
// config/plugin.js
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
```

## 7 配置跨域

安装

```
npm i egg-cors --save 
```

引入

// config/plugin.js

```
//引入egg-cors包
    cors: {
        enable: true,
        package: 'egg-cors',
    }
```

配置

```javascript
/* 配置允许跨域 */
    config.cors = {
        credentials: true,
        origin: "*", //允许任何跨域，若只允许个别IP跨域，则：origin:['http://localhost:8080']
        allowMethods: 'GET,PUT,POST,DELETE', // 被允许的请求方式
    };
```

## 8 错误处理

添加中间件

```javascript
module.exports = (options, app) => {
return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { 
        code:status,
        error:error,
      };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
      
    }
  };
};
```

引入中间件

```
config.middleware = ['errorHandler'],
```

## 9 发送请求

### 9.1 原生命令

egg的get请求方式：

```
this.ctx.curl(url, option)复制代码
```

url:当然是请求地址了

option:

| method            | 请求方法，默认为GET。可以是GET，POST，DELETE或PUT            |
| ----------------- | ------------------------------------------------------------ |
| data              | 要发送的数据。将自动进行字符串化                             |
| dataType          | 字符串-响应数据的类型。可能是text或json                      |
| headers           | 请求标头                                                     |
| timeout           | 请求超时                                                     |
| auth              | username:password在HTTP基本授权中使用                        |
| followRedirect    | 遵循HTTP 3xx响应作为重定向。默认为false                      |
| gzip              | 让您在请求连接时获取res对象，默认为false                     |
| nestedQuerystring | urllib默认使用querystring对不支持嵌套对象的表单数据进行字符串化，通过将此选项设置为true，将使用qs而不是querystring支持嵌套对象 |

如果请求的结果返回的是json数据，则需要指定数据类型

```
this.ctx.curl('https://www.example.com', {dataType: 'json'})
```

```
this.ctx.curl('https://www.example.com', {
  method: 'GET/POST',
  dataType: 'json',
  headers: {
       token: 'xxx'  
  },
  data: {
    id: 1
  }
  ...
})
```

### 9.2 安装axios

安装egg-axios

```
npm i --save egg-axios
```

引入插件

`config/plugin.js`

```
http : {
    enable: true,
    package: 'egg-axios'
  }
```

发送请求

```javascript
const getIconUrl = function (ctx) {
    const { siteUrl } = ctx.request.body

    return new Promise((resolve, reject) => {
        const website = siteUrl.split('/').slice(0, 3).join('/')
        const protocol = website.includes('https') ? 'https:' : 'http:'
        ctx.http.get(siteUrl).then((data) => {
            const html = data
            //匹配规则1
            let reg = /href.*?\.ico/gi
            let iconUrl = html.match(reg)
            if (iconUrl) {
                let result = iconUrl[0].split('=').pop().substr(1)
                if (result.includes('http')) {
                    resolve(result)
                } else if (result.includes('//')) {
                    resolve(protocol + result)
                }
                else {
                    if (result[0] === '/') {
                        resolve(website + result)
                    } else {
                        resolve(website + '/' + result)
                    }

                }
            } else {
                //匹配规则2     
                let reg2 = /rel=.*?\.png/gi
                let result2 = html.match(reg2)
                if (result2) {
                    let iconUrl = result2[0].split("href=").pop().substr(1)
                    if (iconUrl.includes('http')) {
                        resolve(iconUrl)
                    } else if (iconUrl.includes('//')) {
                        resolve(protocol + iconUrl)
                    } else {
                        if (iconUrl[0] === '/') {
                            resolve(website + iconUrl)
                        } else {
                            resolve(website + '/' + iconUrl)
                        }

                    }
                } else {
                    resolve(website + '/favicon.ico')
                }
            }
            }, (err) => {
                reject(err)
            })
    })
}
module.exports = {
    getIconUrl
}
```

## 10 登录方案

jwt token方案

1 安装

```
npm install egg-jwt --save
```

2 引入插件，同上

3 使用

```javascript
sync login() {
    const { ctx,app } = this
    const data = ctx.request.body
    //生成token
    const token = app.jwt.sign(data, app.config.jwt.secret)
    ctx.body = new SuccessModel({token:token})
  }
```

4 编写中间件校验

```javascript
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
```

5 引入中间件

在配置文件中，引入全局中间件

## 11 中间件

egg.js编写中间件按约定放入middleware文件夹中，中间件的使用方式有三种

* 应用中间件
* 插件中间件
* 路由中间件

### 11.1 应用中间件

在config.default.js文件中引入中间件

**注意： 配置需要的中间件，数组顺序即为中间件的加载顺序**

```javascript
module.exports = {
  middleware: [ 'gzip' ],

  // 配置 gzip 中间件的配置
  gzip: {
    threshold: 1024, // 小于 1k 的响应体不压缩
  },
};
```

### 11.2 插件中间件



### 11.3 路由中间件