<script setup lang="ts">
import { readonly, shallowReadonly, reactive, ref } from '@vue/reactivity';

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

// 1 readlony 是制只读的，无论 ref 代理 还是 reactive 代理，都无法修改
// https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly
// const rePerson = readonly(person);

// 2 shallowReadonly 只能修改对象的第一层数据，深层数据可以修改
// 如果是 ref 代理的数据，无论是 对象还是基本数据，都可以修改
// https://v3.cn.vuejs.org/api/basic-reactivity.html#shallowreadonly
const rePerson = shallowReadonly(person);

</script>

<template>
	<h1>readonly shallowReadonly</h1>
	<h3>姓 {{ rePerson.lastName }}</h3>
	<h3>名 {{ rePerson.firstName }}</h3>
	<h3>薪资 {{ rePerson.jobs.job1[0].salary }}</h3>
	<!-- <button @click="rePerson.lastName += '__'">修改姓</button>
	<button @click="rePerson.firstName += '--'">修改名</button> -->
	<br />
	<button @click="rePerson.jobs.job1[0].salary++">增长薪资（shallowReactive导致无法修改）</button>
	<br />
</template>
