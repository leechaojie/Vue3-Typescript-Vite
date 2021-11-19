<script setup lang="ts">
import { ref, reactive, readonly, isRef, isReactive, isReadonly, isProxy } from '@vue/reactivity';

// https://v3.cn.vuejs.org/api/refs-api.html#isref

const sum = ref(0);

const car = reactive({
	name: '奔驰',
	price: '40w',
});

const car2 = readonly(car);
console.log(car2);

console.log('isRef', isRef(sum)); // true
console.log('isReactive', isReactive(car)); // true
console.log('isReadonly', isReadonly(car2)); // true
console.log('isProxy', isProxy(car)); // true
console.log('isProxy', isProxy(car2)); // true, readlony虽然是只读，但是仍然是proxy
</script>

<template>
	<h1>isRef / isReactive / isReadonly / isProxy</h1>
</template>
