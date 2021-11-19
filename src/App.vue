<script setup lang="ts">
import { ref, watch } from 'vue';
import RefAndReavtive from './components/RefAndReavtive.vue';
import ShallowRefAndShallowReactive from './components/ShallowRefAndShallowReactive.vue';
import Lifecycle from './components/Lifecycle.vue';
import Setup from './components/Setup.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import WatchEffict from './components/watchEffect.vue';
import Hooks from './components/Hooks.vue';
import ToRef from './components/ToRef.vue';
import ToRaw from './components/ToRaw.vue';
import CustomRef from './components/CustomRef.vue';

// 测试接收到的 emit
function testFn(value: string): void {
	console.log('test-emit', value);
}

const isShow = ref<boolean>(true);

watch(isShow, (value: boolean) => {
	console.log('watch-isShow', value);
});
</script>

<template>
	<RefAndReavtive msg="Ref 和 Reavtive" />
	<ShallowRefAndShallowReactive />
	<br />
	<button style="margin-top: 20px" @click="isShow = !isShow">切换隐藏显示 Lifecycle</button>
	<Lifecycle v-if="isShow" />
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
	<Hooks />
	<ToRef />
	<ToRaw />
  <CustomRef />
</template>

<style>
body,
html {
	padding-bottom: 50px;
}
h1 {
	padding-top: 20px;
	border-top: 1px solid palevioletred;
}
</style>
