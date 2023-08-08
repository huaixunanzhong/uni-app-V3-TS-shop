import XshopSwiper from './XshopSwiper.vue'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        XshopSwiper: typeof XshopSwiper
    }
}