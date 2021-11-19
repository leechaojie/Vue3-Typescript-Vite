<script setup lang="ts">
import { inject } from 'vue'

// 后代使用 inject 接收父组件通过 provide 提供的数据
const car = inject('car')
console.log('后代接受到的数据', car);

</script>

<template>
  <div style="background-color: pink" class="p-10">
    <h3>后代组件</h3>
    <span>后代接收到的数据 {{ car }}</span>
  </div>
</template>
