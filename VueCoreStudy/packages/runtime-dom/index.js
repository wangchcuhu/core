'use strict'
//这里跟vue目录的index一样不再赘述
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/runtime-dom.cjs.prod.js')
} else {
  module.exports = require('./dist/runtime-dom.cjs.js')
}
