<template name="skeleton">
    <view class="sk-container">
      <view class="viewport">
        <view class="search">
          <view class="input">
            <text class="icon-search sk-transparent sk-text-14-2857-797 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
          </view>
        </view>
        <view class="categories">
          <scroll-view :scroll-y="true" class="primary">
            <view class="item active sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-257 sk-text">居家</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-494 sk-text">美食</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-370 sk-text">服饰</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-127 sk-text">母婴</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-318 sk-text">个护</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-443 sk-text">严选</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-100 sk-text">数码</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-912 sk-text">运动</text>
            </view>
            <view class="item sk-pseudo sk-pseudo-circle">
              <text class="name sk-transparent sk-text-14-2857-548 sk-text">杂项</text>
            </view>
          </scroll-view>
          <scroll-view :scroll-y="true" class="secondary">
            <view is="components/XshopSwiper" class="banner">
              <view class="carousel XshopSwiper--carousel">
                <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator XshopSwiper--navigator" hover-class="none">
                      <image class="image XshopSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                  <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                    <navigator class="navigator XshopSwiper--navigator" hover-class="none">
                      <image class="image XshopSwiper--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                </swiper>
                <view class="indicator XshopSwiper--indicator">
                  <text class="dot XshopSwiper--dot active XshopSwiper--active"></text>
                  <text class="dot XshopSwiper--dot"></text>
                  <text class="dot XshopSwiper--dot"></text>
                  <text class="dot XshopSwiper--dot"></text>
                  <text class="dot XshopSwiper--dot"></text>
                </view>
              </view>
            </view>
            <view class="panel">
              <view class="title">
                <text class="name sk-transparent sk-text-26-4706-225 sk-text">居家生活用品</text>
                <navigator class="more sk-transparent sk-text-30-8824-629 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
              </view>
              <view class="section">
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-864 sk-text">飞天53%vol500ml贵州茅台酒（带杯）</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-509 sk-text">1499.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-468 sk-text">苏格兰陈年单一麦芽威士忌700毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-986 sk-text">318.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-846 sk-text">下饭神器酸豆角50克*10袋</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-60 sk-text">16.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-548 sk-text">地道卤香好味道，桂林鲜米粉245克*6盒</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-752 sk-text">69.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-125 sk-text">玛歌正牌干红750毫升2017年</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-990 sk-text">6699.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-103 sk-text">三分钟即享简餐，日式即食咖喱150克</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-159 sk-text">15.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-182 sk-text">百年名庄出品，法国南部干红750毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-32 sk-text">58.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-560 sk-text">名庄金奖加身，西班牙珍藏干红750毫升</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-790 sk-text">168.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                  <view class="name ellipsis sk-transparent sk-text-14-2857-704 sk-text">无芯软糯的萌妹子，建宁莲子228克</view>
                  <view class="price">
                    <text class="symbol sk-transparent sk-opacity">¥</text>
                    <text class="number sk-transparent sk-text-14-2857-105 sk-text">45.00</text>
                  </view>
                </navigator>
                <navigator class="goods" hover-class="none">
                  <image class="image sk-image"></image>
                </navigator>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </template>

<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-797 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-257 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-494 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-370 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-127 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-318 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-443 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-100 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-912 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-548 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-26-4706-225 {
    background-image: linear-gradient(transparent 26.4706%, #EEEEEE 0%, #EEEEEE 73.5294%, transparent 0%) !important;
    background-size: 100% 59.3023rpx;
    position: relative !important;
  }
.sk-text-30-8824-629 {
    background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
    background-size: 100% 59.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-864 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-509 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-468 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-986 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-846 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-60 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-752 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-125 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-990 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-103 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-159 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-182 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-32 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-560 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-790 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-704 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-105 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>