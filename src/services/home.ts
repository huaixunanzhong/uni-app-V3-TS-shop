import type { PageResult } from "@/types/global"
import type { BannerItem, CategoryItem, GuessItem, HotPanelItem } from "@/types/home"
import { http } from "@/utils/http"


/*
*首页-广告区域-小程序
* @param distributionSite 广告区域展示位置
*/
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        url: '/home/banner',
        method: 'GET',
        data: {
            distributionSite
        }
    })
}

/**
 * 首页-前台分类-小程序
 * /home/category/mutli
 */
export const getHomeCategoryAPI = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli'
    })
}

// 首页-热门推荐-小程序
// GET
// /home/hot/mutli
export const getHotPanelAPI = () => {
    return http<HotPanelItem[]>({
        method: 'GET',
        url: '/home/hot/mutli'
    })
}

// 猜你喜欢-小程序
// GET/home/goods/guessLike


export const getHomeGoodsGuessLikeAPI = () => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike'
    })
}