<template>
	<view class="recommend">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img3.doubanio.com/view/photo/l/public/p2369211952.webp" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.iuDzZlquUTm5weyA7AoMwAHaEL?w=290&h=181&c=7&r=0&o=5&pid=1.7 mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.6FBx1qKqBllpAZFqeb5nTQHaEH?w=257&h=180&c=7&r=0&o=5&pid=1.7" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.recommend
		.swiper
			height: 350rpx
			image
				width: 100%
				height: 350rpx
</style>
