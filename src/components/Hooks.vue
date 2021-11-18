<script setup lang="ts">
import usePoint from '../hooks/usePoint';
const point = usePoint()

// hooks 类似于 vue2 的 mixin
// 优势 复用代码，让setup中的逻辑更清晰易懂

</script>

<template>
	<h1>Hooks</h1>
	<h3>当前点击鼠标的坐标为 x: {{ point.x }} y: {{ point.y }}</h3>
</template>
