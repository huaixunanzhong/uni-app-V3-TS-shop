import type { PageParams } from "@/types/global"
import { http } from "@/utils/http"
// data参数类型  & 交叉类型
type HotParams = PageParams & { subType: string }
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
    return http({
        method: 'GET',
        url,
        data
    })
}