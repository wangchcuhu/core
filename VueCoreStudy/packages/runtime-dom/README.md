# @vue/runtime-core

> This package is published only for typing and building custom renderers. It is NOT meant to be used in applications.
> 这个包仅仅用于输入和自定义呈现器，它并不是用于程序当中

For full exposed APIs, see `src/index.ts`. You can also run `yarn build runtime-core --types` from repo root, which will generate an API report at `temp/runtime-core.api.md`.
对于完全公开的APIs,请看src/index.ts,你也可以从repo root运行 `yarn build runtime-core --types`这将会生成一个API报告在`temp/runtime-core.api.md`
## Building a Custom Renderer
## 构建自定义渲染器
``` ts
//导出这个方法，构建渲染器
import { createRenderer } from '@vue/runtime-core'
//这个方法的使用说明，会在后续讲解，也就是这个方法是是这个核心文件的入口
const { render, createApp } = createRenderer({
  patchProp,
  insert,
  remove,
  createElement,
  // ...
})

// `render` is the low-level API
//render 是一个低等级的API
// `createApp` returns an app instance with configurable context shared
//createApp返回一个可以配置上下文共享的app实例
// by the entire app tree.
//---通过整个应用程序树的入口
//下面是两种导出的方式
export { render, createApp }

export * from '@vue/runtime-core'
```

See `@vue/runtime-dom` for how a DOM-targeting renderer is implemented.
//看@vue/runtime-dom是为了了解如何实现一个以dom为目标的渲染器