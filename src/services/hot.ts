import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot"
import { http } from "@/utils/http"
// data参数类型  & 交叉类型
type HotParams = PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data
    })
}