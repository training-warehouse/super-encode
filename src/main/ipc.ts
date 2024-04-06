import { ipcMain } from 'electron'
import Ffmpeg, { CompressOptions } from './ffmpeg'
import { selectDirectory } from './directory'

ipcMain.handle('compress', async (_event, options: CompressOptions) => {
  const compress = new Ffmpeg(_event, options)
  compress.run()
})

ipcMain.handle('selectDirectory', async () => {
  return await selectDirectory()
})
