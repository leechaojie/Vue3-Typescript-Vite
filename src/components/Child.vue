<script setup lang="ts">
import Inject from './Inject.vue';
import { inject } from 'vue';

// 1 父组件给子组件以及后代组件传递数据
// 配合 Provide.vue 和 Inject.vue 使用的demo

// 2 组件也可以接收通过由父组件使用 provide 传递的数据
// 3 父子之间一般不通过次方法传递，props 足够了

const car = inject('car');
</script>

<template>
	<div style="background-color: yellowgreen" class="p-10">
		<h3>子组件</h3>
		<span>子组件也可以接收通过由父组件使用 provide 传递的数据{{ car }}</span>
		<Inject />
	</div>
</template>
