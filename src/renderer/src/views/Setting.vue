<script setup lang="ts">
import Card from '@renderer/components/Card.vue'
import FrameSizeSet from '@renderer/components/FrameSizeSet.vue'
</script>

<template>
  <main>
    <card title="分辨率">
      <FrameSizeSet type="size" placeholder="分辨率设置" tip="请输入如：1920x1080 的格式" button-style="primary" />
    </card>
    <card title="帧数">
      <FrameSizeSet type="frame" placeholder="帧数设置" tip="请输入如：60 的数字格式" button-style="primary" />
    </card>
  </main>
</template>

<style scoped lang="scss">

</style>
