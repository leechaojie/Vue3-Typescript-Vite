<script setup lang="ts">
import { ref, customRef } from '@vue/reactivity';

// customRef
// https://v3.cn.vuejs.org/api/refs-api.html#customref

// const keyword = ref('vue'); // 使用 vue 提供的 ref
const keyword = myRef('customRef 自定义ref');

// 自定义一个ref
function myRef<T>(value: T, delay = 1000) {
  let timeOut: number;
	return customRef((track, trigger) => {
		return {
			get() {
				track(); // 追踪 value 的改变
				return value;
			},
			set(newValue: T) {
				console.log('set', newValue);
        
        // 清理定时器，防抖
        clearTimeout(timeOut)
				timeOut = setTimeout(() => {
					value = newValue;
					trigger(); // 通知 vue 重新解析模版
				}, delay);
			},
		};
	});
}
</script>

<template>
	<h1>customRef</h1>
	<h3>{{ keyword }}</h3>
	<input type="text" v-model="keyword" />
</template>
