# Vue 3 + Typescript + Vite 笔记

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 新组件

- Fragment 一个空标签不会显示在 DOM 上
- [Teleport](https://v3.cn.vuejs.org/guide/teleport.html#teleport)
- [Suspense](https://v3.cn.vuejs.org/guide/migration/suspense.html#suspense)

## 移除的Api

- 移除 keyCode 作为 v-on 修饰符，同时不再支持 config.keyCodes
- 移除 v-on.native (vue2中，引入的组件内加入 @click ，vue会认为这是一个自定义事件，是有加上native才起效果)
- 移除过滤器 filter
