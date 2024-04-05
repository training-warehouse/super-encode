<script setup lang="ts">
import { computed } from 'vue'
import { CloseOne } from '@icon-park/vue-next'

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
const { add, newValue, remove } = useVideo()

const list = computed(() => {
  return props.type === 'size' ? config.sizes : config.frames
})
</script>

<template>
  <el-select :placeholder="props.placeholder">
    <el-option v-for="(item, index) in list" :key="item" :label="item" :value="item">
      <div class="flex justify-between items-center">
        {{ item }}
        <div class="delIcon" @click="remove(props.type, index)" v-if="index > 1">
          <close-one theme="outline" size="15"></close-one>
        </div>
      </div>
    </el-option>
  </el-select>
  <div class="flex gap-1 mt-2 items-center">
    <el-input v-model="newValue" :placeholder="props.tip"/>
    <el-button :type="props.buttonStyle" @click="add(props.type)">添加
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.delIcon {
  @apply text-slate-300 hover:text-red-500 hover:scale-125 duration-300 cursor-pointer
}
</style>
