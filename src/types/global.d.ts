// 通用分页结果类型
export type PageResult<T> = {
    counts: 0,
    pageSize: 0,
    pages: 0,
    page: 0,
    items: T[]
}
// 通用分页参数类型
export type PageParams = {
    /*页码*/
    page?: number,
    pageSize?: number
}
/** 通用商品类型 */
export type GoodsItem = {
    /** 商品描述 */
    desc: string
    /** 商品折扣 */
    discount: number
    /** id */
    id: string
    /** 商品名称 */
    name: string
    /** 商品已下单数量 */
    orderNum: number
    /** 商品图片 */
    picture: string
    /** 商品价格 */
    price: number
  }