<script setup lang="ts">
import { ref, reactive } from 'vue' 
// 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，
// 它们具备完整的类型推断并且在 <script setup> 中是直接可用的：
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#使用自定义指令

// ts
defineProps<{ msg: string }>()

// js
// defineProps({
//   msg: String
// })

interface iInfo {
  name: string,
  age: number,
  sex?: string
}

// ref
// 引用实现的实例对象（引用对象）
// ref 加工后后，就生成了一个引用对象，所以此处可以用 const 声
// ref 可以接收基本数据类型，也可以就收对象类型
const count = ref(0)

// ref 依然使用的是 Object.defineProperty 实现的响应式，内部通过 reactive 转为代理对象
const info = ref<iInfo>({
  name: 'John',
  age: 20
})

// reactive 通过 Proxy 实现的响应式，并通过 Reflect 操作源对象内部的数据
const info2 = reactive<iInfo>({
  name: 'Tony',
  age: 30
})

function countFn(): void {
  count.value++
  
}

function change(): void {
  info.value.name = 'Alicy'
  info.value.age = 20
}

function change2(): void {
  info2.name = 'Tom'
  info2.age = 40
}

function addSex(): void {
  info2.sex = '男'
  info.value.sex = '男'
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h4>名字:{{info.name}}</h4>
  <h4>年龄：{{info.age}}</h4>
  <h4 v-show="info.sex">性别：{{info.sex}}</h4>
  <h4 v-show="info2.sex">性别：{{info2.sex}}</h4>
  <button @click="change">修改姓名年龄信息</button>
  <button @click="addSex">添加性别</button>
  <button type="button" @click="countFn">count自增: {{ count }}</button>
</template>
