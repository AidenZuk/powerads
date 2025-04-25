<template>
	<view class="invite-container">
		<view class="invite-card">
			<view class="invite-header">
				<text class="title">邀请好友</text>
				<text class="subtitle">每邀请一位好友，您将获得¥10奖励</text>
			</view>
			
			<view class="invite-code">
				<text class="label">我的邀请码</text>
				<text class="code">123456</text>
				<button class="copy-btn">复制</button>
			</view>
			
			<view class="invite-qrcode">
				<image src="https://via.placeholder.com/300x300/007AFF/FFFFFF?text=二维码" mode="aspectFit"></image>
				<text class="tip">扫描二维码下载APP</text>
			</view>
			
			<view class="invite-rules">
				<text class="rules-title">邀请规则</text>
				<view class="rule-item">
					<text class="dot">•</text>
					<text class="rule-text">好友通过您的邀请码注册并完成实名认证</text>
				</view>
				<view class="rule-item">
					<text class="dot">•</text>
					<text class="rule-text">好友首次充值金额≥¥100</text>
				</view>
				<view class="rule-item">
					<text class="dot">•</text>
					<text class="rule-text">奖励将在好友完成上述条件后24小时内发放</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		copyCode() {
			uni.setClipboardData({
				data: '123456',
				success: () => {
					uni.showToast({
						title: '复制成功',
						icon: 'success'
					})
				}
			})
		},
		shareToWechat() {
			// TODO: 实现微信分享
		},
		shareToMoments() {
			// TODO: 实现朋友圈分享
		}
	}
}
</script>

<style lang="scss">
.invite-container {
	padding: 30rpx;
	background: #FFFFFF;
	min-height: 100vh;
	
	.invite-card {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
		
		.invite-header {
			text-align: center;
			margin-bottom: 40rpx;
			
			.title {
				font-size: 36rpx;
				font-weight: bold;
				color: #333333;
				display: block;
				margin-bottom: 10rpx;
			}
			
			.subtitle {
				font-size: 28rpx;
				color: #666666;
			}
		}
		
		.invite-code {
			background: #F5F5F5;
			border-radius: 10rpx;
			padding: 20rpx;
			margin-bottom: 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			.label {
				font-size: 28rpx;
				color: #666666;
			}
			
			.code {
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
			}
			
			.copy-btn {
				width: 120rpx;
				height: 50rpx;
				background: #007AFF;
				color: #FFFFFF;
				border-radius: 25rpx;
				font-size: 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
		.invite-qrcode {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 40rpx;
			
			image {
				width: 300rpx;
				height: 300rpx;
				margin-bottom: 20rpx;
			}
			
			.tip {
				font-size: 28rpx;
				color: #666666;
			}
		}
		
		.invite-rules {
			.rules-title {
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
				display: block;
				margin-bottom: 20rpx;
			}
			
			.rule-item {
				display: flex;
				align-items: flex-start;
				margin-bottom: 20rpx;
				
				.dot {
					color: #007AFF;
					margin-right: 10rpx;
				}
				
				.rule-text {
					font-size: 28rpx;
					color: #666666;
					line-height: 1.5;
				}
			}
		}
	}
}
</style> 