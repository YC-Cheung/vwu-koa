

const getAllArticle = (ctx) => {
  let articles = [
    { id: 1, title: '文章标题1', content: '为了艾泽拉斯！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 2, title: '文章标题2', content: '为了部落！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 3, title: '文章标题3', content: '为了艾泽拉斯', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 4, title: '文章标题4', content: '为了部落', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 5, title: '文章标题5', content: '为了艾泽拉斯！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 6, title: '文章标题6', content: '为了部落！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 7, title: '文章标题7', content: '为了艾泽拉斯', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 8, title: '文章标题8', content: '为了部落', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 9, title: '文章标题9', content: '为了艾泽拉斯！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 10, title: '文章标题10', content: '为了部落！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 11, title: '文章标题11', content: '为了艾泽拉斯', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 12, title: '文章标题12', content: '为了部落', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 13, title: '文章标题13', content: '为了艾泽拉斯！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 14, title: '文章标题14', content: '为了部落！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 15, title: '文章标题15', content: '为了艾泽拉斯', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 16, title: '文章标题16', content: '为了部落', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 17, title: '文章标题17', content: '为了艾泽拉斯！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 18, title: '文章标题18', content: '为了部落！', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 19, title: '文章标题19', content: '为了艾泽拉斯', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' },
    { id: 20, title: '文章标题20', content: '为了部落', column: '为伍珠海', author: 'Zero', pageviews: '1024', status: '1', timestamp: '1496391601' }
  ]
  ctx.body = {
    code: 200,
    msg: 'success',
    list: articles
  }
}

module.exports = {
  getAllArticle
}
