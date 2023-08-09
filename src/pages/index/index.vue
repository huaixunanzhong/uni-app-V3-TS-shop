<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from "@/services/home"
import CustomNavbar from "@/pages/index/components/CustomNavbar.vue"
import type { BannerItem } from "@/types/home"
const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})

</script>

<template>
  <CustomNavbar />
  <XshopSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
