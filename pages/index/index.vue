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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

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
</style>
