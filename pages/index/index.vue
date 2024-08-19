<template>
	<view class="indexContainer">
			<!-- 头部 -->
			<view class="header">
				<image class='logo' src="/static/logo.png" mode=""></image>
				<view class="search">
					<text class='iconfont icon-sousuo_tianchong-copy'></text>
					<input type="text" value="" placeholder="搜索" placeholder-class="placeholder" />
				</view>
				<button type="default">button</button>
			</view>
			<!-- 滑块 -->
			<scroll-view class="navScroll" scroll-x="true" enable-flex>
				<view class="navItem active">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view> 
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view>
				<view class="navItem">推荐</view> 
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexData: {} ,// 首页数据
			}
		},
		onLoad() {

		},
		
		methods: {
			// 获取首页数据
			async getIndexData() {
				const res = await request('/getIndexData'); //小程序	
				// const res = await request('/api/getIndexData'); //H5
				console.log('=====', res);
				this.indexData = res.indexData;
			},
			// 点击获取下标
			changeIndex(index) {
				this.navIndex = index;
			}
		}
	}
</script>

<style lang="stylus">
	.indexContainer
		.header
			display: flex
			padding: 10rpx 5rpx
			.logo
				width 140rpx
				height 55rpx
				margin: 3rpx
			.search
				width 420rpx
				height 60rpx
				background #f5f5f5
				position relative
				input
					width 360rpx
					height 60rpx
					margin-left 60rpx
					.placeholder
						font-size 26rpx
						color #333
				.iconfont
					position: absolute
					font-size 50rpx
					left 10rpx
					top 10rpx
			button
							width 144rpx
							height 60rpx
							line-height 60rpx
							text-align center
							font-size 26rpx
							padding 0 4rpx
		.navScroll
			// 不换行
			white-space nowrap
			.navItem
				display inline-block
				height 40rpx
				padding 10rpx
				font-size 26rpx
				&.active
					color: #BB2C08
					border-bottom 3rpx solid #BB2C08
</style>
