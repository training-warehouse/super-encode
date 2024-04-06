<script setup lang="ts">
import Card from '@renderer/components/Card.vue'
import FrameSizeSet from '@renderer/components/FrameSizeSet.vue'
import useConfigStore from '../store/useConfigStore'

const { config } = useConfigStore()
const selectDirectory = async () => {
  const res = await window.api.selectDirectory()
  if (res.length) {
    config.videoSaveDirectory = res
  }
}
</script>

<template>
  <main>
    <card title="分辨率">
      <FrameSizeSet
        type="size"
        placeholder="分辨率设置"
        tip="请输入如：1920x1080 的格式"
        button-style="primary"
      />
    </card>
    <card title="帧数">
      <FrameSizeSet
        type="frame"
        placeholder="帧数设置"
        tip="请输入如：60 的数字格式"
        button-style="primary"
      />
    </card>
    <card title="视频保存目录">
      <div class="flex gap-1">
        <el-input v-model="config.videoSaveDirectory" clearable readonly />
        <el-button type="primary" @click="selectDirectory">选择</el-button>
      </div>
    </card>
  </main>
</template>

<style scoped lang="scss"></style>
