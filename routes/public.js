const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const publicController = require('../controllers/public')

router.prefix('/api/public')

router.get('/', async (ctx, next) => {
  ctx.body = 'hello article'
})

router.post('/login', publicController.login)
router.get('/create-user', publicController.createUser)
module.exports = router
