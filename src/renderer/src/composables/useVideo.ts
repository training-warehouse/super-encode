import { ref } from 'vue'
import useConfigStore from '@renderer/store/useConfigStore'
import { ElMessage } from 'element-plus'
import { DataType } from '@renderer/types'

export default () => {
  const newValue = ref('')
  const { config } = useConfigStore()
  const add = (type: DataType) => {
    if (type === 'size') {
      config.sizes.push(newValue.value)
    } else {
      config.frames.push(newValue.value)
    }
    newValue.value = ''
    ElMessage({ message: '添加成功', type: 'success', grouping: true })
  }

  return { newValue, add }
}
