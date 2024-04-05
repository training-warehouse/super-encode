<script setup lang="ts">
import { computed } from 'vue'
import useConfigStore from '@renderer/store/useConfigStore'
import useVideo from '@renderer/composables/useVideo'
import { DataType } from '@renderer/types'

interface Prop {
  type: DataType
  placeholder?: string
  tip?: string
  buttonStyle?: 'success' | 'danger' | 'primary'
}

const props = defineProps<Prop>()

const { config } = useConfigStore()
const { add, newValue } = useVideo()

const list = computed(() => {
  return props.type === 'size' ? config.sizes : config.frames
})
</script>

<template>
  <el-select :placeholder="props.placeholder">
    <el-option v-for="item in list" :key="item" :label="item" :value="item"> </el-option>
  </el-select>
  <div class="flex gap-1 mt-2 items-center">
    <el-input v-model="newValue" :placeholder="props.tip" />
    <el-button :type="props.buttonStyle" @click="add(props.type)">添加</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
