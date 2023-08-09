// 通用分页结果类型
export type PageResult<T> = {
    counts: 0,
    pageSize: 0,
    pages: 0,
    page: 0,
    items: T[]
}