import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {
			name: '用户名',
			id: '123456',
			avatar: 'https://via.placeholder.com/100x100/007AFF/FFFFFF?text=头像'
		},
		balance: 0.00,
		tasks: [
			{
				id: 1,
				name: '观看视频',
				reward: 0.5,
				completed: false
			},
			{
				id: 2,
				name: '分享文章',
				reward: 1.0,
				completed: false
			}
		]
	},
	mutations: {
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo
		},
		SET_BALANCE(state, balance) {
			state.balance = balance
		},
		UPDATE_TASK_STATUS(state, { taskId, completed }) {
			const task = state.tasks.find(t => t.id === taskId)
			if (task) {
				task.completed = completed
			}
		}
	},
	actions: {
		updateUserInfo({ commit }, userInfo) {
			commit('SET_USER_INFO', userInfo)
		},
		updateBalance({ commit }, balance) {
			commit('SET_BALANCE', balance)
		},
		completeTask({ commit, state }, taskId) {
			const task = state.tasks.find(t => t.id === taskId)
			if (task && !task.completed) {
				commit('UPDATE_TASK_STATUS', { taskId, completed: true })
				commit('SET_BALANCE', state.balance + task.reward)
			}
		}
	},
	getters: {
		userInfo: state => state.userInfo,
		balance: state => state.balance,
		tasks: state => state.tasks,
		completedTasks: state => state.tasks.filter(task => task.completed),
		pendingTasks: state => state.tasks.filter(task => !task.completed)
	}
})

export default store 