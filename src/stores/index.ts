import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
// 创建pinia实例
const pinia = createPinia()
// 使用持久化存储插件
pinia.use(persist)

// 导出pinia实例，给main使用
export default pinia
