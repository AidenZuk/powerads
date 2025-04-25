<template>
	<view class="login-container">
		<view class="top-bar"></view>
		<view class="logo">
			<image src="https://via.placeholder.com/200x200/007AFF/FFFFFF?text=LOGO" mode="aspectFit"></image>
		</view>
		<view class="form-container">
			<view class="input-group">
				<input type="text" v-model="phone" placeholder="请输入手机号" />
			</view>
			<view class="input-group">
				<input type="password" v-model="password" placeholder="请输入密码" />
			</view>
			<button class="login-btn" @tap="handleLogin">登录</button>
			<view class="action-links">
				<text @tap="goToRegister">注册账号</text>
				<text @tap="forgotPassword">忘记密码</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			phone: '',
			password: ''
		}
	},
	methods: {
		handleLogin() {
			// TODO: 实现登录逻辑
			uni.navigateTo({
				url: '/pages/home/index'
			})
		},
		goToRegister() {
			uni.navigateTo({
				url: '/pages/register/index'
			})
		},
		forgotPassword() {
			// TODO: 实现忘记密码逻辑
		}
	}
}
</script>

<style lang="scss">
.login-container {
	padding: 40rpx;
	background: #FFFFFF;
	min-height: 100vh;
	
	.top-bar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200rpx;
		background: linear-gradient(180deg, #007AFF 0%, #00BFFF 100%);
		z-index: 1;
	}
	
	.logo {
		display: flex;
		justify-content: center;
		margin: 60rpx 0;
		position: relative;
		z-index: 2;
		
		image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
			background: #FFFFFF;
			padding: 20rpx;
			box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
		}
	}
	
	.form-container {
		margin-top: 60rpx;
		position: relative;
		z-index: 2;
		
		.input-group {
			margin-bottom: 30rpx;
			
			input {
				height: 88rpx;
				background: #FFFFFF;
				border-radius: 44rpx;
				padding: 0 40rpx;
				font-size: 28rpx;
				color: #333333;
				box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
				
				&::placeholder {
					color: #999999;
				}
			}
		}
		
		.login-btn {
			width: 100%;
			height: 88rpx;
			background: #007AFF;
			color: #FFFFFF;
			border-radius: 44rpx;
			font-size: 32rpx;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 40rpx;
			box-shadow: 0 4rpx 12rpx rgba(0, 122, 255, 0.2);
		}
		
		.action-links {
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
			font-size: 28rpx;
			color: #007AFF;
		}
	}
}
</style> 