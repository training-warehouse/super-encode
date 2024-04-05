<script setup lang="ts">
import { ref } from 'vue'
import VideoItem from "./VideoItem.vue";

const videos = ref(['aaa', '北斗卫星导航系统（Beidou Navigation Satellite System'])
</script>

<template>
  <main class="overflow-y-auto h-80">
    <VideoItem v-for="(video, index) in videos" :key="index" :video="{ title: video }" />
  </main>
</template>

<style scoped lang="scss"></style>
