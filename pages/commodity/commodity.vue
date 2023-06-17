<template>
	<view class="commod">
		<!-- 左侧列表 -->
		<view class="left_view">
			<scroll-view scroll-y="true" :style="'height:' + hei + 'px'">
				<view v-for="(item, index) in arr" :key="index" class="left_item" :class="{active: change === index}" @click="Change(index)">
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<!-- 右侧详情 -->
		<view class="right_view">
			<scroll-view scroll-y="true" :style="'height:' + hei + 'px'">
				<view class="right_title">
					<img src="../../static/image/home-actived.png" alt="">
					<view class="title">
						<span class="h1">阿斯顿发发送到发送到发送打算的</span>
						<text>库存 &nbsp; 16</text>
						<view class="right_btn">
							<text>¥ 13</text>
							<button>下架</button>
						</view>
					</view>
				</view>
				<view class="right_title">
					<img src="../../static/image/home-actived.png" alt="">
					<view class="title">
						<span class="h1">阿斯顿发发送到发送到发送打算的</span>
						<text>库存 &nbsp; 16</text>
						<view class="right_btn">
							<text>¥ 13</text>
							<button>下架</button>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	<view class="btn">
		<button @click="gotoSort">管理分类</button>
		<button>添加商品</button>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const change = ref<number>(0)	
const Change = (index) => {
	change.value = index
}
const arr = reactive<object[]>([
		{
			name: "膨化食品"
		},
		{
			name: "坚果炒货"
		},
		{
			name: "肉干海味"
		},
		{
			name: "糖巧果冻"
		},
		{
			name: "果干果蔬"
		},
		{
			name: "素食山珍"
		},
		{
			name: "乳品烘焙"
		},
		{
			name: "水果鲜花"
		},
		{
			name: "蛋糕奶茶"
		}
])
const hei = uni.getSystemInfoSync().windowHeight - 55 
const gotoSort = () => {
	uni.navigateTo({
		url: '/subpackage/sort-admin/sort-admin'
	})
}
</script>

<style lang="scss">
page{background-color: #f4f4f4;}
.btn {
	width: 100%;
	height: 100rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: white;
	
	button {
		width: 40%;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		font-size: 28rpx;
		border: none;
		border-radius: 16rpx;
		background-color: #e7a055;
		color: white;
		&:nth-child(2) {
			background-color: #e2c48b;
		}
	}
}

.commod {
	width: 100%;
	display: flex;
	
	.left_view {
		width: 180rpx;
		background-color: white;
		
		.left_item {
			width: 98%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin-top: 2rpx;
		}
		
		.active {
			background-color: #e2c48b;
			color: white;
		}
	}
	.right_view {
		flex: 1;
		
		.right_title {
			width: 96%;
			height: 200rpx;
			background-color: white;
			margin: auto;
			margin-top: 15rpx;
			padding: 10rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 12rpx;
			
			image {
				width: 180rpx;
				height: 180rpx;
				border-radius: 32rpx;
				display: block;
			}
			
			.title {
				flex: 1;
				height: 180rpx;
				margin-left: 20rpx;
				.h1 {
					width: 320rpx;
					margin-bottom: 15rpx;
					display: block;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				
				text {
					font-size: 26rpx;
					color: #a19fa3;
				}
				
				.right_btn {
					width: 320rpx;
					margin-top: 15rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					text {
						color: orangered;
						font-size: 32rpx;
					}
					
					button {
						width: 120rpx;
						height: 60rpx;
						margin: 0;
						padding: 0;
						font-size: 26rpx;
						background-color: #e7a055;
						color: white;
					}
				}
			}
		}
	}
}
</style>
