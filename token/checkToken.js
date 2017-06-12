const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = async (ctx, next) => {
  //拿到token
  if (ctx.request.header['authorization']) {
    let token = ctx.request.header['authorization'].split(' ')[1]

    try {
      var decoded = jwt.verify(token, config.secret)
      return next()
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        ctx.body = {
          code: 40100,
          msg: '授权过期，请重新登录'
        }
      } else {
        ctx.body = {
          code: 40300,
          msg: '非法授权'
        }
      }
    }

  } else {
    ctx.body = {
      code: 401,
      message: '没有token'
    }
  }
}
