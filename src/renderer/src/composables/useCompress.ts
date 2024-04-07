import { ref, toRefs } from 'vue'

import useConfigStore from '../store/useConfigStore'
import { VideoState, VideoType } from '../types'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfigStore()
  const video = ref<VideoType>()
  const { videoSaveDirectory } = toRefs(config)

  const validate = () => {
    let message = ''
    if (!videoSaveDirectory.value.trim().length) message = '视频目录不能为空'
    if (!config.files.length) message = '请先添加视频文件'

    if (message) ElMessage.error({ grouping: true, message })
    return message === ''
  }

  const getCompressFile = () => {
    video.value = config.files.find((_video) => _video.state === VideoState.READY)
    if (video.value) video.value.state = VideoState.COMPRESS
  }

  const progressNotice = () => {
    window.api.progressNotice((progress) => {
      video.value!.progress = progress
    })
  }

  const compress = () => {
    if (!validate()) return

    progressNotice()
    getCompressFile()
    window.api.compress({
      file: { ...video.value! },
      fps: Number(config.frame),
      size: config.size,
      saveDirectory: config.videoSaveDirectory
    })
  }

  return { compress }
}
