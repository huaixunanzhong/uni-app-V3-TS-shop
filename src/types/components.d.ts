import XshopSwiper from '@/components/XshopSwiper.vue'
import XshopGuess from '@/components/XshopGuess.vue'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        XshopSwiper: typeof XshopSwiper,
        XshopGuess: typeof XshopGuess
    }
}

// 猜你喜欢组件类型
export type XshopGuessInstance = InstanceType<typeof XshopGuess>