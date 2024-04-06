import { UploadRequestOptions } from 'element-plus'
import useConfigStore from '../store/useConfigStore'
import { VideoState, VideoType } from '../types'

export default () => {
  const { config } = useConfigStore()
  const addFile = (options: UploadRequestOptions) => {
    const name = options.file.name
    const path = options.file.path
    config.files.push({ name, path, progress: 0, state: VideoState.READY })
  }

  const removeFile = async (index: number) => {
    // await ElMessageBox.confirm('确认是否删除？')
    config.files.splice(index, 1)
  }

  const removeAll = () => {
    config.files = []
  }

  const getVideoBgColor = (video: VideoType) => {
    return {
      [VideoState.COMPRESS]: '#F9F871',
      [VideoState.ERROR]: '#f3a683',
      [VideoState.FINISH]: '#55efc4'
    }[video.state]
  }

  return { addFile, removeFile, removeAll, getVideoBgColor }
}
