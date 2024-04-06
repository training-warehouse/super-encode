export type DataType = 'size' | 'frame'

export enum VideoState {
  READY = 'ready',
  COMPRESS = 'compress',
  ERROR = 'error',
  FINISH = 'finish'
}

export type VideoType = {
  name: string
  path: string
  progress: number
  state: VideoState
}

export type CompressOptions = {
  file: VideoType
  fps: number
  size: string
  saveDirectory: string
}
