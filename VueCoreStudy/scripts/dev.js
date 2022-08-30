/**
 * 有一句话写在这，node的底层语言是c++和java一样，java的许多读取文件的操作都是基于c++实现的
 */
// Using esbuild for faster dev builds.
// We are still using Rollup for production builds because it generates
// smaller files w/ better tree-shaking.
//这个文件是运行pnpm命令的文件
//使用esbuild实现更快的开发构建。
//我们仍然在使用Rollup进行产品构建，因为它会生成
//更小的文件和更好的摇树。
// @ts-check----这个是配合vscode的进行运行的，目的是为了检查类型，实际上使用ts更好，但是有些重构很麻烦，所以可以使用@ts-check来代替
// @ts-check
const { build } = require('esbuild') //快速的打包器
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill')//打包的插件
//借此机会可以学习一下node的使用
//路径的风格有windows
//path.relative() 方法返回从 from 到 to 的相对路径（基于当前工作目录）。
const { resolve, relative } = require('path')//node 的路径---根据
//如果没有传入 path 片段，则 path.resolve() 会返回当前工作目录的绝对路径。
const args = require('minimist')(process.argv.slice(2))//这个模块是乐观主义者的参数解析器的核心，没有任何花哨的装饰。

const target = args._[0] || 'vue' //目标
const format = args.f || 'global' //格式
const inlineDeps = args.i || args.inline //行内deps
//__dirname是全局变量,返回的当前模块的文件名称---解析后的绝对路径。绝对路径是相对于文件硬盘的路径
const pathPackage = resolve(__dirname, `../packages/${target}/package.json`)//返回绝对路径windows写法"D:\\项目\\Vue3.0Core\\VueCoreStudy\\packages\\vue\\package.json"
//显示的是"D:\项目\Vue3.0Core\VueCoreStudy\packages\vue\package.json" 复制下来的是"D:\\项目\\Vue3.0Core\\VueCoreStudy\\packages\\vue\\package.json"
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`))
console.log(pkg)