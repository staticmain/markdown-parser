<template>
  <div id="app" class="flex flex-col items-center">
    <textarea class="w-full min-h-32" v-model="textArea"></textarea>
    <div class="w-full mt-6 h-px bg-black"></div>

    <!-- 解析markdown内容 -->
    <div class="w-full mt-6 border border-black border-solid markdown-wrapper">
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useMarkdown } from "./use_markdown";

const demoText = `
## 目标

1. 新人有一套能够**快速**上手的**规范**任务流

2. 为重构平台打下基础

## 措施

1. 如何建立一个任务流？

   a. 普及基础知识（平台和代码的基础使用）

   b. 简单的实际操作（平台的简单业务流）

   c. 代码的简单梳理，需要过一遍一个模块的构成

   d. 单独完成一个模块的代码

   e. 代码走读，认识自己（是否有提高和不足）

   f. 使用总结，对产品的理解
   
2. 发现重构的难点

    a. 时间紧，任务多，如何高效完成一个模块的重写？

    b. 如何不遗漏一个模块的业务？

    c. 如何让测试相信你的模块已经开发完全
`

const textArea = ref(demoText);

const html = computed(() => {
  return useMarkdown(textArea.value);
});
</script>

<style scoped>
.markdown-wrapper {
	min-height: 500px;
}






</style>
