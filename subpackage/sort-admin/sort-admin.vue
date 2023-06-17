<template>
	<view class="top">
		<text>商品分类</text>
		<text>操作</text>
	</view>
	<view class="list">
		<view class="item" v-for="(item, index) in arr" :key="index">
			<text>{{item.name}}</text>
			<button>删除</button>
		</view>
	</view>
	<page-container :show="isShow" bind:afterleave="upchange" class="modify">
		<view class="addlist">
			111
		</view>
	</page-container>
	<view class="btn">
		<button @click="change">新增分类</button>
	</view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const isShow = ref<boolean>(false)
const change = () => {
	isShow.value = true
}
const upchange =(e) => {
	console.log(e)
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
</script>

<style scoped lang="scss">
.top {
	width: 100%;
	height: 80rpx;
	margin: auto;
	padding: 0 30rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30rpx;
	font-weight: 700;
	background-color: #e2c48b;
	box-sizing: border-box;
}

.list {
	width: 95%;
	margin: auto;

	.item {
		width: 100%;
		height: 100rpx;
		border-radius: 12rpx;
		padding: 0 15rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f4f4f4;
		
		button {
			width: 120rpx;
			height: 60rpx;
			margin: 0;
			padding: 0;
			background-color: #e7a055;
			font-size: 28rpx;
			color: white;
		}
	}
}

.btn {
	width: 100%;
	height: 150rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	
	button {
		width: 80%;
		height: 80rpx;
		margin-top: 20rpx;
		background-color: #e7a055;
		color: white;
	}
}

.modify {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	
	.addlist {
		height: 600rpx;
		z-index: 999;
	}
}
</style>
