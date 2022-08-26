# vue

## Which dist file to use?(哪个dist文件被使用？)


### From CDN or without a Bundler(来自CDN或者没有一个Bundler-打包机)


- **`vue(.runtime).global(.prod).js`**:(这个文件在什么时候被使用)
  - For direct use via `<script src="...">` in the browser. Exposes the `Vue` global.
  - 直接使用通过`<script src="...">`在浏览器里引入，公开vue是全局的时候就是用Vue--这种情况就使用上面的文件
  - Note that global builds are not [UMD](https://github.com/umdjs/umd) builds.  They are built as [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and is only meant for direct use via `<script src="...">`.
  - 注意全局构建不是UMD构建，他们被构建通过IIFEs--这是一个拥有独立这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。第一部分是包围在 圆括号运算符 () 里的一个匿名函数，
  - 这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。并且这意味着只能使用`<script src="...">`引入
  - In-browser template compilation:(浏览器内置模板编译)
    - **`vue.global.js`** is the "full" build that includes both the compiler and the runtime so it supports compiling templates on the fly.
    - **`vue.global.js`**这个文件是完整构建意味着它同时包含编译器和运行所以他支持动态编译模板
    - **`vue.runtime.global.js`** contains only the runtime and requires templates to be pre-compiled during a build step.
    - **`vue.runtime.global.js`**只包含运行时这意味着它需要要求在构建步骤期间预编译模板
  - Inlines all Vue core internal packages - i.e. it's a single file with no dependencies on other files.
  - 内联所有Vue核心内部包-即它是一个单独的文件，不依赖于其他文件
  - This means you **must** import everything from this file and this file only to ensure you are getting the same instance of code.
  - 这意味着你必须从这个文件和这个文件中导入所有东西，以确保你得到的是相同的代码实例
  - Contains hard-coded prod/dev branches, and the prod build is pre-minified. Use the `*.prod.js` files for production.
  - 包含硬编码的prod/dev分支，并且prod构建是预先缩小的。在生产中使用' *.prod.js '文件。

- **`vue(.runtime).esm-browser(.prod).js`**:
  - For usage via native ES modules imports (in browser via `<script type="module">`.
  - 用于通过本地ES模块导入使用在浏览器中通过`<script type="module">`导入--本地导入文件使用这个包
  - Shares the same runtime compilation, dependency inlining and hard-coded prod/dev behavior with the global build.
  - 与全局构建共享相同的运行时编译、依赖内联和硬编码的prod/dev行为。

### With a Bundler（用打包机）

- **`vue(.runtime).esm-bundler.js`**:
  - For use with bundlers like `webpack`, `rollup` and `parcel`.
  - 这个文件是对于使用`webpack`, `rollup` and `parcel`这些工具来使用的--也就是使用了这些打包工具的都是用这个文件
  - Leaves prod/dev branches with `process.env.NODE_ENV` guards (must be replaced by bundler)
  - 使prod/dev分支具有' process.env '。NODE_ENV的守卫(必须被bundler替换)
  - Does not ship minified builds (to be done together with the rest of the code after bundling)
  - 不提供缩小版(打包后与其他代码一起完成)
  - Imports dependencies (e.g. `@vue/runtime-core`, `@vue/runtime-compiler`)导入依赖
    - Imported dependencies are also `esm-bundler` builds and will in turn import their dependencies (e.g. `@vue/runtime-core` imports `@vue/reactivity`)
    - 导入的依赖项也是' esm-bundler '构建的，并将依次导入它们的依赖项(例如:“@vue / runtime-core”进口@vue /反应)--也就是说会用到上面的两个文件
    - This means you **can** install/import these deps individually without ending up with different instances of these dependencies, but you must make sure they all resolve to the same version.
    - 这意味着您可以** *地安装/导入这些deps，而不会产生这些依赖关系的不同实例，但您必须确保它们都解析为相同的版本。
  - In-browser template compilation:(浏览器内置模板编译)
    - **`vue.runtime.esm-bundler.js` (default)** is runtime only, and requires all templates to be pre-compiled.
    - 上面这个文件只能够在运行时使用，并且需要所有的模板被提前编译好--编辑模板就是将<Components></Components>这种编译成JS语言运行(也就是.vue后缀的文件)，就是一个编译器
    - This is the default entry for bundlers (via `module` field in `package.json`) because when using a bundler templates are typically pre-compiled (e.g. in `*.vue` files).
    - 这是绑定包的默认条目(通过' package.json '中的' module '字段)，因为当使用绑定包模板时，通常是预编译的
    - **`vue.esm-bundler.js`**: includes the runtime compiler.
    - 上面这个文件包含编译器，也就是使用时不需要提前编译
    - Use this if you are using a bundler but still want runtime template compilation (e.g. in-DOM templates or templates via inline JavaScript strings). You will need to configure your bundler to alias `vue` to this file.
    - 如果您正在使用绑定包，但仍然需要运行时模板编译，则使用此选项在-dom模板或模板通过内联JavaScript字符串)。您需要将绑定器配置为将' vue '别名到该文件类似webpack中使用vue来绑定需要使用的文件(上面两个文件)

#### Bundler Build Feature Flags(捆绑包构建特性标志)

Starting with 3.0.0-rc.3, `esm-bundler` builds now exposes global feature flags that can be overwritten at compile time:从3.0.0-rc开始。3、' esm-bundler '构建现在暴露了可以在编译时覆盖的全局特性标志:

- `__VUE_OPTIONS_API__` (enable/disable Options API support, default: `true`)
- `__VUE_PROD_DEVTOOLS__` (enable/disable devtools support in production, default: `false`)

The build will work without configuring these flags, however it is **strongly recommended** to properly configure them in order to get proper tree-shaking in the final bundle. To configure these flags:
在没有配置这些标志的情况下，构建将会正常工作，但是强烈建议**正确配置它们，以便在最终bundle中获得正确的摇树。要配置这些标志
- webpack: use [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
- Rollup: use [@rollup/plugin-replace](https://github.com/rollup/plugins/tree/master/packages/replace)
- Vite: configured by default, but can be overwritten using the [`define` option](https://github.com/vitejs/vite/blob/a4133c073e640b17276b2de6e91a6857bdf382e1/src/node/config.ts#L72-L76)

Note: the replacement value **must be boolean literals** and cannot be strings, otherwise the bundler/minifier will not be able to properly evaluate the conditions.
注意:替换值**必须是布尔值**，不能是字符串，否则bundler/minifier将无法正确计算条件。
### For Server-Side Rendering(服务器端呈现)

- **`vue.cjs(.prod).js`**:
  - For use in Node.js server-side rendering via `require()`.
  - 用于通过' require() '在Node.js服务器端渲染
  - If you bundle your app with webpack with `target: 'node'` and properly externalize `vue`, this is the build that will be loaded.
  - 如果你用' target: 'node' '将你的应用与webpack捆绑，并正确地外部化' vue '，这就是将要加载的构建。
  - The dev/prod files are pre-built, but the appropriate file is automatically required based on `process.env.NODE_ENV`.
  - 他的dev/prod文件是预先构建的，但是根据' process.env.NODE_ENV '自动需要适当的文件。--根据所处的环境不同加载运行不同的文件(也就是加载构成不通风的Vue实例)
