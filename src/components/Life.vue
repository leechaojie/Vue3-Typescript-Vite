<script setup lang="ts">
import { ref } from 'vue'
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

const msg = ref('')

console.log('%csetup', 'color: red')

onBeforeMount(() => {
  console.log('%conBeforeMount', 'color: red')
  msg.value += 'beforeMount' + '\n'
})

onMounted(() => {
  console.log('%conMounted', 'color: red')
  msg.value += 'mounted' + '\n'
})

onBeforeUpdate(() => {
  console.log('%conBeforeUpdate', 'color: red')
  msg.value += 'beforeUpdate' + '\n'
})

onUpdated(() => {
  console.log('%conUpdated', 'color: red')
  // msg.value += 'updated' + '\n'
})

onBeforeUnmount(() => {
  console.log('%conBeforeUnmount', 'color: red')
  // msg.value += 'beforeUnmount' + '\n'
})

onUnmounted(() => {
  console.log('%conUnmounted', 'color: red')
  // msg.value += 'unmounted' + '\n'
})

onErrorCaptured(() => {
  console.log('%conErrorCaptured', 'color: red')
  // msg.value += 'errorCaptured' + '\n'
})

onRenderTracked(() => {
  console.log('%conRenderTracked', 'color: red')
  // msg.value += 'renderTracked' + '\n'
})

onRenderTriggered(() => {
  console.log('%conRenderTriggered', 'color: red')
  // msg.value += 'renderTriggered' + '\n'
})

onActivated(() => {
  console.log('%conActivated', 'color: red')
  // msg.value += 'activated' + '\n'
})

onDeactivated(() => {
  console.log('%conDeactivated', 'color: red')
  // msg.value += 'deactivated' + '\n'
})
</script>

<template>
  <h1>生命周期</h1>
  <textarea cols="100" rows="10">{{msg}}</textarea>
</template>