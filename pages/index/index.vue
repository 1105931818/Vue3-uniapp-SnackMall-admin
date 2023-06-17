<template>
	<view class="top_view">
		<view class="text-area" :style="'height:' + hei + 'px;'">
			<view class="title" :style="'height:' + Top.top + 'px'"></view>
			<view class="" :style="['height:' + Top.height + 'px;', 'line-height:' + Top.height + 'px;', 'padding-left: 15px']" >
				零食商城
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">

const Top = uni.getMenuButtonBoundingClientRect()
const hei = Top.top + Top.height
</script>

<style lang="scss">
.top_view {
	height: 330rpx;
	position: relative;
	background-image: linear-gradient(to top, #e2c48b 0%, #e7a055 100% );
}
</style>
