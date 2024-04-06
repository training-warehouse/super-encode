import useConfigStore from '../store/useConfigStore'

export default () => {
  const { config } = useConfigStore()
  const getCompressFile = () => {
    return config.files[0]
  }

  const compress = () => {
    const file = getCompressFile()
    window.api.compress({
      file: { ...file },
      fps: Number(config.frame),
      size: config.size
    })
  }

  return { compress }
}
