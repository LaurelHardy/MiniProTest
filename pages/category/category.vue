<template>
	<view class="category">
		<!-- 搜索 -->
		<!-- <view class="header">
			<view class="search">搜索隐藏</view>
		</view> -->
		<!-- 内容区域 -->
		<view class="content">
			<view class="left">
				<scroll-view class="navScroll" scroll-y="true" >					
					<view class="navItem active" v-for="item in categoryDatas" :key="item.id">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view class="conetntScroll" scroll-y="true" >
					<view></view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
import request from '../../utils/request';
	export default {
		data() {
			return {
				categoryDatas:[],
			};
		},
		mounted() {
			this.getcategory();
		},
		methods:{
			async getcategory() {
				const res = await request("/getCategoryDatas");
				console.log(res);
				this.categoryDatas = res.categoryDatas;
			}
		}
	}
</script>

<style lang="stylus">
	.category
		.header
			padding: 20rpx 0
			.search
				width: 90%
				margin: 0 auto
				height: 60rpx
				line-height: 60rpx
				font-size: 30rpx
				background-color: #ddd
				border-radius: 4rpx
				text-align: center
		.content
			display: flex
			height: 800rpx
			border-top: 2rpx solid #333
			.left
				width 20%
				height: 800rpx				
				border-right: 2rpx solid #333
				.navItem
					position: relative
					height: 60rpx
					line-height: 80rpx
					font-size: 27rpx
					text-align: center
					// 父级引用
					&.active::before
						content: ""
						width: 2rpx
						height: 40rpx
						background-color: red
						position: absolute
						left: 10rpx
						top: 10rpx
			.right
				width: 80%
				height: 800rpx
</style>
