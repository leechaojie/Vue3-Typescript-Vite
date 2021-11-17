<script setup lang="ts">
import { useSlots, useAttrs } from 'vue'

// 在不使用 <script setup>  时，setup 接收两个参数，第一个是组件实例 props，第二个是组件实例的上下文 context setup(props, context)
// https://v3.cn.vuejs.org/guide/composition-api-setup.html#context

// 在 <script setup> 中必须使用 defineProps 和 defineEmits API 来声明 props 和 emits ，
// 它们具备完整的类型推断并且在 <script setup> 中是直接可用的：
// https://v3.cn.vuejs.org/api/sfc-script-setup.html#使用自定义指令

// props
const props = defineProps<{ msg: string }>()
console.log('props', props);

// emits
const emits = defineEmits<{
  (e: 'add', value: string): void
}>()
console.log('emits', emits);

// slots
const slots = useSlots()
console.log('slots', slots);

// attrs
const attrs = useAttrs()
console.log('attrs', attrs);

function test(): void {
  emit('add', 'hello')
}
</script>

<template>
  <h1>Setup</h1>
  <button @click="test">触发 emit</button>
  <span>{{msg}}</span>
  <slot name="header"></slot>
  <slot name="footer"></slot>
</template>
