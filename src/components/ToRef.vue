<script setup lang="ts">
import { reactive, toRef, toRefs } from 'vue';

/**
 * toRef
 * https://v3.cn.vuejs.org/api/refs-api.html#toref
 */

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

// 1. 为什么要用 toRef，如果需要将 person 内的一个属性通过 props/emit 传递出去，person.firstName 是只读的，不能修改，
// 假如传递出去的 person.firstName 需要修改，并且在本页面也相应的修改，那么就需要用 toRef，
const name1 = toRef(person, 'firstName');
const name2 = person.firstName;
console.log('name', name1); // 拿到的是一个 Ref 对象，需要name1.value才能拿到值，因此是响应式
console.log('name2', name2); // 拿到的是一个只读的引用，所以不是响应式

// 2. toRef 只能处理一个属性，toRefs可以处理对象内的所有属性
// 当需要在组件之间传递很多数据是，使用 job1.xxx 就可以传递出去，不用在每个都用 toRef
const job1 = toRefs(person);
console.log('job1', job1); // 拿到的是一个对象，需要job1.job1才能拿到值，因此是响应式

</script>

<template>
  <h1>toRef, toRefs</h1>
	<h2>姓 {{ person.lastName }}</h2>
	<h2>名 {{ person.firstName }}</h2>
	<h3>薪资 {{ person.jobs.job1[0].salary }}</h3>
	<button @click="person.lastName += '__'">修改姓</button>
	<button @click="person.firstName += '--'">修改名</button>
	<button @click="person.jobs.job1[0].salary++">增长薪资</button>
</template>
