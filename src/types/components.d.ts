import XshopSwiper from '@/components/XshopSwiper.vue'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        XshopSwiper: typeof XshopSwiper
    }
}