<script setup lang="ts">
import { computed, reactive } from 'vue'

// https://v3.cn.vuejs.org/api/computed-watch-api.html#computed

const person = reactive({
  firstName: 'Leonardo',
  lastName: 'Lee',
})

// 计算属性 在没有修改计算属性需求的时候
// const fullName = computed(() => `${person.firstName} ${person.lastName}`)
// console.log('%cfullName', 'color: blue', fullName.value);

// 计算属性的特点
// 1. 只有在计算属性的值发生变化的时候才会触发 getter 和 setter
// 2. 计算属性会立即执行

// 计算属性 在修改计算属性需求的时候
const fullName = computed<string>({
  get: () => `${person.firstName} ${person.lastName}`,
  set: (value: string): void => {
    const [firstName, LastName] = value.split(' ')
    person.firstName = firstName
    person.lastName = LastName
  }
})

</script>

<template>
  <h1>computed 计算属性</h1>
  <div>
    <input v-model="person.firstName" />
    <input v-model="person.lastName" />
    <span>{{fullName}}</span>
    <br>
    修改计算属性<input v-model="fullName" />
  </div>
</template>