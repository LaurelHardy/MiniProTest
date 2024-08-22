<template>
	<view>
		CateList---{{L1Id}}---{{cateObj.category.parentId}}
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		name:"CateList",
		props:['L1Id'],
		data() {
			return {	
				cateList:[],
			};
		},
		mounted() {
			this.getCateList();
		},
		methods: {
			async getCateList() {
				const res = await request('/getIndexCateList');
				console.log(res);
				this.cateList = res.indexCateList;
			}
		},
		computed:{
			cateObj(){
				return this.cateList.find(item=>item.category.parentId===this.L1Id)
			}
		}
	}
</script>

<style lang="stylus">

</style>