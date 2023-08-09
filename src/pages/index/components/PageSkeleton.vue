<template name="skeleton">
    <view is="components/XshopSwiper">
        <view class="carousel XshopSwiper--carousel">
            <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                    style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
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
    <view is="pages/index/components/CategoryPanel">
        <view class="category CategoryPanel--category">
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-171 sk-text">居家</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-110 sk-text">锦鲤</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-998 sk-text">服饰</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-974 sk-text">母婴</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-743 sk-text">个护</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-265 sk-text">严选</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-392 sk-text">数码</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-718 sk-text">运动</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-472 sk-text">杂项</text>
            </navigator>
            <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-886 sk-text">品牌</text>
            </navigator>
        </view>
    </view>
    <view is="pages/index/components/HotPanel">
        <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-141 sk-text">特惠推荐</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-300 sk-text">精选全攻略</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-184 sk-text">爆款推荐</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-330 sk-text">最受欢迎</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-970 sk-text">一站买全</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-826 sk-text">精心优选</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
            <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                    <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-968 sk-text">新鲜好物</text>
                    <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-658 sk-text">生活加分项</text>
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                    <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
            </view>
        </view>
    </view>
    <view is="components/XshopGuess" class="r">
        <view class="caption XshopGuess--caption">
            <text
                class="text XshopGuess--text sk-transparent sk-text-0-0000-447 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
        </view>
    </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-6-2500-892 {
    background-image: linear-gradient(transparent 6.2500%, #EEEEEE 0%, #EEEEEE 93.7500%, transparent 0%) !important;
    background-size: 100% 27.9070rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-63 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
}

.sk-text-14-2857-171 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-110 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-998 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-974 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-743 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-265 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-392 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-718 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-472 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-886 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
}

.sk-text-14-2857-141 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-300 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-184 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-330 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-970 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-826 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-14-2857-968 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.9535rpx;
    position: relative !important;
}

.sk-text-14-2857-658 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
}

.sk-text-0-0000-447 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 31.3953rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
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
}</style>