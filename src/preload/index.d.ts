import { ElectronAPI } from '@electron-toolkit/preload'
import { CompressOptions } from '../renderer/src/types'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      compress: (options: CompressOptions) => void
      selectDirectory: () => Promise<any>
      progressNotice: (callback: (progress: number) => void) => void
    }
  }
}
