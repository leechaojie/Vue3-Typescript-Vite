<script setup lang="ts">
import { ref, watch, reactive } from 'vue'

// https://v3.cn.vuejs.org/api/computed-watch-api.html#watch

const sum = ref(0);
const msg = ref('hello');

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
    ]
  }
})

// 1，侦听 ref 定义的响应式数据
// watch(sum, (newVal, oldVal) => {
//   console.log('watch sum', newVal, oldVal)
// })

// 2，侦听多个
watch([sum, msg], ([newSum, newMsg], [oldSum, oldMsg]) => {
  console.log('watch sum, msg = new', newSum, newMsg)
  console.log('watch sum, msg = old', oldSum, oldMsg)
}, {
  immediate: true, // 启动侦听时立即触发一次
})

// 3，侦听对象
// TODO newVal, oldVal 是相同的
watch(person, (newVal, oldVal) => {
  // 使用 reactive 侦听的数据，无法正确获取到 oldVal
  // 如果使用 ref 定义 对象，依然不行，原因是，ref 定义的 对象，ref 依然会调用 reactive
  console.log('watch person', newVal, oldVal)
}, {
  deep: false // 5，无法关闭深度侦听（可能会出现效率问题，我们可能只想侦听某一个属性，并不需要全部侦听）
})

// 6，侦听对象的一个属性
// watch(person.firstName, (newVal, oldVal) => { // TODO 错误的语法
// 必须写成回调函数的形式
watch(() => person.firstName, (newVal, oldVal) => {
  console.log('watch person.firstName', newVal, oldVal)
})

// 7，侦听对象的多个属性
watch([() => person.firstName, () => person.lastName], ([newFirstName, newLastName], [oldFirstName, oldLastName]) => {
  console.log('watch person.firstName, person.lastName', newFirstName, newLastName)
  console.log('watch person.firstName, person.lastName', oldFirstName, oldLastName)
})

// 8，侦听对象内的某个对象 特殊情况
watch(() => person.jobs, (newVal, oldVal) => {
  console.log('watch person.jobs', newVal, oldVal)
}, {
  deep: true // TODO 侦听reactive 定义的对象中的某个对象，如果不使用 deep，无法侦听 person.jobs 内部的变化
})

/**
 * 总结
 * a 直接侦听 reactive 定义的数据，默认 深度侦听，并且无法关闭 deep
 * b 侦听 reactive 内的某个属性，包括对象，需要使用回调函数形式
 * c 侦听 reactive 内的某个属性，属性是对象，则默认不会开启 deep，需要手动开启 deep
 */
</script>

<template>
  <h1>Watch 侦听</h1>
  <button @click="sum++">{{sum}}</button>
  <br>
  <span>当前的信息为{{msg}}</span>
  <button @click="msg += '!'">修改信息</button>
  <h2>姓 {{person.lastName}}</h2>
  <h2>名 {{person.firstName}}</h2>
  <h3>薪资 {{person.jobs.job1[0].salary}}</h3>
  <button @click="person.lastName += '__'">修改姓</button>
  <button @click="person.firstName += '--'">修改名</button>

  <!-- 4，增长薪资是深度嵌套的，watch 没有开启 deep，但还是会深度侦听 -->
  <button @click="person.jobs.job1[0].salary++">增长薪资</button>
</template>

