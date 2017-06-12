const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mongoose = require('mongoose')
const refreshToken = require('./token/refreshToken')
const config = require('./config')
/* router */
const index = require('./routes/index')
const users = require('./routes/users')
const article = require('./routes/article')
const public = require('./routes/public')

// error handler
onerror(app)

// mongoose connect
mongoose.connect(config.mongodb)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response拦截器 检测jwt是否需要刷新
app.use(async (ctx, next) => {
  await next()
  const response = ctx.body
  if (response.code == 200 && !response.token && !!ctx.request.header['authorization']) {
    const newToken = refreshToken(ctx.request.header['authorization'])
    if (newToken) ctx.set('X-REFRESH-TOKEN', newToken)
  }
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())
app.use(public.routes(), public.allowedMethods())

module.exports = app
