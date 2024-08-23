<template>
	<view class="personal">
		<view class="header">
			<!-- 登录状态 -->
			<template v-if="userInfo.nickName">
				<image class="img" :src="userInfo.avatarUrl" mode=""></image>
				<text>{{userInfo.nickName}}</text>
				<button class="exit" @click="exit">退出登录</button>
			</template>
			<!-- 未登录的 -->
			<template v-else>
				<image class="img" src="/static/images/personal/personal.png" mode=""></image>
				<text class="login" @click="toLogin">去登录</text>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{} // 个人信息
			};
		},
		mounted() {
			// 从本地存储里读取数据
			wx.getStorage({
				key: 'userinfo',
				success: res => {
					console.log(res.data);
					if (res.data) {
						this.userInfo = JSON.parse(res.data);
						}
					}					
			});
		},
		methods: {
			toLogin(){
				wx.reLaunch({
					url: '/pages/login/login'
				})
			},
			exit(){
				// 清空
				wx.setStorage({
					key: "userinfo",
					data:""
				})
				// 去登录页
				wx.reLaunch({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style lang="stylus">
	.personal
		.header
			height 300rpx
			line-height 200rpx
			background-color #EED7B5
			display flex
			.img
				height 100rpx
				width 100rpx
				vertical-align middle
				margin 50rpx
			.exit
				height: 80rpx
				margin: 50rpx
			
</style>
