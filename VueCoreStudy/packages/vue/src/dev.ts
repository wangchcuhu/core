//这个文件会导出一个方法，这个方法是在vue最开始的时候调用
import { initCustomFormatter } from '@vue/runtime-dom'
export function initDev(){
  //在是浏览器加载并且不是ESM打包机的时候执行
   if(__BROWSER__){
     if(!__ESM_BUNDLER__){
       //你正在运行Vue的开发架构。'确保在部署生产版本时使用生产版本(*.prod.js)
       console.info(
         `You are running a development build of Vue.\n` +
         `Make sure to use the production build (*.prod.js) when deploying for production.`
       )
     }
   }
    //初始化自定义格式化程序
  initCustomFormatter()
}