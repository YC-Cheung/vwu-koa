const createToken = require('../token/createToken')
const { UserModel } = require('../models/index')

const login = (ctx) => {
  let postData = ctx.request.body
  if (postData.username === 'admin' && postData.password === 'admin') {
    const token = createToken({ id: 1, username: 'admin' })
    ctx.body = {
      code: 200,
      token: token,
      msg: '登录成功'
    }
  } else {
    ctx.body = {
      code: 403,
      msg: '用户名或密码错误'
    }
  }
}

const createUser = (ctx) => {
  const newUser = UserModel({
    username: 'admin',
    password: 'admin',
    createAt: Date.now
  })
  newUser.save(err => {
    if (err) throw err
    console.log('user created')
  })
  ctx.body = 'user created'
}

module.exports = {
  login,
  createUser
}
