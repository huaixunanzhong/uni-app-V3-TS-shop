// 封装拦截器

import { useMemberStore } from "@/stores/modules/member"





const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net"

// 添加拦截器
const httpInterceptor = {
    // 拦截前
    invoke(options: UniApp.RequestOptions) {
        // 1.非http开头需要拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 2.请求超时 默认 60s
        options.timeout = 10000
        // 3.添加小程序端请求头标识
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }
        // 添加token请求头标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }

    }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 接口返回数据ts类型
interface Data<T> {
    code: string,
    msg: string,
    result: T
}


// 封装请求函数
// 2.2添加泛型
export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        // 1.返回Promise对象
        uni.request({
            ...options,
            // 2.请求成功
            success(res) {
                // 状态码 2xx axios就是这样设计的
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    // 2.1提取核心数据 res.data
                    resolve((res.data as Data<T>))
                } else if (res.statusCode == 401) {
                    // 401错误 清理用户信息 跳转到登录页
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    // 其他错误  根据后端返回的错误信息提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误'
                    })
                    reject(res)
                }
            },
            // 响应失败
            fail(err) {
                uni.showToast({
                    title: '网络错误，换一个网络试试',
                    icon: 'none',
                })
                reject(err)
            }
        })
    })
}