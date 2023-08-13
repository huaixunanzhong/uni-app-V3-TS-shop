import type { CartItem } from "@/types/cart"
import { http } from "@/utils/http"

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
    return http<CartItem[]>({
      method: 'GET',
      url: '/member/cart',
    })
  }