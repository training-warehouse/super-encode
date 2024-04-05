<template>
  <main>
    <section class="flex justify-center gap-2">
      <div class="button">
        <el-upload
          ref="upload"
          action="#"
          multiple
          class="flex items-center"
          :http-request="addFile"
          :show-file-list="false"
          drag
        >
          <plus theme="outline" size="42" />
        </el-upload>
      </div>
      <div class="button"><update-rotation theme="outline" size="42"/></div>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { Plus, UpdateRotation } from '@icon-park/vue-next'
import {UploadRequestOptions} from "element-plus";

const addFile = (options: UploadRequestOptions) => {
  console.log(options)
}
</script>

<style lang="scss" scoped>
.button {
  @apply w-20 h-20 rounded-lg bg-white flex justify-center items-center text-slate-600;
}

:deep(.el-upload-dragger) {
  padding: 0 !important;
  border: none !important;
}
</style>
