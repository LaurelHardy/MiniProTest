import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

// 安装插件
Vue.use(Vuex);

// 创建仓库
const store = new Vuex.Store({
	modules:{
		home
	}
})

export default store