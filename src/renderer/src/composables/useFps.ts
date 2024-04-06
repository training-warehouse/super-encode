import { ref } from 'vue'
import useConfigStore from '@renderer/store/useConfigStore'
import { ElMessage, ElMessageBox } from 'element-plus'
import { DataType } from '@renderer/types'

export default () => {
  const newValue = ref('')
  const { config } = useConfigStore()

  const add = (type: DataType) => {
    if (!newValue.value.trim().length) {
      return ElMessage({ message: '请先设置值', type: 'error' })
    }

    if (type === 'size') {
      config.sizes.push(newValue.value)
    } else {
      config.frames.push(newValue.value)
    }
    newValue.value = ''
    ElMessage({ message: '添加成功', type: 'success', grouping: true })
  }

  const remove = async (type: DataType, index: number) => {
    await ElMessageBox.confirm('确定要删除吗？')
    if (type === 'size') {
      config.sizes.splice(index, 1)
    } else {
      config.frames.splice(index, 1)
    }
    ElMessage({ message: '删除成功', type: 'success', grouping: true })
  }

  return { newValue, add, remove }
}
