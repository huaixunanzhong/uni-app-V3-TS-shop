<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotPanelAPI } from "@/services/home"
import CustomNavbar from "@/pages/index/components/CustomNavbar.vue"
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { BannerItem, CategoryItem, HotPanelItem } from "@/types/home"
import type { XshopGuessInstance } from "@/types/components"



// 获取轮播图数据
const bannerList = ref<BannerItem[]>([]) //轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// 获取前台分类数据
const categorylist = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categorylist.value = res.result
}
// 获取热门推荐数据
const hotpanel = ref<HotPanelItem[]>([])
const getHotPanelData = async () => {
  const res = await getHotPanelAPI()
  hotpanel.value = res.result
}
// 滚动触底事件
const guessRef = ref<XshopGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新事件
// 控制下拉刷新事件
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // 利用Promise.all优化请求  三个请求一起发送
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotPanelData()])
  isTriggered.value = false
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotPanelData()
})

</script>

<template>
  <CustomNavbar />
  <scroll-view scroll-y @scrolltolower="onScrolltolower" refresher-enabled @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered">
    <!-- 自定义轮播图 -->
    <XshopSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categorylist" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotpanel" />
    <!-- 猜你喜欢 -->
    <XshopGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
//
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.scroll-view {
  flex: 1;
}
</style>
