const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: { type: String, require: true },
  columnId: { type: Schema.Types.ObjectId, ref: 'Column' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  pageviews: { type: Number },
  status: {type: String },
})

module.exports = mongoose.model('Article', articleSchema)
