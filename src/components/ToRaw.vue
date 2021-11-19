<script setup lang="ts">
import { ref, reactive, toRaw, markRaw } from '@vue/reactivity';

// const person = ref({
const person = reactive({
	firstName: 'Leonardo',
	lastName: 'Lee',
	jobs: {
		job1: [
			{
				name: '前端开发',
				salary: 100,
			},
			{
				name: '后端开发',
				salary: 1000,
			},
		],
	},
});

function showRawPerson() {

	// 1 toRaw
	// 还原为原始的对象
	// https://v3.cn.vuejs.org/api/basic-reactivity.html#toraw

	const toPerson = toRaw(person);
	console.log('toRaw => person:', toPerson);

	toPerson.firstName = '尝试改变数据';
	// 无法改变 person ，因为 toPerson 已经不是响应式的了
}

// 2 markRaw
// https://v3.cn.vuejs.org/api/basic-reactivity.html#markraw
// 有些值不应该是响应式的，例如复杂的第三方类实例或 Vue 组件对象。
// 当渲染具有不可变数据源的大列表时，跳过 proxy 转换可以提高性能。


</script>

<template>
	<h1>toRaw markRaw</h1>
	<h3>姓 {{ person.lastName }}</h3>
	<h3>名 {{ person.firstName }}</h3>
	<h3>薪资 {{ person.jobs.job1[0].salary }}</h3>
	<button @click="person.lastName += '__'">修改姓</button>
	<button @click="person.firstName += '--'">修改名</button>
	<br />
	<button @click="person.jobs.job1[0].salary++">增长薪资（shallowReactive导致无法修改）</button>
	<br />
	<button @click="showRawPerson">输出最原始的 person</button>
</template>
