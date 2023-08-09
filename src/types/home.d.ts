// 首页-广告区域数据类型
// 轮播图
export type BannerItem = {
    id: string,
    imgUrl: string,
    hrefUrl: string,
    type: number
}
// 商品分类
export type CategoryItem = {
    id: string,
    name: string,
    icon: string
}
// 热门推荐
export type HotPanelItem = {
    id: string,
    alt: string,
    pictures: string[],
    target: string,
    title: string,
    type: string
}

// 猜你喜欢
export type GuessItem = {
    id: string,
    name: string,
    desc: string,
    price: number,
    picture: string,
    discount: number,
    orderNum: number
}