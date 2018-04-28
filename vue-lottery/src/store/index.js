import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/lib/axios'
Vue.use(Vuex)
/**
 * 状态管理
 */
let store = new Vuex.Store({
	state : {
		initMain: []
	},
	getters : {
		initMain: state => state.initMain
	},
	mutations : {},
	actions: {
		getInitMain (state) {
			api.InitMain()
			.then(res => {
				console.log(res)
			})
		}
	}
})

export default store