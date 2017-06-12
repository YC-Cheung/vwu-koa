const router = require('koa-router')()
// const jwt = require('koa-jwt')
router.prefix('/api/admin/user')

router.post('/login', function (ctx, next) {
  let postData = ctx.request.body
  if (postData.username === 'admin' && postData.password === 'admin') {
    const userToken = {
      id: 1,
      username: 'admin',
    }
    const secret = 'vue-koa-demo'
    const token = 'lalalallalal'  
    // const token = jwt.sign(userToken,secret)
    ctx.body = {
      code: 200,
      token: token,
      msg: 'success'
    }
  } else {
    ctx.body = {
      code: 403,
      msg: '用户名或密码不正确'
    }
  }
})

router.get('/test', async (ctx, next) => {
  ctx.body = 'test'
})

module.exports = router
