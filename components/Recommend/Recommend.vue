<template>
	<view class="recommend">
		<!-- 1、轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://img3.doubanio.com/view/photo/l/public/p2369211952.webp" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.iuDzZlquUTm5weyA7AoMwAHaEL?w=290&h=181&c=7&r=0&o=5&pid=1.7" 
					mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.6FBx1qKqBllpAZFqeb5nTQHaEH?w=257&h=180&c=7&r=0&o=5&pid=1.7" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 2、三个小图标  数据: policyDesclist -->
		<view class="policyList">
			<view class="policyItem" v-for="item in indexData.policyDescList" :key="item.desc">
				<image :src="item.icon" mode=""></image>
				<text class="desc">{{item.desc}}</text>
			</view>
		</view>
		<!-- 3、10个导航图标  数据: kingKongMudule -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				<image class="kingKongImg" :src="item.picUrl" mode=""></image>
				<view class="kingKongDesc"> {{item.text}} </view>
			</view>
		</view>
		<!-- 4、分类区 数据: categoryModule -->
		<view class="categoryList">
			<view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
				<!-- 大图 -->
				<image class="categoryImg" :src="item.titlePicUrl" mode=""></image>
				<!-- 滑块 -->
				<scroll-view class="categoryScroll" scroll-x="true" enable-flex>
					<view class="goodsItem" v-for="goodsItem in item.itemList" :key="goodsItem.id">
						<image class="goodsImg" :src="goodsItem.showPicUrl" mode=""></image>
						<view class="goodsText">{{goodsItem.name}}</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	
	export default {
		name: 'Recommend',
		data() {
			return {};
		},
		computed: {
			...mapState({
				indexData: state=>state.home.indexData
			})
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
		.policyList
			display: flex
			margin: 10rpx 0
			.policyItem
				flex: 1
				text-align: center
				image
					width: 40rpx
					height: 40rpx
					vertical-align: middle
				.desc
					margin: 10rpx
					font-size: 24rpx
		.kingKongList
			display: flex
			flex-wrap: wrap
			.kingKongItem
				width: 30%
				text-align: center
				margin: 10rpx 0
				.kingKongImg
					width: 100rpx
					height: 100rpx
				.kingKongDesc
					font-size: 25rpx
		.categoryList
			.categoryItem
				margin: 10rpx 0
				.categoryImg
					height: 370rpx
					width: 100%
				.categoryScroll
					// 注意：一定给滑块设置高度，否则撑满全屏
					height: 300rpx
					display: flex
					//不换行
					white-space: nowrap
					.goodsItem
						height: 300rpx						
						margin: 0 5rpx
						.goodsImg
							width: 200rpx
							height: 200rpx
							background-color: #f5f5f5
						.goodsText
							// 换行，超出2行...
							white-space: pre-wrap
							overflow: hidden
							text-overflow: ellipsis
							display: -webkit-box
							-webkit-box-orient: vertical
							-webkit-line-clamp: 2
</style>
