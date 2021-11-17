<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Life from './components/Life.vue'
import Setup from './components/Setup.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'

// 测试接收到的 emit
function testFn(value: string): void {
  console.log('test-emit', value)
}
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <life />
  <Setup @add="testFn" msg="测试props">
    <template v-slot:header>
      <div>slot-header</div>
    </template> 
    <template v-slot:footer>
      <div>slot-footer</div>
    </template>
  </Setup>
  <Computed />
  <Watch />
</template>

