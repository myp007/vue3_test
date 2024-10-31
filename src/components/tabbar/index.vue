<!--
 * @Author: m
 * @Date: 2024-10-31 10:56:59
 * @LastEditTime: 2024-10-31 14:39:03
 * @Description: 
 * @FilePath: \vue3_h5\src\components\tabbar\index.vue
-->
<template>
	<div class='tabbarBox'>
		<div class="tabbar-box" v-if="tabs.length > 0">
			<div class="tabbar-item" v-for="(item, index) in tabs" :key="index"
				:class="{ 'active': activeIndex === index }" @click="selectTab(index,item.path)">
				{{ item.title }}
			</div>
		</div>
	</div>
</template>
<script setup >
 import { useRouter } from 'vue-router'
 import { ref, reactive ,watchEffect,onMounted} from "vue"
// 接收参数
const props = defineProps({
	tabs: {
		type: Array,
		default: () => { },
	},
});
 
const router = useRouter()
const tabs = ref([])
let activeIndex = ref(0);
 
watchEffect(() => {
	tabs.value = props.tabs;
});
 
const selectTab = (index,path) => {
	if(activeIndex.value == index)return;
	console.log(index)
  	activeIndex.value = index;
	router.push(path)
};
 
onMounted(() => {
	let tab_path = router.currentRoute.value.path
	let i =  tabs.value.findIndex((item) => item.path == tab_path)
	activeIndex.value = i < 0 ? 0 : i
})
</script>

<style scoped lang='scss'>
.tabbarBox {
  .tabbar-box{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

  }
  .tabbar-item{
	text-align: center;
	flex: 1;
  }
  .active{
	color: #1989fa;
  }
}
</style>