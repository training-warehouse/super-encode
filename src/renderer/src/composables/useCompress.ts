import {ref} from 'vue'

import useConfigStore from '../store/useConfigStore'
import {VideoState, VideoType} from '../types'

export default () => {
  const { config } = useConfigStore()
  const video = ref<VideoType>()

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
