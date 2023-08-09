<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotPanelAPI } from "@/services/home"
import CustomNavbar from "@/pages/index/components/CustomNavbar.vue"
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { BannerItem, CategoryItem, HotPanelItem } from "@/types/home"



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


onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotPanelData()
})

</script>

<template>
  <CustomNavbar />
  <XshopSwiper :list="bannerList" />
  <CategoryPanel :list="categorylist" />
  <HotPanel :list="hotpanel" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
