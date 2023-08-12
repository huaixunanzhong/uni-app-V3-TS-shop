// 组合式函数

import type { XshopGuessInstance } from "@/types/components"
import { ref } from "vue"


// 猜你喜欢组合式函数
export const useGussList = () => {
    // 获取猜你喜欢组件实例
    const guessRef = ref<XshopGuessInstance>()
    const onScrollToLower = () => {
        guessRef.value?.getMore()
    }
    // 返回
    return{
        guessRef,
        onScrollToLower
    }
}