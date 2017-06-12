const articleController = require('../controllers/article')
const checkToken = require('../token/checkToken')
const router = require('koa-router')()

router.prefix('/api/admin/article')

router.get('/list', checkToken, articleController.getAllArticle)

module.exports = router
