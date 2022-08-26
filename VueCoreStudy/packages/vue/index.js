'use strict'
//判断程序运行的是不是生产环境，是生产环境就使用vue.cjs.prod.js文件
if (process.env.Node_ENV === 'production') {
  module.exports = require('./dist/vue.cjs.prod.js')
  //不是的话就使用vue.cjs.js文件
} else {
  module.exports = require('./dist/vue.cjs.js')
}