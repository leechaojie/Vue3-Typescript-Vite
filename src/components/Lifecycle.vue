<script setup lang="ts">
import { ref } from '@vue/reactivity'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated
} from 'vue'

// 生命周期钩子 https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#生命周期钩子
// 组合式API https://v3.cn.vuejs.org/api/composition-api.html#生命周期钩子

const sum = ref<number>(0)

console.log('%csetup', 'color: red')

onBeforeMount(() => {
  console.log('%conBeforeMount', 'color: red')
})

onMounted(() => {
  console.log('%conMounted', 'color: red')
})

onBeforeUpdate(() => {
  console.log('%conBeforeUpdate', 'color: red')
})

onUpdated(() => {
  console.log('%conUpdated', 'color: red')
})

onBeforeUnmount(() => {
  console.log('%conBeforeUnmount', 'color: red')
})

onUnmounted(() => {
  console.log('%conUnmounted', 'color: red')
})

onErrorCaptured(() => {
  console.log('%conErrorCaptured', 'color: red')
})

onRenderTracked(() => {
  console.log('%conRenderTracked', 'color: red')
})

onRenderTriggered(() => {
  console.log('%conRenderTriggered', 'color: red')
})

onActivated(() => {
  console.log('%conActivated', 'color: red')
})

onDeactivated(() => {
  console.log('%conDeactivated', 'color: red')
})
</script>

<template>
  <h1>Lifecycle Hooks 生命周期钩子</h1>
  <button @click="sum++">点击加1 {{sum}}</button>
</template>