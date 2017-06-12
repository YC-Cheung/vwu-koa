const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (authorization) {
  const token = authorization.split(' ')[1]
  const decoded = jwt.decode(token)

  // 若jwt有效期少于30分钟 则刷新
  if (decoded.exp - new Date() / 1000 < 60 * 30) {
    const userInfo = {
      id: decoded.id,
      username: decoded.username
    }
    console.log(decoded.exp - new Date() / 1000)
    const newToken = jwt.sign(userInfo, config.secret, { expiresIn: '1h' })
    return newToken
  } else {
    return false
  }
}
