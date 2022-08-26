# @vue/runtime-dom
## 这个文件就可以运行了
``` js
import { h, createApp } from '@vue/runtime-dom'

const RootComponent = {
  render() {
    return h('div', 'hello world')
  }
}

createApp(RootComponent).mount('#app')
```
