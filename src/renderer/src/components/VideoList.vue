<script setup lang="ts">
import { ref } from 'vue'
import VideoItem from './VideoItem.vue'
import useConfigStore from '../store/useConfigStore'

const { config } = useConfigStore()
</script>

<template>
  <main class="overflow-y-auto h-80">
    <template v-if="config.files.length">
      <VideoItem
        v-for="(video, index) in config.files"
        :key="index"
        :video="video"
        :index="index"
      />
    </template>
    <div v-else class="text-xs opacity-80 text-slate-600 text-center">暂无压缩视频</div>
  </main>
</template>

<style scoped lang="scss"></style>
