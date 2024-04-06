import { BrowserWindow, IpcMainInvokeEvent } from 'electron'
import path from 'path'

import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffprobePath from '@ffprobe-installer/ffprobe'
import ffmpeg from 'fluent-ffmpeg'
import { CompressOptions } from '../renderer/src/types'

ffmpeg.setFfmpegPath(ffmpegPath.path)
ffmpeg.setFfprobePath(ffprobePath.path)

export default class Ffmpeg {
  ffmpeg: ffmpeg.FfmpegCommand
  window: BrowserWindow

  constructor(
    private event: IpcMainInvokeEvent,
    private options: CompressOptions
  ) {
    this.ffmpeg = ffmpeg(this.options.file.path)
    this.window = BrowserWindow.fromWebContents(this.event.sender)!
  }

  progressEvent(progress) {
    this.window.webContents.send('progressNotice', progress.percent)
  }
  errorEvent(error) {
    console.log(error)
  }
  endEvent() {
    console.log('end')
  }

  private getFileInfo() {
    const info = path.parse(this.options.file.name)
    return path.join(
      this.options.saveDirectory,
      `${info.name}-${this.options.size}-${this.options.fps}${info.ext}`
    )
  }

  run() {
    const filePath = this.getFileInfo()
    this.ffmpeg
      .videoCodec('libx264')
      .fps(this.options.fps)
      .size(this.options.size)
      .on('progress', this.progressEvent.bind(this))
      .on('error', this.errorEvent.bind(this))
      .on('end', this.endEvent.bind(this))
      .save(filePath)
  }
}
