const mongoose = require('mongoose')
const Schema = mongoose.Schema

const columnSchema = new Schema({
  name: { type: String, require: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Column', columnSchema)
