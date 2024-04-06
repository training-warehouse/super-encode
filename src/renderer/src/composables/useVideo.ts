import {ElMessageBox, UploadRequestOptions} from 'element-plus'
import useConfigStore from '../store/useConfigStore'


export default () => {
  const { config } = useConfigStore()
  const addFile = (options: UploadRequestOptions) => {
    const name = options.file.name
    const path = options.file.path
    config.files.push({ name, path, progress: 0, finish: false })
  }

  const removeFile = async (index: number) => {
    // await ElMessageBox.confirm('确认是否删除？')
    config.files.splice(index, 1)
  }

  const removeAll = () =>{
    config.files = []
  }

  return { addFile, removeFile, removeAll }
}
