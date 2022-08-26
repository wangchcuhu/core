//这个条目是“完整构建”，包括运行时
//和编译器，并支持动态编译模板选项。
//__DEV__是通过tsconfig.json中定义加载文件include "packages/global.d.ts",加载了全局的变量
//__DEV__这个决定了要不要执行下面这个函数
if(__DEV__){
    initDev()
}