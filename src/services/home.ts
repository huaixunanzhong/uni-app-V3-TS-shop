import type { BannerItem } from "@/types/home"
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
    return http({
        method: 'GET',
        url: '/home/category/mutli'
    })
}