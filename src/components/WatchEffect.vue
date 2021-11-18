<script setup lang="ts">
import { ref, watchEffect, reactive } from 'vue'

// https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect

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

/**
 * 总结
 * 官方解释 立即执行传入的一个函数，响应式追踪其依赖，并在其依赖变更时重新运行该函数
 * 1 watchEffect 默认就开启了 immediate
 * 2 在 watchEffect 中，用到谁，就会自动侦听谁
 * 
 */

/**
 * watch 与 watchEffict 的区别
 * watch 会在每次计算属性的时候触发，而 watchEffect 会在依赖变更时触发
 * watch 不会触发首次计算，除非开启 immediate
 * watchEffect 会触发首次计算
 */

/**
 * watchEffict 与 computed 的区别
 * computed 注重计算出来的值（回调函数的返回值），所以必须写返回值
 * watchEffict 更注重过程（回调函数的函数体），所以不用写返回值
 */

watchEffect(() => {
  const { firstName, lastName } = person;
  console.log('wtchtEffect执行了');
  console.log(`${firstName} ${lastName}`);
  
  
})
</script>

<template>
  <h1>watchEffect</h1>
  <button @click="sum++">{{sum}}</button>
  <br>
  <span>当前的信息为{{msg}}</span>
  <button @click="msg += '!'">修改信息</button>
  <h2>姓 {{person.lastName}}</h2>
  <h2>名 {{person.firstName}}</h2>
  <h3>薪资 {{person.jobs.job1[0].salary}}</h3>
  <button @click="person.lastName += '__'">修改姓</button>
  <button @click="person.firstName += '--'">修改名</button>
  <button @click="person.jobs.job1[0].salary++">增长薪资</button>
</template>

