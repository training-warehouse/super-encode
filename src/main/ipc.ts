import { ipcMain } from 'electron'
import Ffmpeg, { CompressOptions } from './ffmpeg'

ipcMain.handle('compress', async (_event, options: CompressOptions) => {
  const compress = new Ffmpeg(_event, options)
  compress.run()
})
