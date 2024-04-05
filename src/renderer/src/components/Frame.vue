<script setup lang="ts">
import useConfigStore from '@renderer/store/useConfigStore'

const { config } = useConfigStore()
</script>

<template>
  <main class="bg-white p-3 flex gap-2">
    <el-select v-model="config.size" placeholder="placeholder">
      <el-option
        v-for="item in config.sizes"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    <el-select v-model="config.frame" placeholder="placeholder">
      <el-option
        v-for="item in config.frames"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
  </main>
</template>

<style scoped lang="scss"></style>
