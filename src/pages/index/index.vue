<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI } from "@/services/home"
import CustomNavbar from "@/pages/index/components/CustomNavbar.vue"
import CategoryPanel from './components/CategoryPanel.vue'
import type { BannerItem } from "@/types/home"
// 存储数据
const bannerList = ref<BannerItem[]>([]) //轮播图数据
const categorylist = ref<any>([])

// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  console.log(res)
}


onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})

</script>

<template>
  <CustomNavbar />
  <XshopSwiper :list="bannerList" />
  <CategoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
