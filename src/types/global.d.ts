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