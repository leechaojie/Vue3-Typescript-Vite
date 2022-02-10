<script setup lang="ts">
import Child from './Child.vue';
import { reactive, provide } from 'vue';

// 1 provide 给后代组件传递数据，后代组件通过 inject 接收
// 2 无论子组件还是后代组件，都可以通过 inject 接收数据
// 3 父子之间一般不通过此方法传递，props 足够了
// https://v3.cn.vuejs.org/guide/component-provide-inject.html#provide-inject

const car = reactive({
	name: '奔驰',
	price: '40w',
});

// 给后代组件传递数据
provide('car', car);
</script>

<template>
	<h1>provide / inject</h1>
	<div style="background-color: aqua" class="p-10">
		<h3>父组件</h3>
		<span>{{ car.name }}==={{ car.price }}</span>
		<Child />
	</div>
</template>

<style scoped>
.p-10 {
	padding: 10px;
}
</style>
