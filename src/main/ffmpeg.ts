import { IpcMainInvokeEvent } from 'electron'
import path from 'path'

import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffprobePath from '@ffprobe-installer/ffprobe'
import ffmpeg from 'fluent-ffmpeg'
import { VideoType } from '../renderer/src/types'

ffmpeg.setFfmpegPath(ffmpegPath.path)
ffmpeg.setFfprobePath(ffprobePath.path)

export type CompressOptions = {
  file: VideoType
  fps: number
  size: string
}

export default class Ffmpeg {
  ffmpeg: ffmpeg.FfmpegCommand

  constructor(
    private _event: IpcMainInvokeEvent,
    private options: CompressOptions
  ) {
    this.ffmpeg = ffmpeg(this.options.file.path)
  }

  progressEvent(progress) {
    console.log(progress)
  }
  errorEvent(error) {
    console.log(error)
  }
  endEvent() {
    console.log('end')
  }

  run() {
    console.log(this.options)
    this.ffmpeg
      .videoCodec('libx264')
      .fps(this.options.fps)
      .size(this.options.size)
      .on('progress', this.progressEvent.bind(this))
      .on('error', this.errorEvent.bind(this))
      .on('end', this.endEvent.bind(this))
      .save(path.resolve(__dirname, 'xxx.mp4'))
  }
}
