<template>
	<view class="register-container">
		<view class="logo">
			<image src="https://via.placeholder.com/200x200/007AFF/FFFFFF?text=LOGO" mode="aspectFit"></image>
		</view>
		<view class="form-container">
			<view class="input-group">
				<input type="text" v-model="phone" placeholder="请输入手机号" />
			</view>
			<view class="input-group">
				<input type="text" v-model="code" placeholder="请输入验证码" />
				<button class="code-btn" @tap="getCode" :disabled="countdown > 0">
					{{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
				</button>
			</view>
			<view class="input-group">
				<input type="password" v-model="password" placeholder="请输入密码" />
			</view>
			<view class="input-group">
				<input type="password" v-model="confirmPassword" placeholder="请确认密码" />
			</view>
			<button class="register-btn" @tap="handleRegister">注册</button>
			<view class="action-links">
				<text @tap="goToLogin">已有账号？去登录</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			phone: '',
			code: '',
			password: '',
			confirmPassword: '',
			countdown: 0
		}
	},
	methods: {
		handleRegister() {
			// TODO: 实现注册逻辑
			uni.navigateTo({
				url: '/pages/home/index'
			})
		},
		goToLogin() {
			uni.navigateBack()
		},
		getCode() {
			if (this.countdown > 0) return
			// TODO: 实现获取验证码逻辑
			this.countdown = 60
			const timer = setInterval(() => {
				this.countdown--
				if (this.countdown <= 0) {
					clearInterval(timer)
				}
			}, 1000)
		}
	}
}
</script>

<style lang="scss">
.register-container {
	padding: 40rpx;
	
	.logo {
		display: flex;
		justify-content: center;
		margin: 60rpx 0;
		
		image {
			width: 200rpx;
			height: 200rpx;
		}
	}
	
	.form-container {
		margin-top: 60rpx;
		
		.input-group {
			margin-bottom: 30rpx;
			position: relative;
			
			input {
				height: 88rpx;
				background: #F5F5F5;
				border-radius: 44rpx;
				padding: 0 40rpx;
				font-size: 28rpx;
			}
			
			.code-btn {
				position: absolute;
				right: 0;
				top: 0;
				height: 88rpx;
				background: #007AFF;
				color: #FFFFFF;
				border-radius: 44rpx;
				font-size: 28rpx;
				padding: 0 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				
				&[disabled] {
					background: #CCCCCC;
				}
			}
		}
		
		.register-btn {
			width: 100%;
			height: 88rpx;
			background: #007AFF;
			color: #FFFFFF;
			border-radius: 44rpx;
			font-size: 32rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 40rpx;
		}
		
		.action-links {
			display: flex;
			justify-content: center;
			margin-top: 30rpx;
			font-size: 28rpx;
			color: #007AFF;
		}
	}
}
</style> 