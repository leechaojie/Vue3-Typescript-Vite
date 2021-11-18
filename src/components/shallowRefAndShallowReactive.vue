<script setup lang="ts">
import { shallowRef, shallowReactive } from 'vue';

// 1 shallowReactive 只能做相应式的一层嵌套
// 如果有一个很深的对象，我们只想要外层的做响应式，就可以使用 shallowReactive
const person = shallowReactive({
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

// 2 shallowRef 只能对基础类型进行响应式
const num = shallowRef(1);
// 3 shallowRef 不会处理对象类型的响应式，ref 会通过 eactive 转为代理对象
// 如果有一个对象，后续不会修改对象中的属性，就可以用 shallowRef
const numObj = shallowRef({
	x: 1,
});
// console.log('numObj', numObj); // 内部 value 是 object ，而不是 Proxy
</script>

<template>
	<h1>shallowRef shallowReactive</h1>
	<h3>姓 {{ person.lastName }}</h3>
	<h3>名 {{ person.firstName }}</h3>
	<h3>薪资 {{ person.jobs.job1[0].salary }}</h3>
	<button @click="person.lastName += '__'">修改姓</button>
	<button @click="person.firstName += '--'">修改名</button>
	<br />
	<button @click="person.jobs.job1[0].salary++">增长薪资（shallowReactive导致无法修改）</button>
	<br />
	<button @click="num++">shallowRef 点击加一 {{ num }}</button>
	<button @click="numObj.x++">shallowRef 点击让 numObj.x 加一 {{ numObj.x }}</button>
</template>
