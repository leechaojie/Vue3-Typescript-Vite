<script setup lang="ts">
import { ref, watch } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Lifecycle from './components/Lifecycle.vue'
import Setup from './components/Setup.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'
import WatchEffict from './components/watchEffect.vue'

// 测试接收到的 emit
function testFn(value: string): void {
  console.log('test-emit', value)
}

const isShow = ref<boolean>(true)

watch(isShow, (value: boolean) => {
  console.log('watch-isShow', value)
})

</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <br/>
  <button style="margin-top: 20px;" @click="isShow = !isShow">切换隐藏显示 Lifecycle</button>
  <Lifecycle  v-if="isShow" />
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
  <WatchEffict />
</template>

<style>
  h1 {
    padding-top: 20px;
    border-top: 1px solid palevioletred;
  }
</style>

