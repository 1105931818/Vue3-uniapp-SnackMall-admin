<template>
	<!-- 自定义顶部导航栏 -->
	<view class="top_view">
		<view :style="'height:' + hei + 'px;'">
			<view class="title" :style="'height:' + Top.top + 'px'"></view>
			<view class="" :style="['height:' + Top.height + 'px;', 'line-height:' + Top.height + 'px;', 'padding-left: 15px']" >
				零食商城
			</view>
		</view>
		
		<view class="profit" :style="'top:' + pro_top + 'px'">
			<!-- 订单收益 -->
			<view class="profit_view">
				<view class="profit_num">
					<text>累计收益（元）</text>
					<text>13023.00</text>
				</view>
				<view class="profit_sale">
					<view>
						<text>今日销售额</text>
						<text>2000</text>
					</view>
					<view>
						<text>今日订单数</text>
						<text>800</text>
					</view>
					<view>
						<text>累计订单额</text>
						<text>1500</text>
					</view>
				</view>
			</view>
			
			<!-- 九宫格 -->
			<view class="palaces">
				<view class="item" v-for="(item, index) in order_data.svgArr" :key="index">
					<img :src="item.svg">
					<text>{{item.name}}</text>
				</view>
			</view>
			
			<!-- 设置 -->
			<view class="setup">
				<view>
					<text>发货地址</text>
					<text>></text>
				</view>
				<view>
					<text>物流管理</text>
					<text>></text>
				</view>
				<view>
					<text>联系客服</text>
					<text>></text>
				</view>
				<view>
					<text>防骗指南</text>
					<text>></text>
				</view>
				<view>
					<text>隐私规则</text>
					<text>></text>
				</view>
				<view>
					<text>道具执行</text>
					<text>></text>
				</view>
				<view>
					<text>设置</text>
					<text>></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

type T = {
	svg: string;
	name: string;
}

type Y = {
	svgArr: Array<T>
}
const order_data = reactive<Y>({
	svgArr: [
		{
			svg: '../../static/svg/photo.svg',
			name: '横幅管理'
		},
		{
			svg: '../../static/svg/spike.svg',
			name: '秒杀管理'
		},
		{
			svg: '../../static/svg/commodity.svg',
			name: '商品管理'
		},
		{
			svg: '../../static/svg/order.svg',
			name: '订单管理'
		},
		{
			svg: '../../static/svg/collect.svg',
			name: '分类管理'
		},
		{
			svg: '../../static/svg/shop.svg',
			name: '店铺管理'
		},
		{
			svg: '../../static/svg/footprint.svg',
			name: '足迹管理'
		},
		{
			svg: '../../static/svg/wallet.svg',
			name: '钱包管理'
		}
	],
})
// 胶囊按钮的位置数据
const Top = uni.getMenuButtonBoundingClientRect()
const hei = Top.top + Top.height
//订单收益模块距离顶部的高度
const pro_top = hei + 25
</script>

<style lang="scss">
page{background-color: #f4f4f4;}
.top_view {
	height: 330rpx;
	position: relative;
	background-image: linear-gradient(to top, #e2c48b 0%, #e7a055 100% );
	
	.profit {
		position: absolute;
		left: 20rpx;
		right: 20rpx;
		
		.profit_view {
			background-color: #ffffff;
			border-radius: 10rpx;
			padding: 30rpx;
			
			.profit_num {
				display: flex;
				flex-direction: column;
				padding-bottom: 20rpx;
				font-size: 32rpx;
				
				text:nth-child(2) {
					font-size: 50rpx;
					padding-top: 10rpx;
				}
			}
			
			.profit_sale {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 32rpx;
				
				view {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-items: center;
					
					text:nth-child(1) {
						font-size: 28rpx;
						padding-bottom: 10rpx;
						color: #696969;
					}
				}
			}
		}
		
		
		.palaces {
			background-color: #ffffff;
			height: 280rpx;
			border-radius: 10rpx;
			padding: 30rpx;
			margin-top: 25rpx;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			
			.item{
				width: 25%;
				height: 120rpx;
				text-align: center;
				font-size: 26rpx;
				
				image{
					width: 90%;
					height: 60rpx;
					display: block;
					margin: auto;
					margin-bottom: 15rpx;
				}
			}
		}
	
		.setup {
			background-color: #ffffff;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 25rpx 0;
			
			view {
				height: 85rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	
	}
	
}
</style>
