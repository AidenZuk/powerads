<template>
	<view class="home-container">
		<view class="header">
			<view class="user-info">
				<image class="avatar" :src="userInfo.avatar" mode="aspectFill"></image>
				<view class="info">
					<text class="name">{{ userInfo.name }}</text>
					<text class="id">ID: {{ userInfo.id }}</text>
				</view>
			</view>
			<view class="balance">
				<text class="label">账户余额</text>
				<text class="amount">¥{{ balance.toFixed(2) }}</text>
			</view>
		</view>
		
		<view class="menu-list">
			<view class="menu-item" @tap="goToInvite">
				<view class="icon-wrapper">
					<image src="https://via.placeholder.com/80x80/007AFF/FFFFFF?text=邀请" mode="aspectFit"></image>
				</view>
				<text>邀请好友</text>
			</view>
			<view class="menu-item">
				<view class="icon-wrapper">
					<image src="https://via.placeholder.com/80x80/007AFF/FFFFFF?text=提现" mode="aspectFit"></image>
				</view>
				<text>提现</text>
			</view>
			<view class="menu-item">
				<view class="icon-wrapper">
					<image src="https://via.placeholder.com/80x80/007AFF/FFFFFF?text=记录" mode="aspectFit"></image>
				</view>
				<text>收益记录</text>
			</view>
		</view>
		
		<view class="task-list">
			<view class="section-title">今日任务</view>
			<view class="task-item" v-for="task in pendingTasks" :key="task.id">
				<view class="task-info">
					<text class="task-name">{{ task.name }}</text>
					<text class="task-reward">+¥{{ task.reward.toFixed(1) }}</text>
				</view>
				<button class="task-btn" @tap="completeTask(task.id)">去完成</button>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapState(['userInfo', 'balance']),
		...mapGetters(['pendingTasks'])
	},
	methods: {
		...mapActions(['completeTask']),
		goToInvite() {
			uni.navigateTo({
				url: '/pages/invite/index'
			})
		}
	}
}
</script>

<style lang="scss">
.home-container {
	padding: 30rpx;
	background: #FFFFFF;
	min-height: 100vh;
	
	.header {
		background: linear-gradient(135deg, #007AFF 0%, #00BFFF 100%);
		border-radius: 20rpx;
		padding: 30rpx;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 122, 255, 0.2);
		
		.user-info {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;
			
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				border: 4rpx solid rgba(255, 255, 255, 0.3);
			}
			
			.info {
				.name {
					font-size: 32rpx;
					font-weight: bold;
					color: #FFFFFF;
					display: block;
				}
				
				.id {
					font-size: 24rpx;
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
		
		.balance {
			text-align: center;
			
			.label {
				font-size: 28rpx;
				color: rgba(255, 255, 255, 0.8);
				display: block;
				margin-bottom: 10rpx;
			}
			
			.amount {
				font-size: 48rpx;
				font-weight: bold;
				color: #FFFFFF;
			}
		}
	}
	
	.menu-list {
		display: flex;
		justify-content: space-around;
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 30rpx 0;
		margin-bottom: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
		
		.menu-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.icon-wrapper {
				width: 100rpx;
				height: 100rpx;
				background: #F5F5F5;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10rpx;
				
				image {
					width: 60rpx;
					height: 60rpx;
				}
			}
			
			text {
				font-size: 28rpx;
				color: #333333;
			}
		}
	}
	
	.task-list {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 30rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
		
		.section-title {
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 20rpx;
			color: #333333;
		}
		
		.task-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #EEEEEE;
			
			&:last-child {
				border-bottom: none;
			}
			
			.task-info {
				.task-name {
					font-size: 28rpx;
					color: #333333;
					display: block;
				}
				
				.task-reward {
					font-size: 24rpx;
					color: #FF6B00;
				}
			}
			
			.task-btn {
				width: 160rpx;
				height: 60rpx;
				background: #007AFF;
				color: #FFFFFF;
				border-radius: 30rpx;
				font-size: 24rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0 4rpx 8rpx rgba(0, 122, 255, 0.2);
			}
		}
	}
}
</style> 